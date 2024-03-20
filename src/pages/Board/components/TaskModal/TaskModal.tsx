import Modal from '../../../../components/Modal';
import TaskModalProps from './types/TaskModalProps.type';
import { CategoryTitle, CategoryWrapper, ModalContainer, SubTaskWrapper, TaskDescription, TaskTitle, TaskTitleWrapper } from './styles/TaskModal.styledcomponent';
import Dropdown from '../../../../components/Dropdown';
import Checkbox from '../../../../components/Checkbox';
import ActionList from '../../../../components/ActionList';
import { useTaskModal } from './hooks/useTaskModal';
import { useAppSelector } from '../../../../store/store';

export const TaskModal = ({ isOpen, onClose }: TaskModalProps) => {
	const { isEditing, handleOnClose, actions } = useTaskModal({ onClose });
	const { taskModalData } = useAppSelector((state) => state.taskModal);
	const { columns } = useAppSelector((state) => state.board);

	const mapColumnsToDropdown = () => columns.map((column) => ({ label: column.title, value: column.id }));

	const renderModalContent = () => (
		<>
			<TaskTitleWrapper>
				<TaskTitle>{taskModalData?.title}</TaskTitle>
				<ActionList actions={actions} />
			</TaskTitleWrapper>
			<TaskDescription>{taskModalData?.description}</TaskDescription>
			<CategoryWrapper>
				<CategoryTitle>SubTasks ({`${taskModalData?.completedSubTasks} of ${taskModalData?.subTasks?.length}`})</CategoryTitle>
				{taskModalData?.subTasks?.map((subTask) => {
					return (
						<SubTaskWrapper key={subTask.id}>
							<Checkbox checkboxItem={{ value: subTask.id, label: subTask.title }} isChecked={subTask.completed} onChange={() => {}} />
						</SubTaskWrapper>
					);
				})}
			</CategoryWrapper>
			<CategoryWrapper>
				<CategoryTitle>Current Status</CategoryTitle>
				<Dropdown onChange={() => {}} values={mapColumnsToDropdown()} defaultValue={taskModalData?.column_id} />
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
