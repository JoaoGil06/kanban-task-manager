import { BoardContainer, ColumnsContainer } from './styles/Board.styledcomponent';
import EmptyColumn from '../../components/EmptyColumn';
import NewColumnModal from './components/NewColumnModal/NewColumnModal';
import { NewBoardModal } from './components/NewBoardModal/NewBoardModal';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import NewTaskModal from './components/NewTaskModal';
import { DeleteBoardModal } from './components/DeleteBoardModal/DeleteBoardModal';
import Column from './components/Column';
import TaskModal from './components/TaskModal';
import useBoard from './hooks/useBoard';

const colorsArray = ['#49C4E5', '#8471F2', '#67E2AE'];

export const Board = () => {
	const { board, isLoading, onDeleteBoard, deleteBoardModal, newTaskModal, addNewBoardModal, addNewColumnModal, taskModal, onDragEnd } = useBoard();

	if (isLoading) {
		return <p>Is loading...</p>;
	}

	return (
		<>
			<BoardContainer>
				<DragDropContext onDragEnd={onDragEnd}>
					<ColumnsContainer>
						{board.boardData.map((column, index) => (
							<Droppable droppableId={`ROOT-${index}`} type='group'>
								{(provided) => (
									<div {...provided.droppableProps} ref={provided.innerRef}>
										<Column key={column.id} title={column.title} tasks={column.tasks} color={colorsArray[index] ?? '#EA5555'} />
									</div>
								)}
							</Droppable>
						))}
						<EmptyColumn onClick={addNewColumnModal.onOpenAddNewColumnModal} />
					</ColumnsContainer>
				</DragDropContext>

				<NewColumnModal isOpen={addNewColumnModal.isOpenAddNewColumnModal} onClose={addNewColumnModal.onCloseAddNewColumnModal} />
				<NewBoardModal isOpen={addNewBoardModal.isOpenNewBoardModal} onClose={addNewBoardModal.onCloseAddNewBoardModal} />
				<NewTaskModal isOpen={newTaskModal.isOpenAddNewTaskModal} onClose={newTaskModal.onCloseNewTaskModal} columns={board.boardData} />
				<DeleteBoardModal isOpen={deleteBoardModal.isOpenDeleteBoardModal} onClose={deleteBoardModal.onCloseDeleteBoardModal} boardTitle={board.title} onClick={onDeleteBoard} />
				<TaskModal isOpen={taskModal.isOpenTaskModal} onClose={taskModal.onCloseTaskModal} />
			</BoardContainer>
		</>
	);
};
