import {
	BoardContainer,
	BoardIcon,
	BoardTitle,
	HideContainer,
	HideIcon,
	HideLabel,
	SideBarButton,
	SideBarButtonIcon,
	SideBarContainer,
	SideBarContent,
	SideBarTitle,
} from './styles/SideBar.styledcomponent';
import IconBoard from '../../assets/icon-board.svg';
import IconHideSidebar from '../../assets/icon-hide-sidebar.svg';
import IconShowSidebar from '../../assets/icon-show-sidebar.svg';
import { useSideBarContext } from './context/SideBarContext';
import BoardLink from './components/BoardLink';

export const SideBar = () => {
	const { isShown, onClickToShowSidebar, boards } = useSideBarContext();

	return (
		<>
			<SideBarButton isShown={isShown} onClick={onClickToShowSidebar}>
				<SideBarButtonIcon src={IconShowSidebar} />
			</SideBarButton>

			<SideBarContainer isShown={isShown}>
				<SideBarContent isShown={isShown}>
					<SideBarTitle>All Boards ({boards.length})</SideBarTitle>
					{boards.map((board) => {
						return <BoardLink to={`board/${board.id}`} key={board.id} title={board.title} />;
					})}

					{/* <BoardContainer isActive={false}>
						<BoardIcon src={IconBoard} isActive={false} />
						<BoardTitle isActive={false}>Marketing Plan</BoardTitle>
					</BoardContainer>
					<BoardContainer isActive={false}>
						<BoardIcon src={IconBoard} isActive={false} />
						<BoardTitle isActive={false}>Roadmap</BoardTitle>
					</BoardContainer> */}

					<BoardContainer isActive={false}>
						<BoardIcon src={IconBoard} isActive={false} isAddNewBoard />
						<BoardTitle isActive={false} isAddNewBoard>
							+ Create new board
						</BoardTitle>
					</BoardContainer>
				</SideBarContent>

				<HideContainer onClick={onClickToShowSidebar}>
					<HideIcon src={IconHideSidebar}>Icon</HideIcon>
					<HideLabel>Hide Sidebar</HideLabel>
				</HideContainer>
			</SideBarContainer>
		</>
	);
};
