import styled from 'styled-components';

export const ColumnContainer = styled.div`
	width: 28rem;
	min-height: 85vh;
	margin-left: 2.4rem;
	border-radius: 0.6rem;
`;

type ColumnTitleProps = {
	color: string;
};

export const ColumnTitle = styled.h1<ColumnTitleProps>`
	font-size: 1.2rem;
	color: var(--shadowBlue);
	letter-spacing: 2.4px;
	margin-bottom: 2.4rem;
	text-transform: uppercase;

	display: flex;
	align-items: center;

	&::before {
		content: '';
		display: flex;
		width: 1.5rem;
		height: 1.5rem;
		background: ${(props) => props.color};
		border-radius: 50%;
		margin-right: 1.2rem;
	}
`;
