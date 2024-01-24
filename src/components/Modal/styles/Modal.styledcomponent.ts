import styled from 'styled-components';

export const ModalContainer = styled.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	background: var(--white);
	padding: 3.2rem;
	z-index: 100;
`;

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.7);
	z-index: 100;
`;
