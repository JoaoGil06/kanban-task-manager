import { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react';
import EditTaskModalForm from '../types/EditTaskModalForm.type';
import { useAppDispatch, useAppSelector } from '../../../../../store/store';
import { v4 as uuidv4 } from 'uuid';
import { DropdownItem } from '../../../../../components/Dropdown/types/DropdownItem.type';
import { changeColumn, toggleSubtask } from '../../../../../store/features/Modals/TaskModal/TaskModalSlice';
import { onChangeCheckboxValue } from '../../../../../components/Checkbox/types/CheckboxProps.type';
import { useMutation } from '@apollo/client';
import { UPDATE_TASK } from '../../../../../graphql/mutations/tasks';

interface UseTaskModalProps {
	onClose: () => void;
	refetchColumns: () => unknown;
}

export const useTaskModal = ({ onClose, refetchColumns }: UseTaskModalProps) => {
	const subtask = { id: uuidv4(), title: '' };

	const { taskModalData } = useAppSelector((state) => state.taskModal);
	const { columns } = useAppSelector((state) => state.board);
	const [updateTask] = useMutation(UPDATE_TASK);

	const dispatch = useAppDispatch();

	const [isEditing, setIsEditing] = useState<boolean>(false);
	const [editTaskForm, setEditTaskForm] = useState<EditTaskModalForm>({
		title: taskModalData.title,
		description: taskModalData.description,
		status: {
			value: taskModalData.column_id,
			label: '',
		},
		subtasks: taskModalData.subtasks,
	});

	const handleClickEditButton = useCallback(() => setIsEditing(!isEditing), [isEditing]);

	const handleOnClose = () => {
		setIsEditing(false);
		refetchColumns();
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
			const subtasks = editTaskForm.subtasks.map((subtask) => {
				if (subtask.id === id) {
					return { ...subtask, title: value };
				}

				return subtask;
			});

			setEditTaskForm({ ...editTaskForm, subtasks });
		} else {
			setEditTaskForm({ ...editTaskForm, [name]: value });
		}
	};

	const handleOnClickToAddSubtask = () => {
		setEditTaskForm({ ...editTaskForm, subtasks: [...editTaskForm.subtasks, subtask] });
	};

	const handleDeleteSubtask = (subtaskId: string) => {
		const subtasksFiltered = editTaskForm.subtasks.filter((subtask) => subtask.id !== subtaskId);
		setEditTaskForm({ ...editTaskForm, subtasks: subtasksFiltered });
	};

	const handleChangeDropdown = (item: DropdownItem) => {
		setEditTaskForm({ ...editTaskForm, status: item });
	};

	const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	const onChangeSubtask = ({ value, isChecked }: onChangeCheckboxValue) => {
		dispatch(toggleSubtask({ value, isChecked }));

		// Fazer o uso da mutation de editar
	};

	const onChangeColumn = (item: DropdownItem) => {
		console.log('[Column Id]: ', item);
		dispatch(changeColumn(item.value));
		updateTask({
			variables: {
				id: taskModalData.id,
				title: taskModalData.title,
				description: taskModalData.description,
				column_id: item.value,
			},
		});
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
			onClickToAddSubtask: handleOnClickToAddSubtask,
			onClickToDeleteSubtask: handleDeleteSubtask,
			onChangeDropdown: handleChangeDropdown,
			onChangeSubtask,
			onChangeColumn,
		},
	};
};
