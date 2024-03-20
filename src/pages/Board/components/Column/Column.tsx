import { Draggable } from 'react-beautiful-dnd';
import { ColumnContainer, ColumnTitle } from './styles/Column.styledcomponent';
import ColumnProps from './types/ColumnProps.type';
import Card from '../../../../components/Card';
import { useAppDispatch } from '../../../../store/store';
import { openTaskModal, setTaskModalData } from '../../../../store/features/Modal/ModalSlice';
import { useLazyQuery } from '@apollo/client';
import { GET_SUBTASKS } from '../../../../graphql/queries/subtasks';
import Task from '../../../../types/Task.type';
import { useState } from 'react';

export const Column = ({ title, tasks, color }: ColumnProps) => {
	const dispatch = useAppDispatch();
	const [currentTask, setCurrentTask] = useState<Task | null>(null);

	const [getSubTasks] = useLazyQuery(GET_SUBTASKS, {
		onCompleted: (data) => {
			dispatch(openTaskModal());
			dispatch(setTaskModalData({ task: currentTask, subtasks: data }));
		},
	});

	const onOpenTaskModal = async (task: Task) => {
		setCurrentTask(task);
		await getSubTasks({ variables: { task_id: task.id } });
	};

	return (
		<ColumnContainer>
			<ColumnTitle color={color}>{`${title} (${tasks.length})`}</ColumnTitle>
			{tasks.map((task, index) => (
				<Draggable draggableId={task.id} key={task.id} index={index}>
					{(provided) => (
						<div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
							<Card task={task} onClick={() => onOpenTaskModal(task)} />
						</div>
					)}
				</Draggable>
			))}
		</ColumnContainer>
	);
};
