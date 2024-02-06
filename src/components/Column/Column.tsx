import { Draggable } from 'react-beautiful-dnd';
import Card from '../Card';
import { ColumnContainer, ColumnTitle } from './styles/Column.styledcomponent';
import ColumnProps from './types/ColumnProps.type';

export const Column = ({ title, tasks, color }: ColumnProps) => {
	return (
		<ColumnContainer>
			<ColumnTitle color={color}>{`${title} (${tasks.length})`}</ColumnTitle>
			{tasks.map((task, index) => (
				<Draggable draggableId={task.id} key={task.id} index={index}>
					{(provided) => (
						<div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
							<Card task={task} />
						</div>
					)}
				</Draggable>
			))}
		</ColumnContainer>
	);
};
