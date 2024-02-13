import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useGetColumns } from '../../../hooks/firebase/useGetColumnsByBoardId';
import { useGetTasks } from '../../../hooks/firebase/useGetTasks';
import { useParams } from 'react-router-dom';
import BoardData from '../types/BoardData.type';
import useModal from '../../../hooks/useModal';
import { DropResult } from 'react-beautiful-dnd';
import mapTasksAndColumns from './Mappers/MapTasksAndColumns';
import Task from '../../../types/Task.type';
import { useGetSubTasks } from '../../../hooks/firebase/useGetSubTasks';
import TaskData from '../types/TaskData.type';
import mapTaskAndSubTasks from './Mappers/MapTaskAndSubTasks';
import Column from '../../../types/Column.type';

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
};

const BoardContext = createContext({} as BoardContextType);

export const BoardContextProvider = ({ children }: PropsWithChildren) => {
	const { id } = useParams();
	const { isOpen: isNewColumnModalOpen, closeModal: closeNewColumnModal, openModal: openNewColumnModal } = useModal();
	const { isOpen: isTaskModalOpen, closeModal: closeTaskModal, openModal: openTaskModal } = useModal();

	const [boardData, setBoardData] = useState<BoardData[]>([]);
	const [taskData, setTaskData] = useState<TaskData>({} as TaskData);
	const [selectedTask, setSelectedTask] = useState<Task>({} as Task);

	const { columns, isLoadingColumns } = useGetColumns(id);
	const { tasks, isLoadingTasks } = useGetTasks(columns);
	const { onGetSubTasks, isLoadingSubTasks, subTasks } = useGetSubTasks();

	useEffect(() => {
		if (isLoadingColumns || isLoadingTasks) return;
		const data = mapTasksAndColumns(columns, tasks);
		setBoardData(data);
	}, [columns, isLoadingColumns, isLoadingTasks, tasks]);

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
			await onGetSubTasks(task.id);
		},
		[onGetSubTasks, openTaskModal]
	);

	useEffect(() => {
		if (isTaskModalOpen) {
			const data = mapTaskAndSubTasks(selectedTask, subTasks);

			setTaskData(data);
		}
	}, [isTaskModalOpen, selectedTask, subTasks]);

	return (
		<BoardContext.Provider
			value={{
				boardData,
				taskData,
				columns,
				isLoading: isLoadingColumns || isLoadingTasks,
				addNewColumnModal: { isNewColumnModalOpen, onClickAddNewColumn: openNewColumnModal, onCloseNewColumnModal: closeNewColumnModal },
				taskModal: { isTaskModalOpen, onClickOpenTaskModal: handleOnClickToOpenTaskModal, onCloseTaskModal: closeTaskModal },
				onDragEnd,
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
