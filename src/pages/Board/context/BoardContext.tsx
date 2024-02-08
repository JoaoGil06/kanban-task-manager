import { PropsWithChildren, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useGetColumns } from '../../../hooks/firebase/useGetColumnsByBoardId';
import { useGetTasks } from '../../../hooks/firebase/useGetTasks';
import { useParams } from 'react-router-dom';
import BoardData from '../types/BoardData.type';
import useModal from '../../../hooks/useModal';
import { DropResult } from 'react-beautiful-dnd';

type BoardContextType = {
	boardData: BoardData[];
	isLoading: boolean;
	addNewColumnModal: {
		onClickAddNewColumn: () => void;
		isNewColumnModalOpen: boolean;
		onCloseNewColumnModal: () => void;
	};
	onDragEnd: (event: DropResult) => void;
};

const BoardContext = createContext({} as BoardContextType);

export const BoardContextProvider = ({ children }: PropsWithChildren) => {
	const { id } = useParams();
	const { isOpen: isNewColumnModalOpen, closeModal: closeNewColumnModal, openModal: openNewColumnModal } = useModal();
	const [boardData, setBoardData] = useState<BoardData[]>([]);

	const { columns, isLoadingColumns } = useGetColumns(id);
	const { tasks, isLoadingTasks } = useGetTasks(columns);

	const mapTasksAndColumns = useCallback(() => {
		if (isLoadingColumns || isLoadingTasks) return;

		const data = columns.map((column) => {
			const findedTasks = tasks.filter((task) => task.column_id === column.id);

			return {
				column: {
					id: column.id,
					title: column.title,
					tasks: findedTasks,
				},
			};
		});

		setBoardData(data);
	}, [columns, isLoadingColumns, isLoadingTasks, tasks]);

	useEffect(() => {
		mapTasksAndColumns();
	}, [mapTasksAndColumns]);

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

		const [removedTask] = sourceColumnData.column.tasks.splice(sourceItemIndex, 1);
		destinationColumnData.column.tasks.splice(destinationItemIndex, 0, removedTask);

		newBoardData[sourceColumnIndex].column.tasks = sourceColumnData.column.tasks;
		newBoardData[destinationColumnIndex].column.tasks = destinationColumnData.column.tasks;

		setBoardData(newBoardData);
	};

	return (
		<BoardContext.Provider
			value={{
				boardData,
				isLoading: isLoadingColumns || isLoadingTasks,
				addNewColumnModal: { isNewColumnModalOpen, onClickAddNewColumn: openNewColumnModal, onCloseNewColumnModal: closeNewColumnModal },
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
