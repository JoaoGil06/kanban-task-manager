import Task from '../../../types/Task.type';

export default interface BoardData {
	column: {
		id: string;
		title: string;
		tasks: Task[];
	};
}
