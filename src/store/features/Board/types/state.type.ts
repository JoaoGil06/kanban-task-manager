import Board from '../../../../types/Board.type';
import Column from '../../../../types/Column.type';
import Task from '../../../../types/Task.type';

interface BoardData {
	id: string;
	title: string;
	tasks: Task[];
}

interface State extends Board {
	isLoading: boolean;
	columns: Column[];
	data: BoardData[];
}

export default State;
