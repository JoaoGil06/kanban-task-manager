import styled from 'styled-components';

export const BoardContainer = styled.div`
	background-color: var(--aliceBlue);
	min-height: calc(100vh - 9.6rem);
	padding: 2.4rem 2.4rem 2.4rem 0;

	min-width: 100vw;
	overflow-x: scroll;
`;

export const ColumnsContainer = styled.div`
	display: flex;
`;
