import Card from '../Card';
import { ColumnContainer, ColumnTitle } from './styles/Column.styledcomponent';
import ColumnProps from './types/ColumnProps.type';

export const Column = ({ title, tasks, color }: ColumnProps) => {
	return (
		<ColumnContainer>
			<ColumnTitle color={color}>{`${title} (${tasks.length})`}</ColumnTitle>
			{tasks.map((task) => (
				<Card key={task.id} task={task} />
			))}
		</ColumnContainer>
	);
};
