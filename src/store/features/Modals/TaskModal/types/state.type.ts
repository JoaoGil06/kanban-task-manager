import Subtask from '../../../../../types/Subtask.type';
import Task from '../../../../../types/Task.type';

export interface TaskData extends Task {
	subtasks: Subtask[];
	completedSubtasks: number;
}

export default interface State {
	isOpenTaskModal: boolean;
	taskModalData: TaskData;
}
