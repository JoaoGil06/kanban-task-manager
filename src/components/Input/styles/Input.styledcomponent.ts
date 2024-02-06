import styled from 'styled-components';

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	transition: all 0.5s;
	width: 100%;
`;

export const InputLabel = styled.label`
	margin-bottom: 0.8rem;
	font-weight: 700;
	color: var(--shadowBlue);
	text-transform: capitalize;
`;

type InputComponentProps = {
	hasErrors: boolean;
};

export const InputComponent = styled.input<InputComponentProps>`
	padding: 0.8rem 1.6rem;
	border: 1px solid var(--lavender);
	border-radius: 4px;
	color: var(--richBlack);
	line-height: 2.3rem;
	font-weight: 700;
	transition: all 0.2s;

	&:focus {
		outline: none;
	}

	${({ hasErrors }) =>
		hasErrors &&
		`
      border: 1px solid var(--fireOpal);
    `}
`;

export const ErrorMessageComponent = styled.span`
	color: var(--fireOpal);
	position: absolute;
	right: 1rem;
	top: 0.9rem;
	font-size: 1.3rem;
	line-height: 2.3rem;
	font-weight: 700;
`;
