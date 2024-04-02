import styled from 'styled-components';

export const ColumnContainer = styled.div`
	min-width: 28rem;
	min-height: 85vh;
	border-radius: 0.6rem;
	background: linear-gradient(180deg, #e9effa 0%, rgba(233, 239, 250, 0.5) 100%);

	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;

export const ColumnTitle = styled.h1`
	font-size: 2.4rem;
	color: var(--shadowBlue);

	display: flex;
	align-items: center;
`;
