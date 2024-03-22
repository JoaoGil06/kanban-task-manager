import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewTaskModalForm from '../types/NewTaskModalForm.type';
import { useMutation } from '@apollo/client';
import { CREATE_SUBTASK } from '../../../../../graphql/mutations/subtasks';
import { CREATE_TASK } from '../../../../../graphql/mutations/tasks';
import { DropdownItem } from '../../../../../components/Dropdown/types/DropdownItem.type';
import BoardData from '../../../types/BoardData.type';

interface UseNewTaskModalProps {
	onClose: () => void;
	onClick: () => void;
	columns: BoardData[];
}

const useNewTaskModal = ({ onClick, onClose, columns }: UseNewTaskModalProps) => {
	const subTask = { id: uuidv4(), title: '' };

	const [formData, setFormData] = useState<NewTaskModalForm>({
		title: '',
		description: '',
		subTasks: [subTask],
		status: { value: '', label: '' },
	});

	const [createSubtask] = useMutation(CREATE_SUBTASK);

	const [createTask] = useMutation(CREATE_TASK, {
		variables: {
			title: formData.title,
			description: formData.description,
			column_id: formData.status.value,
		},
		onCompleted: (data) => {
			formData.subTasks.map((subTask) => {
				createSubtask({
					variables: {
						title: subTask.title,
						task_id: data.id,
					},
				});
			});
		},
	});

	const handleOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		await createTask();
		onClick();
		onClose();
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

	const handleDeleteSubtask = (id: string) => {
		const subTasksFiltered = formData.subTasks.filter((subTask) => subTask.id !== id);
		setFormData({ ...formData, subTasks: subTasksFiltered });
	};

	const mapColumnsToDropdownValues = () => {
		return columns.map((column) => ({
			value: column.id,
			label: column.title,
		}));
	};

	return {
		handleOnSubmit,
		handleOnChange,
		handleChangeDropdown,
		handleOnClickToAddSubTask,
		handleDeleteSubtask,
		mapColumnsToDropdownValues,
		formData,
	};
};

export default useNewTaskModal;
