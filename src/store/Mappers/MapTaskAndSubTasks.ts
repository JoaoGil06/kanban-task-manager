import SubTask from '../../types/SubTask.type';
import Task from '../../types/Task.type';

const mapTaskAndSubTasks = (task: Task, subTasks: SubTask[]) => {
	const completedSubTasks = subTasks.reduce((accumulator, currentValue) => {
		if (currentValue.completed) {
			accumulator += 1;
		}

		return accumulator;
	}, 0);
	return {
		id: task.id,
		title: task.title,
		description: task.description,
		creation_date: task.creation_date,
		column_id: task.column_id,
		subTasks: subTasks,
		completedSubTasks,
	};
};

export default mapTaskAndSubTasks;
