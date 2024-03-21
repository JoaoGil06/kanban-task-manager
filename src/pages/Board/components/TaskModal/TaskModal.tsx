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
	SubTask,
	SubTaskWrapper,
	SubTasksContainer,
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

export const TaskModal = ({ isOpen, onClose }: TaskModalProps) => {
	const { isEditing, handleOnClose, actions, taskData, columns, form } = useTaskModal({ onClose });

	const mapColumnsToDropdown = () => columns.map((column) => ({ label: column.title, value: column.id }));

	const renderModalContent = () => (
		<>
			<TaskTitleWrapper>
				<TaskTitle>{taskData?.title}</TaskTitle>
				<ActionList actions={actions} />
			</TaskTitleWrapper>
			<TaskDescription>{taskData?.description}</TaskDescription>
			<CategoryWrapper>
				<CategoryTitle>SubTasks ({`${taskData?.completedSubTasks} of ${taskData?.subTasks?.length}`})</CategoryTitle>
				{taskData?.subTasks?.map((subTask) => {
					return (
						<SubTaskWrapper key={subTask.id}>
							<Checkbox checkboxItem={{ value: subTask.id, label: subTask.title }} isChecked={subTask.completed} onChange={() => {}} />
						</SubTaskWrapper>
					);
				})}
			</CategoryWrapper>
			<CategoryWrapper>
				<CategoryTitle>Current Status</CategoryTitle>
				<Dropdown onChange={() => {}} values={mapColumnsToDropdown()} defaultValue={taskData?.column_id} />
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
					<SubTasksContainer>
						<Label>SubTasks</Label>
						{form.editTask.subTasks.map((subTask) => {
							return (
								<SubTask key={subTask.id}>
									<Input name='subtasks' type='text' onChange={(event) => form.onChange(event, subTask.id)} value={subTask.title} />
									{form.editTask.subTasks.length > 1 && <DeleteIcon src={IconCross} onClick={() => form.onClickToDeleteSubTask(subTask.id)} />}
								</SubTask>
							);
						})}
						<Button variant={ButtonVariant.Secondary} label='+ Add New Task' onClick={form.onClickToAddSubTask} />
					</SubTasksContainer>
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
