import Task from '../../../../types/Task.type';

export default interface BoardData {
	id: string;
	title: string;
	tasks: Task[];
}
