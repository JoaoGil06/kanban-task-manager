import styled from 'styled-components';

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
`;

export const ModalTitle = styled.h1`
	color: var(--fireOpal);
`;

export const ModalBody = styled.p`
	max-width: 40rem;
	color: var(--shadowBlue);
`;

export const ActionsContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	gap: 1.6rem;

	button {
		width: 100%;
	}
`;
