import Column from '../../../../types/Column.type';
import Task from '../../../../types/Task.type';

export interface setBoardAction {
	id: string;
	title: string;
	isLoading: boolean;
}

export interface setBoardDataAction {
	columns: Column[];
	tasks: Task[];
}
