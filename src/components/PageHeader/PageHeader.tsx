import { Header, ImageContainer, Title, TitleContainer } from './styles/PageHeader.styledcomponent';
import logo from '../../assets/logo-dark.svg';
import Button from '../Button';
import { ButtonVariant } from '../Button/types/ButtonVariant.enum';
import ActionList from '../ActionList';
import { useAppDispatch, useAppSelector } from '../../store/store';
import { openAddNewTaskModal } from '../../store/features/Modals/NewTaskModal/NewTaskModalSlice';
import { openDeleteBoardModal } from '../../store/features/Modals/DeleteBoardModal/DeleteBoardModalSlice';
export const PageHeader = () => {
	const { title } = useAppSelector((state) => state.board);
	const dispatch = useAppDispatch();

	const onClickOpenAddNewTask = () => {
		dispatch(openAddNewTaskModal());
	};

	const onClickOpenDeleteBoard = () => {
		dispatch(openDeleteBoardModal());
	};

	return (
		<>
			<Header>
				<ImageContainer>
					<img src={logo} alt='Kanban Task Manager' />
				</ImageContainer>
				<TitleContainer>
					<Title>{title === '' ? 'Kanban Task Manager' : title}</Title>
					{title.length > 0 && (
						<div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
							<Button variant={ButtonVariant.Primary} label='+ Add New Task' onClick={onClickOpenAddNewTask} />
							<ActionList
								actions={[
									{
										label: 'Delete Board',
										onClick: onClickOpenDeleteBoard,
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
