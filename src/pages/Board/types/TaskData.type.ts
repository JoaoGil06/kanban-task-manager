import Subtask from '../../../types/Subtask.type';
import Task from '../../../types/Task.type';

export default interface TaskData extends Task {
	subtasks: Subtask[];
	completedSubTasks: number;
}
