import { ColumnContainer, ColumnTitle } from './styles/EmptyColumn.styledcomponent';
import EmptyColumnProps from './types/EmptyColumnProps.type';

export const EmptyColumn = ({ onClick }: EmptyColumnProps) => {
	return (
		<ColumnContainer onClick={onClick}>
			<ColumnTitle>+ New Column</ColumnTitle>
		</ColumnContainer>
	);
};
