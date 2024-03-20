import { PropsWithChildren, createContext, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DropResult } from 'react-beautiful-dnd';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { GET_COLUMNS_BY_BOARD_ID } from '../../../graphql/queries/columns';
import { GET_TASKS } from '../../../graphql/queries/tasks';
import { DELETE_BOARD } from '../../../graphql/mutations/boards';
import { useAppDispatch } from '../../../store/store';
import { setBoardData, setColumns } from '../../../store/features/Board/BoardSlice';

type BoardContextType = {
	isLoading: boolean;
	onDragEnd: (event: DropResult) => void;
	onDeleteBoard: () => void;
};

const BoardContext = createContext({} as BoardContextType);

export const BoardContextProvider = ({ children }: PropsWithChildren) => {
	const { id } = useParams();
	const dispatch = useAppDispatch();

	const { loading: isLoadingColumnsData, data: columnsData } = useQuery(GET_COLUMNS_BY_BOARD_ID, {
		variables: { board_id: id },
		onCompleted: (data) => {
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

	useEffect(() => {
		if (columnsData?.length > 0) {
			getTasks({ variables: { columns: columnsData } });
		}
	}, [columnsData, getTasks]);

	const onDragEnd = (event: DropResult) => {
		const { source, destination } = event;

		if (!destination) return;

		if (source.droppableId === destination.droppableId && source.index === destination.index) return;

		const sourceColumnIndex = +source.droppableId.split('-')[1];
		const sourceItemIndex = source.index;
		const destinationColumnIndex = +destination.droppableId.split('-')[1];
		const destinationItemIndex = destination.index;

		const newBoardData = [...boardData];

		const sourceColumnData = newBoardData[sourceColumnIndex];
		const destinationColumnData = newBoardData[destinationColumnIndex];

		const [removedTask] = sourceColumnData.tasks.splice(sourceItemIndex, 1);
		destinationColumnData.tasks.splice(destinationItemIndex, 0, removedTask);

		newBoardData[sourceColumnIndex].tasks = sourceColumnData.tasks;
		newBoardData[destinationColumnIndex].tasks = destinationColumnData.tasks;

		setBoardData(newBoardData);
	};

	const onDeleteBoard = () => {
		console.log('carregou no delete board');
		deleteBoard({ variables: { id: 'XYZ' } });
	};

	return (
		<BoardContext.Provider
			value={{
				isLoading: isLoadingColumnsData || isLoadingTasksData,
				onDragEnd,
				onDeleteBoard,
			}}
		>
			{children}
		</BoardContext.Provider>
	);
};

export const useBoardContext = () => {
	const context = useContext(BoardContext);

	return context;
};
