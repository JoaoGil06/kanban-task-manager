import { Header, ImageContainer, Title, TitleContainer } from './styles/PageHeader.styledcomponent';
import { useGlobalContext } from '../../context/GlobalContext';
import logo from '../../assets/logo-dark.svg';
import Button from '../Button';
import { ButtonVariant } from '../Button/types/ButtonVariant.enum';
import ActionList from '../ActionList';
export const PageHeader = () => {
	const { board, addNewTaskModal } = useGlobalContext();

	return (
		<>
			<Header>
				<ImageContainer>
					<img src={logo} alt='Kanban Task Manager' />
				</ImageContainer>
				<TitleContainer>
					<Title>{board.title === '' ? 'Kanban Task Manager' : board.title}</Title>
					{board.title.length > 0 && (
						<div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
							<Button variant={ButtonVariant.Primary} label='+ Add New Task' onClick={addNewTaskModal.onClickAddNewTask} />
							<ActionList
								actions={[
									{
										label: 'Delete Board',
										onClick: () => {},
									},
								]}
							/>
						</div>
					)}
				</TitleContainer>
			</Header>
		</>
	);
};
