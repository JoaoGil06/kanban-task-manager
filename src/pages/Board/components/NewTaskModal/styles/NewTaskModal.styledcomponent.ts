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
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
`;

export const SubtasksContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`;

export const Label = styled.label`
	font-weight: 700;
	color: var(--shadowBlue);
`;

export const Subtask = styled.div`
	display: flex;
	align-items: center;
`;

export const DeleteIcon = styled.img`
	margin-left: 1rem;
	cursor: pointer;
`;

export const StatusContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
`;
