import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BoardData from '../types/BoardData.type';
import useModal from '../../../hooks/useModal';
import { DropResult } from 'react-beautiful-dnd';
import mapTasksAndColumns from './Mappers/MapTasksAndColumns';
import Task from '../../../types/Task.type';
import TaskData from '../types/TaskData.type';
import mapTaskAndSubTasks from './Mappers/MapTaskAndSubTasks';
import Column from '../../../types/Column.type';
import { useLazyQuery, useMutation, useQuery } from '@apollo/client';
import { GET_COLUMNS_BY_BOARD_ID } from '../../../graphql/queries/columns';
import { GET_TASKS } from '../../../graphql/queries/tasks';
import { GET_SUBTASKS } from '../../../graphql/queries/subtasks';
import { DELETE_BOARD } from '../../../graphql/mutations/boards';

type BoardContextType = {
	boardData: BoardData[];
	taskData: TaskData;
	columns: Column[];
	isLoading: boolean;
	addNewColumnModal: {
		onClickAddNewColumn: () => void;
		isNewColumnModalOpen: boolean;
		onCloseNewColumnModal: () => void;
	};
	taskModal: {
		onClickOpenTaskModal: (task: Task) => void;
		isTaskModalOpen: boolean;
		onCloseTaskModal: () => void;
	};
	onDragEnd: (event: DropResult) => void;
	onDeleteBoard: () => void;
};

const BoardContext = createContext({} as BoardContextType);

export const BoardContextProvider = ({ children }: PropsWithChildren) => {
	const { id } = useParams();
	const { isOpen: isNewColumnModalOpen, closeModal: closeNewColumnModal, openModal: openNewColumnModal } = useModal();
	const { isOpen: isTaskModalOpen, closeModal: closeTaskModal, openModal: openTaskModal } = useModal();

	const [boardData, setBoardData] = useState<BoardData[]>([]);
	const [taskData, setTaskData] = useState<TaskData>({} as TaskData);
	const [selectedTask, setSelectedTask] = useState<Task>({} as Task);

	const { loading: isLoadingColumnsData, data: columnsData } = useQuery(GET_COLUMNS_BY_BOARD_ID, {
		variables: { board_id: id },
	});
	const [getTasks, { loading: isLoadingTasksData, data: tasksData }] = useLazyQuery(GET_TASKS);
	const [getSubTasks, { data: subTasksData }] = useLazyQuery(GET_SUBTASKS);

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

	useEffect(() => {
		if (isLoadingColumnsData || isLoadingTasksData) return;
		if (columnsData?.length > 0 && tasksData?.length > 0) {
			const data = mapTasksAndColumns(columnsData, tasksData);

			setBoardData(data);
		}
	}, [columnsData, isLoadingColumnsData, isLoadingTasksData, tasksData]);

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

	const handleOnClickToOpenTaskModal = useCallback(
		async (task: Task) => {
			openTaskModal();
			setSelectedTask(task);
			await getSubTasks({ variables: { task_id: task.id } });
		},
		[getSubTasks, openTaskModal]
	);

	useEffect(() => {
		if (isTaskModalOpen) {
			const data = mapTaskAndSubTasks(selectedTask, subTasksData || []);

			setTaskData(data);
		}
	}, [isTaskModalOpen, selectedTask, subTasksData]);

	const onDeleteBoard = () => {
		console.log('carregou no delete board');
		deleteBoard({ variables: { id: 'XYZ' } });
	};

	return (
		<BoardContext.Provider
			value={{
				boardData,
				taskData,
				columns: columnsData || [],
				isLoading: isLoadingColumnsData || isLoadingTasksData,
				addNewColumnModal: { isNewColumnModalOpen, onClickAddNewColumn: openNewColumnModal, onCloseNewColumnModal: closeNewColumnModal },
				taskModal: { isTaskModalOpen, onClickOpenTaskModal: handleOnClickToOpenTaskModal, onCloseTaskModal: closeTaskModal },
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
