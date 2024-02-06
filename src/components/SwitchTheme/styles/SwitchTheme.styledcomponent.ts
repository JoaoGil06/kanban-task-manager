import styled from 'styled-components';

export const Container = styled.div`
	background: var(--aliceBlue);
	padding: 1rem;
	width: 25rem;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 2rem;
`;

export const IconLight = styled.img`
	height: 1.5rem;
	width: 1.5rem;
`;

export const IconDark = styled.img`
	height: 1.5rem;
	width: 1.5rem;
`;

type SwitchContainerProps = {
	isActive: boolean;
};

export const SwitchContainer = styled.div<SwitchContainerProps>`
	width: 4rem;
	height: 2rem;
	border-radius: 12px;
	background-color: var(--slateBlue);
	position: relative;
	cursor: pointer;

	&::before {
		content: '';
		width: 1.5rem;
		height: 1.5rem;
		background-color: #fff;

		position: absolute;
		border-radius: 50%;
		top: 0.2rem;
		left: ${(props) => (props.isActive ? '0.3rem' : 'calc(100% - 1.8rem)')};
		transition: left 0.3s;
	}
`;
