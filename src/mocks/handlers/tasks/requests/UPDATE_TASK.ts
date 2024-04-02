import { HttpResponse, graphql } from 'msw';
import tasks from '../tasks';

const UPDATE_TASK = graphql.mutation('UpdateTask', ({ variables }) => {
	const { id, title, description, column_id } = variables;

	const taskIndex = tasks.findIndex((task) => task.id === id);
	const task = tasks[taskIndex];

	tasks[taskIndex] = {
		...task,
		id,
		title,
		description,
		column_id,
	};

	return HttpResponse.json({
		data: task,
	});
});

export default UPDATE_TASK;
