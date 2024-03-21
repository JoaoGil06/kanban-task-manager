import { ChangeEvent, FormEvent, useState } from 'react';
import Button from '../../../../components/Button';
import { ButtonVariant } from '../../../../components/Button/types/ButtonVariant.enum';
import Input from '../../../../components/Input';
import Modal from '../../../../components/Modal';
import { DeleteIcon, Form, ModalContainer, ModalTitle, SubTasksContainer, Label, SubTask, StatusContainer } from './styles/NewTaskModal.styledcomponent';
import NewTaskModalProps from './types/NewTaskModalProps.type';
import { v4 as uuidv4 } from 'uuid';
import NewTaskModalForm from './types/NewTaskModalForm.type';
import IconCross from '../../../../assets/icon-cross.svg';
import Dropdown from '../../../../components/Dropdown';
import { DropdownItem } from '../../../../components/Dropdown/types/DropdownItem.type';

export const NewTaskModal = ({ isOpen, onClose, columns }: NewTaskModalProps) => {
	const subTask = { id: uuidv4(), title: '' };

	const [formData, setFormData] = useState<NewTaskModalForm>({
		title: '',
		description: '',
		subTasks: [subTask],
		status: { value: '', label: '' },
	});

	const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
		event?.preventDefault();

		console.log('[Form Data]: ', formData);
	};

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>, id?: string) => {
		const { value, name } = event.target;

		if (id) {
			const subTasks = formData.subTasks.map((subTask) => {
				if (subTask.id === id) {
					return { ...subTask, title: value };
				}

				return subTask;
			});

			setFormData({ ...formData, subTasks });
		} else {
			setFormData({ ...formData, [name]: value });
		}
	};

	const handleChangeDropdown = (item: DropdownItem) => {
		setFormData({ ...formData, status: item });
	};

	const handleOnClickToAddSubTask = () => {
		setFormData({ ...formData, subTasks: [...formData.subTasks, subTask] });
	};

	const handleDeleteColumn = (id: string) => {
		const subTasksFiltered = formData.subTasks.filter((subTask) => subTask.id !== id);
		setFormData({ ...formData, subTasks: subTasksFiltered });
	};

	const mapColumnsToDropdownValues = () => {
		return columns.map((column) => ({
			value: column.id,
			label: column.title,
		}));
	};

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
									{formData.subTasks.length > 1 && <DeleteIcon src={IconCross} onClick={() => handleDeleteColumn(subTask.id)} />}
								</SubTask>
							);
						})}
						<Button variant={ButtonVariant.Secondary} label='+ Add New Task' onClick={handleOnClickToAddSubTask} />
					</SubTasksContainer>
					<StatusContainer>
						<Label>Status</Label>
						<Dropdown values={mapColumnsToDropdownValues()} onChange={handleChangeDropdown} />
					</StatusContainer>
					<Button variant={ButtonVariant.Primary} label='Create Task' />
				</Form>
			</ModalContainer>
		</Modal>
	);
};
