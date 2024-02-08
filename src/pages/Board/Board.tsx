import { useBoardContext } from './context/BoardContext';
import { Column } from '../../components/Column/Column';
import { BoardContainer, ColumnsContainer } from './styles/Board.styledcomponent';
import EmptyColumn from '../../components/EmptyColumn';
import NewColumnModal from './components/NewColumnModal/NewColumnModal';
import { NewBoardModal } from './components/NewBoardModal/NewBoardModal';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useGlobalContext } from '../../context/GlobalContext';

const colorsArray = ['#49C4E5', '#8471F2', '#67E2AE'];

export const Board = () => {
	const { boardData, isLoading, addNewColumnModal, onDragEnd } = useBoardContext();
	const { addNewBoardModal } = useGlobalContext();

	if (isLoading) {
		return <p>Is loading...</p>;
	}

	return (
		<>
			<BoardContainer>
				<DragDropContext onDragEnd={onDragEnd}>
					<ColumnsContainer>
						{boardData.map((data, index) => (
							<Droppable droppableId={`ROOT-${index}`} type='group'>
								{(provided) => (
									<div {...provided.droppableProps} ref={provided.innerRef}>
										<Column key={data.column.id} title={data.column.title} tasks={data.column.tasks} color={colorsArray[index] ?? '#EA5555'} />
									</div>
								)}
							</Droppable>
						))}
						<EmptyColumn onClick={addNewColumnModal.onClickAddNewColumn} />
					</ColumnsContainer>
				</DragDropContext>

				<NewColumnModal isOpen={addNewColumnModal.isNewColumnModalOpen} onClose={addNewColumnModal.onCloseNewColumnModal} />
				<NewBoardModal isOpen={addNewBoardModal.isNewBoardModalOpen} onClose={addNewBoardModal.onCloseNewBoardModal} />
			</BoardContainer>
		</>
	);
};
