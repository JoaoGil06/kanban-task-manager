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
import { closeAddNewColumnModal, openAddNewColumnModal } from '../../../store/features/Modals/NewColumnModal/NewColumnModalSlice';
import { closeTaskModal } from '../../../store/features/Modals/TaskModal/TaskModalSlice';
import { DropResult } from 'react-beautiful-dnd';

const useBoard = () => {
	const { id } = useParams();
	const { title, data: boardData } = useAppSelector((state) => state.board);
	const { isOpenDeleteBoardModal } = useAppSelector((state) => state.deleteModal);
	const { isOpenAddNewTaskModal } = useAppSelector((state) => state.newTaskModal);
	const { isOpenAddNewColumnModal } = useAppSelector((state) => state.newColumnModal);
	const { isOpenTaskModal } = useAppSelector((state) => state.taskModal);
	const dispatch = useAppDispatch();

	const { loading: isLoadingBoard } = useQuery(GET_BOARD, {
		variables: { id },
		onCompleted: (data) => {
			dispatch(setBoard({ id: data.id, title: data.title, isLoading: isLoadingBoard }));
		},
	});

	const {
		loading: isLoadingColumnsData,
		data: columnsData,
		refetch: refetchColumns,
	} = useQuery(GET_COLUMNS_BY_BOARD_ID, {
		variables: { board_id: id },
		onCompleted: (data) => {
			getTasks({ variables: { columns: data } });
			dispatch(setColumns(data));
		},
		notifyOnNetworkStatusChange: true,
	});

	const [getTasks, { loading: isLoadingTasksData, refetch: refetchTasks }] = useLazyQuery(GET_TASKS, {
		onCompleted: (data) => {
			console.log('entra aqui');
			dispatch(setBoardData({ columns: columnsData, tasks: data }));
		},
		notifyOnNetworkStatusChange: true,
	});

	const [deleteBoard] = useMutation(DELETE_BOARD);

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
			refetchColumns,
			refetchTasks,
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
