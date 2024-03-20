import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { BoardContainer, BoardIcon, BoardTitle } from '../../styles/SideBar.styledcomponent';
import IconBoard from '../../../../assets/icon-board.svg';
import BoardLinkProps from './types/BoardLinkProps.type';

export const BoardLink = ({ to, title }: BoardLinkProps) => {
	const resolvedPath = useResolvedPath(to);
	const match = useMatch({ path: resolvedPath.pathname, end: true });
	const isActive = match !== null;

	return (
		<Link to={to}>
			<BoardContainer isActive={isActive}>
				<BoardIcon src={IconBoard} isActive={isActive} />
				<BoardTitle isActive={isActive}>{title}</BoardTitle>
			</BoardContainer>
		</Link>
	);
};
