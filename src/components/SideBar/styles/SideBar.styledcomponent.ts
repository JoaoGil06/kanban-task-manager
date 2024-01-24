import { styled } from 'styled-components';
import { ReactSVG } from 'react-svg';

type SideBarProps = {
	isShown: boolean;
};

export const SideBarContainer = styled.div<SideBarProps>`
	width: 30rem;
	position: absolute;
	top: 9.6rem;
	bottom: 0;
	left: 0;
	transform: translateX(${(props) => (props.isShown ? '0' : '-100%')});
	transition: transform 0.4s ease-out;
	border-right: ${(props) => (props.isShown ? '1px solid var(--lavender)' : 'none')};

	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const SideBarContent = styled.div<SideBarProps>`
	width: 30rem;
`;

export const SideBarTitle = styled.h1`
	font-size: 1.2rem;
	font-weight: 700;
	letter-spacing: 2.4px;
	color: var(--shadowBlue);
	margin-left: 3.2rem;
	margin-bottom: 2rem;
`;

type BoardProps = {
	isActive?: boolean;
	isAddNewBoard?: boolean;
};

export const BoardContainer = styled.span<BoardProps>`
	display: flex;
	align-items: center;
	background-color: ${(props) => (props.isActive ? 'var(--slateBlue)' : 'transparent')};
	max-width: 27rem;
	padding: 1.4rem 0;
	border-top-right-radius: 100px;
	border-bottom-right-radius: 100px;
	cursor: pointer;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BoardIcon = styled(ReactSVG as any)<BoardProps>`
	margin-left: 3.2rem;
	fill: ${(props) => (props.isActive ? 'var(--white)' : props.isAddNewBoard ? 'var(--slateBlue)' : 'var(--shadowBlue)')};
`;

export const BoardTitle = styled.span<BoardProps>`
	font-size: 1.5rem;
	color: ${(props) => (props.isActive ? 'var(--white)' : props.isAddNewBoard ? 'var(--slateBlue)' : 'var(--shadowBlue)')};
	font-weight: 700;
	margin-left: 1.6rem;
	transition: all 0.2s;

	&:hover {
		color: ${(props) => (props.isActive ? 'var(--white)' : 'var(--slateBlue)')};
	}
`;

export const HideContainer = styled.div`
	display: flex;
	align-items: center;
	margin-left: 2.7rem;
	margin-bottom: 4.7rem;
	cursor: pointer;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const HideIcon = styled(ReactSVG as any)``;

export const HideLabel = styled.div`
	margin-left: 1.6rem;
	font-size: 1.5rem;
	color: var(--shadowBlue);
	font-weight: 700;
	line-height: normal;
`;

export const SideBarButton = styled.button<SideBarProps>`
	position: absolute;
	left: ${(props) => (props.isShown ? '-200px' : '0')};
	bottom: 4.7rem;
	transition: all 0.4s ease-out;
	cursor: pointer;

	width: 5.6rem;
	height: 4.8rem;
	border-radius: 0px 100px 100px 0px;
	background-color: var(--slateBlue);
	border: none;
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const SideBarButtonIcon = styled(ReactSVG as any)``;

export const SideBarBottomContent = styled.div``;

export const SwitchContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 2rem;
`;
