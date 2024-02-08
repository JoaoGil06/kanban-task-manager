import { Header, ImageContainer, Title, TitleContainer } from './styles/PageHeader.styledcomponent';
import { useGlobalContext } from '../../context/GlobalContext';
import logo from '../../assets/logo-dark.svg';
import Button from '../Button';
import { ButtonVariant } from '../Button/types/ButtonVariant.enum';
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
					<Button variant={ButtonVariant.Primary} label='+ Add New Task' />
				</TitleContainer>
			</Header>
		</>
	);
};
