import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react';
import EditTaskModalForm from '../types/EditTaskModalForm.type';
import { useAppSelector } from '../../../../../store/store';
import { v4 as uuidv4 } from 'uuid';
import { DropdownItem } from '../../../../../components/Dropdown/types/DropdownItem.type';
interface UseTaskModalProps {
	onClose: () => void;
}

export const useTaskModal = ({ onClose }: UseTaskModalProps) => {
	const subTask = { id: uuidv4(), title: '' };

	const { taskModalData } = useAppSelector((state) => state.taskModal);
	const { columns } = useAppSelector((state) => state.board);

	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [editTaskForm, setEditTaskForm] = useState<EditTaskModalForm>({
		title: taskModalData.title,
		description: taskModalData.description,
		status: {
			value: taskModalData.column_id,
			label: '',
		},
		subTasks: taskModalData.subTasks,
	});

	const handleClickEditButton = useCallback(() => setIsEditing(!isEditing), [isEditing]);

	const handleOnClose = () => {
		setIsEditing(false);
		onClose();
	};

	const actions = useMemo(
		() => [
			{
				label: isEditing ? 'View Task' : 'Edit Task',
				onClick: handleClickEditButton,
			},
			{
				label: 'Delete Task',
				onClick: () => {},
			},
		],
		[handleClickEditButton, isEditing]
	);

	const handleOnChange = (event: ChangeEvent<HTMLInputElement>, id?: string) => {
		const { value, name } = event.target;

		if (id) {
			const subTasks = editTaskForm.subTasks.map((subTask) => {
				if (subTask.id === id) {
					return { ...subTask, title: value };
				}

				return subTask;
			});

			setEditTaskForm({ ...editTaskForm, subTasks });
		} else {
			setEditTaskForm({ ...editTaskForm, [name]: value });
		}
	};

	const handleOnClickToAddSubTask = () => {
		setEditTaskForm({ ...editTaskForm, subTasks: [...editTaskForm.subTasks, subTask] });
	};

	const handleDeleteSubtask = (subTaskId: string) => {
		const subtasksFiltered = editTaskForm.subTasks.filter((subtask) => subtask.id !== subTaskId);
		setEditTaskForm({ ...editTaskForm, subTasks: subtasksFiltered });
	};

	const handleChangeDropdown = (item: DropdownItem) => {
		setEditTaskForm({ ...editTaskForm, status: item });
	};

	const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return {
		isEditing,
		handleOnClose,
		actions,
		taskData: taskModalData,
		columns,
		form: {
			editTask: editTaskForm,
			onChange: handleOnChange,
			onSubmit: handleOnSubmit,
			onClickToAddSubTask: handleOnClickToAddSubTask,
			onClickToDeleteSubTask: handleDeleteSubtask,
			onChangeDropdown: handleChangeDropdown,
		},
	};
};
