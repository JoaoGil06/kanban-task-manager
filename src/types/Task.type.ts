import Subtask from './Subtask.type';

export default interface Task {
	id: string;
	title: string;
	description: string;
	creation_date: Date;
	column_id: string;
	subtasks: Subtask[];
	completedSubtasks: number;
}
