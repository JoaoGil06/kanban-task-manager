import styled from 'styled-components';

export const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
`;

export const TaskTitleWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const TaskTitle = styled.h1``;

export const TaskDescription = styled.p``;

export const CategoryWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`;

export const CategoryTitle = styled.h4`
	color: var(--shadowBlue);
`;

export const SubTaskWrapper = styled.div`
	display: flex;
	align-items: center;
`;
