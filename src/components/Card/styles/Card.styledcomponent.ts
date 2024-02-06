import styled from 'styled-components';

export const CardContainer = styled.div`
	width: 28rem;
	height: 8.8rem;
	border-radius: 0.8rem;
	background-color: var(--white);
	box-shadow: 0px 4px 6px 0px rgba(54, 78, 126, 0.1);

	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 1.6rem;
	gap: 0.8rem;
`;

export const CardTitle = styled.h3`
	font-size: 1.5rem;
`;

export const CardSubtitle = styled.span`
	font-size: 1.2rem;
	color: var(--shadowBlue);
	font-weight: 700;
`;
