import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../store/store';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { GET_COLUMNS_BY_BOARD_ID } from '../../../graphql/queries/columns';
import { onDragTask, setBoard, setBoardData, setColumns } from '../../../store/features/Board/BoardSlice';
import { GET_TASKS } from '../../../graphql/queries/tasks';
import { DELETE_BOARD } from '../../../graphql/mutations/boards';
import { GET_BOARD } from '../../../graphql/queries/boards';
import { closeDeleteBoardModal } from '../../../store/features/Modals/DeleteBoardModal/DeleteBoardModalSlice';
import { closeAddNewTaskModal } from '../../../store/features/Modals/NewTaskModal/NewTaskModalSlice';
import { closeNewBoardModal } from '../../../store/features/Modals/NewBoardModal/NewBoardModalSlice';
import { closeAddNewColumnModal, openAddNewColumnModal } from '../../../store/features/Modals/NewColumnModal/NewColumnModalSlice';
import { closeTaskModal } from '../../../store/features/Modals/TaskModal/TaskModalSlice';
import { DropResult } from 'react-beautiful-dnd';

const useBoard = () => {
	const { id } = useParams();
	const { title, data: boardData } = useAppSelector((state) => state.board);
	const { isOpenDeleteBoardModal } = useAppSelector((state) => state.deleteModal);
	const { isOpenAddNewTaskModal } = useAppSelector((state) => state.newTaskModal);
	const { isOpenNewBoardModal } = useAppSelector((state) => state.newBoardModal);
	const { isOpenAddNewColumnModal } = useAppSelector((state) => state.newColumnModal);
	const { isOpenTaskModal } = useAppSelector((state) => state.taskModal);
	const dispatch = useAppDispatch();

	const { loading: isLoadingBoard } = useQuery(GET_BOARD, {
		variables: { id },
		onCompleted: (data) => {
			dispatch(setBoard({ id: data.id, title: data.title, isLoading: isLoadingBoard }));
		},
	});

	const { loading: isLoadingColumnsData, data: columnsData } = useQuery(GET_COLUMNS_BY_BOARD_ID, {
		variables: { board_id: id },
		onCompleted: (data) => {
			getTasks({ variables: { columns: data } });
			dispatch(setColumns(data));
		},
	});

	const [getTasks, { loading: isLoadingTasksData }] = useLazyQuery(GET_TASKS, {
		onCompleted: (data) => {
			dispatch(setBoardData({ columns: columnsData, tasks: data }));
		},
	});

	const [deleteBoard, { loading, error }] = useMutation(DELETE_BOARD, {
		onCompleted: () => {
			// Handle completion, e.g., showing a success message or redirecting
			console.log('Board deleted successfully');
		},
		onError: (error) => {
			// Handle error
			console.error('Error deleting board:', error.message);
		},
	});

	const onDeleteBoard = () => {
		console.log('carregou no delete board');
		deleteBoard({ variables: { id: 'XYZ' } });
	};

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

	const onDragEnd = (event: DropResult) => {
		dispatch(onDragTask(event));
	};

	return {
		isLoading: isLoadingColumnsData || isLoadingTasksData,
		board: {
			title,
			boardData,
		},
		onDeleteBoard,
		deleteBoardModal: {
			isOpenDeleteBoardModal,
			onCloseDeleteBoardModal,
		},
		newTaskModal: {
			isOpenAddNewTaskModal,
			onCloseNewTaskModal,
		},
		addNewBoardModal: {
			isOpenNewBoardModal,
			onCloseAddNewBoardModal,
		},
		addNewColumnModal: {
			isOpenAddNewColumnModal,
			onOpenAddNewColumnModal,
			onCloseAddNewColumnModal,
		},
		taskModal: {
			isOpenTaskModal,
			onCloseTaskModal,
		},
		onDragEnd,
	};
};

export default useBoard;
