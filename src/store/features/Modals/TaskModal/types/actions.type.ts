import Subtask from '../../../../../types/Subtask.type';
import Task from '../../../../../types/Task.type';

export interface setTaskModalDataAction {
	task: Task;
	subtasks: Subtask[];
}

export interface toggleSubtaskAction {
	value: string;
	isChecked: boolean;
}
