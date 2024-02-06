import { Header, ImageContainer, Title, TitleContainer } from './styles/PageHeader.styledcomponent';
import { useGlobalContext } from '../../context/GlobalContext';
import logo from '../../assets/logo-dark.svg';
export const PageHeader = () => {
	const { board } = useGlobalContext();

	return (
		<>
			<Header>
				<ImageContainer>
					<img src={logo} alt='Kanban Task Manager' />
				</ImageContainer>
				<TitleContainer>
					<Title>{board.title === '' ? 'Kanban Task Manager' : board.title}</Title>
				</TitleContainer>
			</Header>
		</>
	);
};
