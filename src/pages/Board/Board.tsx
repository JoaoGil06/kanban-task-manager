import { useBoardContext } from './context/BoardContext';
import { BoardContainer, ColumnsContainer } from './styles/Board.styledcomponent';
import EmptyColumn from '../../components/EmptyColumn';
import NewColumnModal from './components/NewColumnModal/NewColumnModal';
import { NewBoardModal } from './components/NewBoardModal/NewBoardModal';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import NewTaskModal from './components/NewTaskModal';
import { DeleteBoardModal } from './components/DeleteBoardModal/DeleteBoardModal';
import Column from './components/Column';
import TaskModal from './components/TaskModal';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_BOARD } from '../../graphql/queries/boards';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBoard } from '../../store/features/Board/BoardSlice';
import { useAppSelector } from '../../store/store';
import { closeAddNewColumnModal, closeAddNewTaskModal, closeDeleteBoardModal, closeNewBoardModal, closeTaskModal, openAddNewColumnModal } from '../../store/features/Modal/ModalSlice';

const colorsArray = ['#49C4E5', '#8471F2', '#67E2AE'];

export const Board = () => {
	const location = useLocation();
	const pathSegments = location.pathname.split('/');
	const id = pathSegments[pathSegments.length - 1];

	const { data: dataBoard, loading: isLoadingBoard } = useQuery(GET_BOARD, { variables: { id } });

	const { title, isLoading, data: boardData } = useAppSelector((state) => state.board);
	const { isOpenDeleteBoardModal, isOpenNewBoardModal, isOpenAddNewTaskModal, isOpenAddNewColumnModal, isOpenTaskModal } = useAppSelector((state) => state.modal);
	const dispatch = useDispatch();

	const { onDragEnd, onDeleteBoard } = useBoardContext();

	useEffect(() => {
		if (dataBoard) {
			dispatch(setBoard({ id: dataBoard.id, title: dataBoard.title, isLoading: isLoadingBoard }));
		}
	}, [dataBoard, dispatch, isLoadingBoard]);

	const onCloseDeleteBoardModal = () => {
		dispatch(closeDeleteBoardModal());
	};

	const onCloseNewTaskModal = () => {
		dispatch(closeAddNewTaskModal());
	};

	const onCloseAddNewBoardModal = () => {
		dispatch(closeNewBoardModal());
	};

	const onOpenAddNewColumnModal = () => {
		dispatch(openAddNewColumnModal());
	};

	const onCloseAddNewColumnModal = () => {
		dispatch(closeAddNewColumnModal());
	};

	const onCloseTaskModal = () => {
		dispatch(closeTaskModal());
	};

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
						<EmptyColumn onClick={onOpenAddNewColumnModal} />
					</ColumnsContainer>
				</DragDropContext>

				<NewColumnModal isOpen={isOpenAddNewColumnModal} onClose={onCloseAddNewColumnModal} />
				<NewBoardModal isOpen={isOpenNewBoardModal} onClose={onCloseAddNewBoardModal} />
				<NewTaskModal isOpen={isOpenAddNewTaskModal} onClose={onCloseNewTaskModal} columns={boardData} />
				<DeleteBoardModal isOpen={isOpenDeleteBoardModal} onClose={onCloseDeleteBoardModal} boardTitle={title} onClick={onDeleteBoard} />
				<TaskModal isOpen={isOpenTaskModal} onClose={onCloseTaskModal} />
			</BoardContainer>
		</>
	);
};
