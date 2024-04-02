import Column from '../../types/Column.type';
import Task from '../../types/Task.type';
import BoardData from '../features/Board/types/BoardData.type';

const mapTasksAndColumns = (columns: Column[], tasks: Task[]): BoardData[] => {
	const data = columns.map((column) => {
		const findedTasks = tasks.filter((task) => task.column_id === column.id);

		const tasksWithSubtasksCompleted = findedTasks.map((task) => {
			const completedSubtasks = task.subtasks.reduce((accumulator, currentValue) => {
				if (currentValue.completed) {
					accumulator += 1;
				}

				return accumulator;
			}, 0);

			return { ...task, completedSubtasks };
		});

		return {
			id: column.id,
			title: column.title,
			tasks: tasksWithSubtasksCompleted,
		};
	});

	return data;
};

export default mapTasksAndColumns;
