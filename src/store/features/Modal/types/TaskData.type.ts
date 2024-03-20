import SubTask from '../../../../types/SubTask.type';
import Task from '../../../../types/Task.type';

export default interface TaskData extends Task {
	subTasks: SubTask[];
	completedSubTasks: number;
}
