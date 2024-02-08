import styled from 'styled-components';

export const DropdownContainer = styled.div`
	position: relative;
`;

type DropdownButtonProps = {
	isActive: boolean;
};

export const DropdownButton = styled.div<DropdownButtonProps>`
	padding: 0.8rem 1.6rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 1.3rem;
	font-weight: 500;
	line-height: 2.3rem;
	user-select: none;
	&:hover {
		cursor: pointer;
	}

	border: ${(props) => (props.isActive ? '1px solid var(--slateBlue)' : '1px solid var(--shadowBlue)')};
	border-radius: 0.4rem;
`;

export const ChevronDown = styled.img``;

export const DropdownContent = styled.div`
	position: absolute;
	top: 110%;
	left: 0;
	padding: 1.6rem;
	width: 100%;
	transition: all 0.2s;
	border-radius: 0.4rem;
	border: 1px solid var(--shadowBlue);

	background-color: var(--white);
`;

export const DropdownItem = styled.div`
	color: var(--shadowBlue);
	font-size: 1.3rem;
	font-weight: 500;
	line-height: 2.3rem;
	cursor: pointer;

	&:hover {
		background-color: var(--aliceBlue);
	}

	&:not(:last-child) {
		margin-bottom: 0.8rem;
	}
`;
