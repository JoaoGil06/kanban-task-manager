import styled from 'styled-components';

export const ColumnContainer = styled.div`
	width: 28rem;
	min-height: 85vh;
	border-radius: 0.6rem;

	display: flex;
	flex-direction: column;
	gap: 2.4rem;
`;

type ColumnTitleProps = {
	color: string;
};

export const ColumnTitle = styled.h1<ColumnTitleProps>`
	font-size: 1.2rem;
	color: var(--shadowBlue);
	letter-spacing: 2.4px;
	text-transform: uppercase;

	display: flex;
	align-items: center;
	gap: 1.2rem;

	&::before {
		content: '';
		display: flex;
		width: 1.5rem;
		height: 1.5rem;
		background: ${(props) => props.color};
		border-radius: 50%;
	}
`;
