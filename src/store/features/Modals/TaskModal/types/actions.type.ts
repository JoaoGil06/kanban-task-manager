import SubTask from '../../../../../types/SubTask.type';
import Task from '../../../../../types/Task.type';

export interface setTaskModalDataAction {
	task: Task;
	subtasks: SubTask[];
}
