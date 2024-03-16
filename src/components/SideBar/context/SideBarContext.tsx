import { createContext, useContext, useState, PropsWithChildren } from 'react';
import Board from '../../../types/Board.type';
import { useQuery } from '@apollo/client';
import { GET_BOARDS } from '../../../graphql/queries/boards';

type SideBarContextType = {
	isShown: boolean;
	onClickToShowSidebar: () => void;
	boards: Board[];
	onClickToSelectBoard: (boardTitle: string) => void;
	selectedBoard: string;
};

const SideBarContext = createContext({} as SideBarContextType);

export const SideBarProvider = ({ children }: PropsWithChildren) => {
	const [isShown, setIsShown] = useState<boolean>(false);
	const [selectedBoard, setSelectedBoard] = useState<string>('Kanban Task Manager');
	const { loading, error, data } = useQuery(GET_BOARDS);

	const onClickToShowSidebar = (): void => setIsShown(!isShown);
	const onClickToSelectBoard = (boardTitle: string): void => setSelectedBoard(boardTitle);

	return <SideBarContext.Provider value={{ isShown, onClickToShowSidebar, boards: data || [], onClickToSelectBoard, selectedBoard }}>{children}</SideBarContext.Provider>;
};

export const useSideBarContext = () => {
	const context = useContext(SideBarContext);

	return context;
};
