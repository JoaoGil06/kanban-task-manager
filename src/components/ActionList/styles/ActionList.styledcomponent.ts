import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	display: flex;
`;

export const CircleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 0.3rem;
	cursor: pointer;
`;

export const Circle = styled.div`
	width: 5px;
	height: 5px;
	background-color: var(--shadowBlue);
	border-radius: 50%;
`;

export const ActionsContainer = styled.div`
	position: absolute;
	top: 150%;
	right: 50%;
	background-color: #fff;
	border: 1px solid black;
	min-width: 8rem;
`;

export const ActionItem = styled.div`
	padding: 0.8rem;
	cursor: pointer;

	&:hover {
		background-color: var(--aliceBlue);
	}
`;
