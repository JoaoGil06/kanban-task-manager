import { useBoardContext } from './context/BoardContext';
import { Column } from '../../components/Column/Column';
import { BoardContainer, ColumnsContainer } from './styles/Board.styledcomponent';
import EmptyColumn from '../../components/EmptyColumn';
import NewColumnModal from './components/NewColumnModal/NewColumnModal';

const colorsArray = ['#49C4E5', '#8471F2', '#67E2AE'];

export const Board = () => {
	const { boardData, isLoading, addNewColumnModal } = useBoardContext();

	if (isLoading) {
		return <p>Is loading...</p>;
	}

	return (
		<BoardContainer>
			<ColumnsContainer>
				{boardData.map((data, index) => (
					<Column key={data.column.id} title={data.column.title} tasks={data.column.tasks} color={colorsArray[index] ?? '#EA5555'} />
				))}
				<EmptyColumn onClick={addNewColumnModal.onClickAddNewColumn} />
			</ColumnsContainer>

			<NewColumnModal isOpen={addNewColumnModal.isNewColumnModalOpen} onClose={addNewColumnModal.onCloseNewColumnModal} />
		</BoardContainer>
	);
};
