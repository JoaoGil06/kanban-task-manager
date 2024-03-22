import { HttpResponse, graphql } from 'msw';
import { v4 as uuidv4 } from 'uuid';
import tasks from '../tasks';

const CREATE_TASK = graphql.mutation('CreateTask', ({ variables }) => {
	const { title, description, column_id } = variables;
	const newTask = {
		id: uuidv4(),
		title,
		description,
		creation_date: new Date(),
		column_id,
	};

	tasks.push(newTask);

	return HttpResponse.json({
		data: newTask,
	});
});

export default CREATE_TASK;
