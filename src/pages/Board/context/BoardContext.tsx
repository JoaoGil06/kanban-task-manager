import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useGetColumns } from '../../../hooks/firebase/useGetColumnsByBoardId';
import { useGetTasks } from '../../../hooks/firebase/useGetTasks';
import { useParams } from 'react-router-dom';
import BoardData from '../types/BoardData.type';
import useModal from '../../../hooks/useModal';

type BoardContextType = {
	boardData: BoardData[];
	isLoading: boolean;
	addNewColumnModal: {
		onClickAddNewColumn: () => void;
		isNewColumnModalOpen: boolean;
		onCloseNewColumnModal: () => void;
	};
};

type BoardContextProviderProps = {
	children: ReactNode;
};

const BoardContext = createContext({} as BoardContextType);

export const BoardContextProvider = ({ children }: BoardContextProviderProps) => {
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

	const onClickAddNewColumn = () => {
		openNewColumnModal();
	};

	return (
		<BoardContext.Provider
			value={{ boardData, isLoading: isLoadingColumns || isLoadingTasks, addNewColumnModal: { isNewColumnModalOpen, onClickAddNewColumn, onCloseNewColumnModal: closeNewColumnModal } }}
		>
			{children}
		</BoardContext.Provider>
	);
};

export const useBoardContext = () => {
	const context = useContext(BoardContext);

	return context;
};
