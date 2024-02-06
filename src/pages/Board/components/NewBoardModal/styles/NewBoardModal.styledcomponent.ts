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

export const ColumnsLabel = styled.label`
	font-weight: 700;
	color: var(--shadowBlue);
`;

export const ColumnFormRow = styled.div`
	margin-top: 1.2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const DeleteIcon = styled.img`
	margin-left: 1rem;
	cursor: pointer;
`;
