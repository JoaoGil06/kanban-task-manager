import styled from 'styled-components';

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
`;

export const ModalTitle = styled.h1`
	color: var(--richBlack);
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2.4rem;

	button {
		width: 100%;
	}
`;

export const FormRow = styled.div`
	margin-bottom: 2.4rem;
`;
