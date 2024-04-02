import Subtask from '../../types/Subtask.type';
import Task from '../../types/Task.type';

const mapTaskAndSubtasks = (task: Task, subtasks: Subtask[]) => {
	const completedSubtasks = subtasks.reduce((accumulator, currentValue) => {
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
		subtasks: subtasks,
		completedSubtasks,
	};
};

export default mapTaskAndSubtasks;
