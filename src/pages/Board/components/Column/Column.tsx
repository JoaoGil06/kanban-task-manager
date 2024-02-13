import { Draggable } from 'react-beautiful-dnd';
import { ColumnContainer, ColumnTitle } from './styles/Column.styledcomponent';
import ColumnProps from './types/ColumnProps.type';
import Card from '../../../../components/Card';
import { useBoardContext } from '../../context/BoardContext';

export const Column = ({ title, tasks, color }: ColumnProps) => {
	const { taskModal } = useBoardContext();

	return (
		<ColumnContainer>
			<ColumnTitle color={color}>{`${title} (${tasks.length})`}</ColumnTitle>
			{tasks.map((task, index) => (
				<Draggable draggableId={task.id} key={task.id} index={index}>
					{(provided) => (
						<div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
							<Card task={task} onClick={() => taskModal.onClickOpenTaskModal(task)} />
						</div>
					)}
				</Draggable>
			))}
		</ColumnContainer>
	);
};
