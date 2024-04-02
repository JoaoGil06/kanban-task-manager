import { Draggable } from 'react-beautiful-dnd';
import { ColumnContainer, ColumnTitle } from './styles/Column.styledcomponent';
import ColumnProps from './types/ColumnProps.type';
import Card from '../../../../components/Card';
import { useAppDispatch } from '../../../../store/store';
import { useLazyQuery } from '@apollo/client';
import { GET_SUBTASKS } from '../../../../graphql/queries/subtasks';
import Task from '../../../../types/Task.type';
import { useState } from 'react';
import { openTaskModal, setTaskModalData } from '../../../../store/features/Modals/TaskModal/TaskModalSlice';

export const Column = ({ title, tasks, color }: ColumnProps) => {
	const dispatch = useAppDispatch();
	const [currentTask, setCurrentTask] = useState<Task | null>(null);

	const [getSubtasks] = useLazyQuery(GET_SUBTASKS, {
		onCompleted: (data) => {
			dispatch(openTaskModal());
			dispatch(setTaskModalData({ task: currentTask as Task, subtasks: data }));
		},
	});

	const onOpenTaskModal = async (task: Task) => {
		setCurrentTask(task);
		await getSubtasks({ variables: { task_id: task.id } });
	};

	return (
		<ColumnContainer>
			<ColumnTitle color={color}>{`${title} (${tasks.length})`}</ColumnTitle>
			{tasks.map((task, index) => (
				<Draggable draggableId={task.id} key={task.id} index={index}>
					{(provided) => (
						<div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
							<Card task={task} onClick={() => onOpenTaskModal(task)} totalSubtasks={task.subtasks.length} completedSubtasks={task.completedSubtasks} />
						</div>
					)}
				</Draggable>
			))}
		</ColumnContainer>
	);
};
