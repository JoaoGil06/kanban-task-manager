import {
	BoardContainer,
	BoardIcon,
	BoardTitle,
	HideContainer,
	HideIcon,
	HideLabel,
	SideBarBottomContent,
	SideBarButton,
	SideBarButtonIcon,
	SideBarContainer,
	SideBarContent,
	SideBarTitle,
	SwitchContainer,
} from './styles/SideBar.styledcomponent';
import IconBoard from '../../assets/icon-board.svg';
import IconHideSidebar from '../../assets/icon-hide-sidebar.svg';
import IconShowSidebar from '../../assets/icon-show-sidebar.svg';
import BoardLink from './components/BoardLink';
import SwitchTheme from '../SwitchTheme';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { openNewBoardModal } from '../../store/features/Modals/NewBoardModal/NewBoardModalSlice';
import { closeSidebar, openSidebar } from '../../store/features/Sidebar/SidebarSlice';
import { useQuery } from '@apollo/client';
import { GET_BOARDS } from '../../graphql/queries/boards';
import Board from '../../types/Board.type';

export const SideBar = () => {
	const { data: boards, loading } = useQuery(GET_BOARDS);

	const { isOpenSidebar } = useAppSelector((state) => state.sidebar);
	const dispatch = useAppDispatch();

	const onClickToOpenSidebar = () => {
		dispatch(openSidebar());
	};

	const onClickToCloseSidebar = () => {
		dispatch(closeSidebar());
	};

	const onClickAddNewBoard = () => {
		dispatch(openNewBoardModal());
	};

	if (loading) {
		return <p>...loading</p>;
	}

	return (
		<>
			<SideBarButton isShown={isOpenSidebar} onClick={onClickToOpenSidebar}>
				<SideBarButtonIcon src={IconShowSidebar} />
			</SideBarButton>

			<SideBarContainer isShown={isOpenSidebar}>
				<SideBarContent isShown={isOpenSidebar}>
					<SideBarTitle>All Boards ({boards.length})</SideBarTitle>
					{boards?.map((board: Board) => {
						return <BoardLink to={`/board/${board.id}`} key={board.id} title={board.title} />;
					})}

					<BoardContainer isActive={false}>
						<BoardIcon src={IconBoard} isActive={false} isAddNewBoard />
						<BoardTitle isActive={false} isAddNewBoard onClick={onClickAddNewBoard}>
							+ Create new board
						</BoardTitle>
					</BoardContainer>
				</SideBarContent>

				<SideBarBottomContent>
					<SwitchContainer>
						<SwitchTheme />
					</SwitchContainer>
					<HideContainer onClick={onClickToCloseSidebar}>
						<HideIcon src={IconHideSidebar}>Icon</HideIcon>
						<HideLabel>Hide Sidebar</HideLabel>
					</HideContainer>
				</SideBarBottomContent>
			</SideBarContainer>
		</>
	);
};
