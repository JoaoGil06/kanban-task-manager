import SubTask from '../../../../../types/SubTask.type';
import Task from '../../../../../types/Task.type';

export interface TaskData extends Task {
	subTasks: SubTask[];
	completedSubTasks: number;
}

export default interface State {
	isOpenTaskModal: boolean;
	taskModalData: TaskData;
}
