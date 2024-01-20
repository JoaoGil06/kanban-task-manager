import { createContext, useContext, useState, ReactNode } from 'react';
import { useGetBoards } from '../../../hooks/useGetBoards';
import Board from '../../../types/Board.type';

type SideBarContextType = {
	isShown: boolean;
	onClickToShowSidebar: () => void;
	boards: Board[];
};

type SideBarProviderProps = {
	children: ReactNode;
};

const SideBarContext = createContext({} as SideBarContextType);

export const SideBarProvider = ({ children }: SideBarProviderProps) => {
	const [isShown, setIsShown] = useState<boolean>(false);
	const { boards } = useGetBoards();

	const onClickToShowSidebar = (): void => setIsShown(!isShown);

	return <SideBarContext.Provider value={{ isShown, onClickToShowSidebar, boards }}>{children}</SideBarContext.Provider>;
};

export const useSideBarContext = () => {
	const context = useContext(SideBarContext);

	return context;
};
