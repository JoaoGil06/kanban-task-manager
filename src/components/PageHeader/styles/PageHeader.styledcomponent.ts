import styled from 'styled-components';

export const Header = styled.header`
	width: 100%;
	height: 9.6rem;
	background-color: var(--white);
	color: var(--richBlack);
	display: flex;
	align-items: center;
`;

export const ImageContainer = styled.div`
	width: 34.5rem;
	height: 100%;
	border-right: 1px solid var(--lavender);

	display: flex;
	align-items: center;
	padding-left: 3.2rem;
`;

export const TitleContainer = styled.div`
	width: 100%;
	height: 100%;
	border-bottom: 1px solid var(--lavender);
	display: flex;
	align-items: center;
	padding: 0 2.4rem;
`;

export const Title = styled.h1`
	font-size: 2.4rem;
`;
