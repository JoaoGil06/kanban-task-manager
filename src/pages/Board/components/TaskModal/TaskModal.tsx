import Modal from '../../../../components/Modal';
import { useBoardContext } from '../../context/BoardContext';
import TaskModalProps from './types/TaskModalProps.type';
import { CategoryTitle, CategoryWrapper, ModalContainer, SubTaskWrapper, TaskDescription, TaskTitle, TaskTitleWrapper } from './styles/TaskModal.styledcomponent';
import Dropdown from '../../../../components/Dropdown';
import Checkbox from '../../../../components/Checkbox';
import ActionList from '../../../../components/ActionList';
import { useTaskModal } from './hooks/useTaskModal';

export const TaskModal = ({ isOpen, onClose }: TaskModalProps) => {
	const { taskData, columns } = useBoardContext();
	const { isEditing, handleOnClose, actions } = useTaskModal({ onClose });

	const mapColumnsToDropdown = () => columns.map((column) => ({ label: column.title, value: column.id }));

	const renderModalContent = () => (
		<>
			<TaskTitleWrapper>
				<TaskTitle>{taskData.title}</TaskTitle>
				<ActionList actions={actions} />
			</TaskTitleWrapper>
			<TaskDescription>{taskData.description}</TaskDescription>
			<CategoryWrapper>
				<CategoryTitle>SubTasks ({`${taskData?.completedSubTasks} of ${taskData.subTasks?.length}`})</CategoryTitle>
				{taskData.subTasks?.map((subTask) => {
					return (
						<SubTaskWrapper key={subTask.id}>
							<Checkbox checkboxItem={{ value: subTask.id, label: subTask.title }} isChecked={subTask.completed} onChange={() => {}} />
						</SubTaskWrapper>
					);
				})}
			</CategoryWrapper>
			<CategoryWrapper>
				<CategoryTitle>Current Status</CategoryTitle>
				<Dropdown onChange={() => {}} values={mapColumnsToDropdown()} defaultValue={taskData.column_id} />
			</CategoryWrapper>
		</>
	);

	const renderEditModalContent = () => {
		return <h1>Edit Modal</h1>;
	};

	return (
		<Modal isOpen={isOpen} onClose={handleOnClose}>
			<ModalContainer>{isEditing ? renderEditModalContent() : renderModalContent()}</ModalContainer>
		</Modal>
	);
};
