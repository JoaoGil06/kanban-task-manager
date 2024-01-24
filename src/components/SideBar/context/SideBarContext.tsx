import { createContext, useContext, useState, ReactNode } from 'react';
import { useGetBoards } from '../../../hooks/firebase/useGetBoards';
import Board from '../../../types/Board.type';

type SideBarContextType = {
	isShown: boolean;
	onClickToShowSidebar: () => void;
	boards: Board[];
	onClickToSelectBoard: (boardTitle: string) => void;
	selectedBoard: string;
};

type SideBarProviderProps = {
	children: ReactNode;
};

const SideBarContext = createContext({} as SideBarContextType);

export const SideBarProvider = ({ children }: SideBarProviderProps) => {
	const [isShown, setIsShown] = useState<boolean>(false);
	const [selectedBoard, setSelectedBoard] = useState<string>('Kanban Task Manager');
	const { boards } = useGetBoards();

	const onClickToShowSidebar = (): void => setIsShown(!isShown);
	const onClickToSelectBoard = (boardTitle: string): void => setSelectedBoard(boardTitle);

	return <SideBarContext.Provider value={{ isShown, onClickToShowSidebar, boards, onClickToSelectBoard, selectedBoard }}>{children}</SideBarContext.Provider>;
};

export const useSideBarContext = () => {
	const context = useContext(SideBarContext);

	return context;
};
