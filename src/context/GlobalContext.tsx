import { PropsWithChildren, createContext, useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Board from '../types/Board.type';
import useModal from '../hooks/useModal';
import { useQuery } from '@apollo/client';
import { GET_BOARD } from '../graphql/queries/boards';

type GlobalContextType = {
	board: Board;
	isLoadingBoard: boolean;
	addNewBoardModal: {
		onClickAddNewBoard: () => void;
		isNewBoardModalOpen: boolean;
		onCloseNewBoardModal: () => void;
	};
	addNewTaskModal: {
		onClickAddNewTask: () => void;
		isNewTaskModalOpen: boolean;
		onCloseNewTaskModal: () => void;
	};
	deleteBoardModal: {
		isDeleteBoardModalOpen: boolean;
		onClickOpenDeleteBoard: () => void;
		onCloseDeleteBoardModal: () => void;
	};
};

const GlobalContext = createContext({} as GlobalContextType);

export const GlobalContextProvider = ({ children }: PropsWithChildren) => {
	const location = useLocation();
	const pathSegments = location.pathname.split('/');
	const id = pathSegments[pathSegments.length - 1];
	const [board, setBoard] = useState<Board>({ id, title: '' });

	const { isOpen: isNewBoardModalOpen, closeModal: closeNewBoardModal, openModal: openNewBoardModal } = useModal();
	const { isOpen: isNewTaskModalOpen, closeModal: closeNewTaskModal, openModal: openNewTaskModal } = useModal();
	const { isOpen: isDeleteBoardModalOpen, closeModal: closeDeleteBoardModal, openModal: openDeleteBoardModal } = useModal();

	const { data: boardData, loading: isLoadingBoard } = useQuery(GET_BOARD, { variables: { id } });

	useEffect(() => {
		if (boardData) {
			setBoard(boardData);
		}
	}, [boardData]);

	return (
		<GlobalContext.Provider
			value={{
				board,
				isLoadingBoard,
				addNewBoardModal: { isNewBoardModalOpen, onClickAddNewBoard: openNewBoardModal, onCloseNewBoardModal: closeNewBoardModal },
				addNewTaskModal: { isNewTaskModalOpen, onClickAddNewTask: openNewTaskModal, onCloseNewTaskModal: closeNewTaskModal },
				deleteBoardModal: { isDeleteBoardModalOpen, onClickOpenDeleteBoard: openDeleteBoardModal, onCloseDeleteBoardModal: closeDeleteBoardModal },
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = () => {
	const context = useContext(GlobalContext);

	return context;
};
