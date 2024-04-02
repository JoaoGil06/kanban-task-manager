import Modal from '../../../../components/Modal';
import TaskModalProps from './types/TaskModalProps.type';
import {
	CategoryTitle,
	CategoryWrapper,
	DeleteIcon,
	Form,
	Label,
	ModalContainer,
	StatusContainer,
	Subtask,
	SubtaskWrapper,
	SubtasksContainer,
	TaskDescription,
	TaskTitle,
	TaskTitleWrapper,
} from './styles/TaskModal.styledcomponent';
import Dropdown from '../../../../components/Dropdown';
import Checkbox from '../../../../components/Checkbox';
import ActionList from '../../../../components/ActionList';
import { useTaskModal } from './hooks/useTaskModal';
import Input from '../../../../components/Input';
import { ButtonVariant } from '../../../../components/Button/types/ButtonVariant.enum';
import Button from '../../../../components/Button';
import IconCross from '../../../../assets/icon-cross.svg';

export const TaskModal = ({ isOpen, onClose, refetchColumns }: TaskModalProps) => {
	const { isEditing, handleOnClose, actions, taskData, columns, form } = useTaskModal({ onClose, refetchColumns });

	const mapColumnsToDropdown = () => columns.map((column) => ({ label: column.title, value: column.id }));

	const renderModalContent = () => (
		<>
			<TaskTitleWrapper>
				<TaskTitle>{taskData?.title}</TaskTitle>
				<ActionList actions={actions} />
			</TaskTitleWrapper>
			<TaskDescription>{taskData?.description}</TaskDescription>
			<CategoryWrapper>
				<CategoryTitle>Subtasks ({`${taskData?.completedSubtasks} of ${taskData?.subtasks?.length}`})</CategoryTitle>
				{taskData?.subtasks?.map((subtask) => {
					return (
						<SubtaskWrapper key={subtask.id}>
							<Checkbox checkboxItem={{ value: subtask.id, label: subtask.title }} isChecked={subtask.completed} onChange={form.onChangeSubtask} />
						</SubtaskWrapper>
					);
				})}
			</CategoryWrapper>
			<CategoryWrapper>
				<CategoryTitle>Current Status</CategoryTitle>
				<Dropdown onChange={form.onChangeColumn} values={mapColumnsToDropdown()} defaultValue={taskData?.column_id} />
			</CategoryWrapper>
		</>
	);

	const renderEditModalContent = () => {
		return (
			<>
				<TaskTitleWrapper>
					<TaskTitle>Edit Task</TaskTitle>
					<ActionList actions={actions} />
				</TaskTitleWrapper>
				<Form onSubmit={form.onSubmit}>
					<Input name='title' type='text' onChange={form.onChange} value={form.editTask.title} showLabel />
					<Input name='description' type='text' onChange={form.onChange} value={form.editTask.description} showLabel />
					<SubtasksContainer>
						<Label>Subtasks</Label>
						{form.editTask.subtasks.map((subtask) => {
							return (
								<Subtask key={subtask.id}>
									<Input name='subtasks' type='text' onChange={(event) => form.onChange(event, subtask.id)} value={subtask.title} />
									{form.editTask.subtasks.length > 1 && <DeleteIcon src={IconCross} onClick={() => form.onClickToDeleteSubtask(subtask.id)} />}
								</Subtask>
							);
						})}
						<Button variant={ButtonVariant.Secondary} label='+ Add New Task' onClick={form.onClickToAddSubtask} />
					</SubtasksContainer>
					<StatusContainer>
						<Label>Status</Label>
						<Dropdown values={mapColumnsToDropdown()} onChange={form.onChangeDropdown} defaultValue={form.editTask.status.value} />
					</StatusContainer>
					<Button variant={ButtonVariant.Primary} label='Save Changes' />
				</Form>
			</>
		);
	};

	return (
		<Modal isOpen={isOpen} onClose={handleOnClose}>
			<ModalContainer>{isEditing ? renderEditModalContent() : renderModalContent()}</ModalContainer>
		</Modal>
	);
};
