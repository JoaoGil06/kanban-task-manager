import Column from '../../types/Column.type';
import Task from '../../types/Task.type';
import BoardData from '../features/Board/types/BoardData.type';

const mapTasksAndColumns = (columns: Column[], tasks: Task[]): BoardData[] => {
	const data = columns.map((column) => {
		const findedTasks = tasks.filter((task) => task.column_id === column.id);

		return {
			id: column.id,
			title: column.title,
			tasks: findedTasks,
		};
	});

	return data;
};

export default mapTasksAndColumns;
