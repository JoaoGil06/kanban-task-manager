import { useBoardContext } from './context/BoardContext';
import { BoardContainer, ColumnsContainer } from './styles/Board.styledcomponent';
import EmptyColumn from '../../components/EmptyColumn';
import NewColumnModal from './components/NewColumnModal/NewColumnModal';
import { NewBoardModal } from './components/NewBoardModal/NewBoardModal';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useGlobalContext } from '../../context/GlobalContext';
import NewTaskModal from './components/NewTaskModal';
import { DeleteBoardModal } from './components/DeleteBoardModal/DeleteBoardModal';
import Column from './components/Column';
import TaskModal from './components/TaskModal';

const colorsArray = ['#49C4E5', '#8471F2', '#67E2AE'];

export const Board = () => {
	const { boardData, isLoading, addNewColumnModal, taskModal, onDragEnd, onDeleteBoard } = useBoardContext();
	const { addNewBoardModal, addNewTaskModal, deleteBoardModal, board } = useGlobalContext();

	if (isLoading) {
		return <p>Is loading...</p>;
	}

	return (
		<>
			<BoardContainer>
				<DragDropContext onDragEnd={onDragEnd}>
					<ColumnsContainer>
						{boardData.map((column, index) => (
							<Droppable droppableId={`ROOT-${index}`} type='group'>
								{(provided) => (
									<div {...provided.droppableProps} ref={provided.innerRef}>
										<Column key={column.id} title={column.title} tasks={column.tasks} color={colorsArray[index] ?? '#EA5555'} />
									</div>
								)}
							</Droppable>
						))}
						<EmptyColumn onClick={addNewColumnModal.onClickAddNewColumn} />
					</ColumnsContainer>
				</DragDropContext>

				<NewColumnModal isOpen={addNewColumnModal.isNewColumnModalOpen} onClose={addNewColumnModal.onCloseNewColumnModal} />
				<NewBoardModal isOpen={addNewBoardModal.isNewBoardModalOpen} onClose={addNewBoardModal.onCloseNewBoardModal} />
				<NewTaskModal isOpen={addNewTaskModal.isNewTaskModalOpen} onClose={addNewTaskModal.onCloseNewTaskModal} columns={boardData} />
				<DeleteBoardModal isOpen={deleteBoardModal.isDeleteBoardModalOpen} onClose={deleteBoardModal.onCloseDeleteBoardModal} boardTitle={board.title} onClick={onDeleteBoard} />
				<TaskModal isOpen={taskModal.isTaskModalOpen} onClose={taskModal.onCloseTaskModal} />
			</BoardContainer>
		</>
	);
};
