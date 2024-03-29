import Button from '../../../../components/Button';
import { ButtonVariant } from '../../../../components/Button/types/ButtonVariant.enum';
import Input from '../../../../components/Input';
import Modal from '../../../../components/Modal';
import { DeleteIcon, Form, ModalContainer, ModalTitle, SubTasksContainer, Label, SubTask, StatusContainer } from './styles/NewTaskModal.styledcomponent';
import NewTaskModalProps from './types/NewTaskModalProps.type';
import IconCross from '../../../../assets/icon-cross.svg';
import Dropdown from '../../../../components/Dropdown';
import useNewTaskModal from './hooks/useNewTaskModal';

export const NewTaskModal = ({ isOpen, onClose, columns, onClick }: NewTaskModalProps) => {
	const { handleChangeDropdown, handleDeleteSubtask, handleOnChange, handleOnClickToAddSubTask, handleOnSubmit, mapColumnsToDropdownValues, formData } = useNewTaskModal({ onClose, columns, onClick });

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalContainer>
				<ModalTitle>Modal Add New Task</ModalTitle>
				<Form onSubmit={handleOnSubmit}>
					<Input name='title' type='text' onChange={handleOnChange} value={formData.title} showLabel />
					<Input name='description' type='text' onChange={handleOnChange} value={formData.description} showLabel />
					<SubTasksContainer>
						<Label>SubTasks</Label>
						{formData.subTasks.map((subTask) => {
							return (
								<SubTask key={subTask.id}>
									<Input name='subtasks' type='text' onChange={(event) => handleOnChange(event, subTask.id)} value={subTask.title} />
									{formData.subTasks.length > 1 && <DeleteIcon src={IconCross} onClick={() => handleDeleteSubtask(subTask.id)} />}
								</SubTask>
							);
						})}
						<Button variant={ButtonVariant.Secondary} label='+ Add New Task' onClick={handleOnClickToAddSubTask} />
					</SubTasksContainer>
					<StatusContainer>
						<Label>Status</Label>
						<Dropdown values={mapColumnsToDropdownValues()} onChange={handleChangeDropdown} />
					</StatusContainer>
					<Button variant={ButtonVariant.Primary} label='Create Task' type='submit' />
				</Form>
			</ModalContainer>
		</Modal>
	);
};
