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
import { useSideBarContext } from './context/SideBarContext';
import BoardLink from './components/BoardLink';
import SwitchTheme from '../SwitchTheme';
import { useGlobalContext } from '../../context/GlobalContext';

export const SideBar = () => {
	const { isShown, onClickToShowSidebar, boards } = useSideBarContext();
	const { addNewBoardModal } = useGlobalContext();

	return (
		<>
			<SideBarButton isShown={isShown} onClick={onClickToShowSidebar}>
				<SideBarButtonIcon src={IconShowSidebar} />
			</SideBarButton>

			<SideBarContainer isShown={isShown}>
				<SideBarContent isShown={isShown}>
					<SideBarTitle>All Boards ({boards.length})</SideBarTitle>
					{boards.map((board) => {
						return <BoardLink to={`/board/${board.id}`} key={board.id} title={board.title} />;
					})}

					<BoardContainer isActive={false}>
						<BoardIcon src={IconBoard} isActive={false} isAddNewBoard />
						<BoardTitle isActive={false} isAddNewBoard onClick={addNewBoardModal.onClickAddNewBoard}>
							+ Create new board
						</BoardTitle>
					</BoardContainer>
				</SideBarContent>

				<SideBarBottomContent>
					<SwitchContainer>
						<SwitchTheme />
					</SwitchContainer>
					<HideContainer onClick={onClickToShowSidebar}>
						<HideIcon src={IconHideSidebar}>Icon</HideIcon>
						<HideLabel>Hide Sidebar</HideLabel>
					</HideContainer>
				</SideBarBottomContent>
			</SideBarContainer>
		</>
	);
};
