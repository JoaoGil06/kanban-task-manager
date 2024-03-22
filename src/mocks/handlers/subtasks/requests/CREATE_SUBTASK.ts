import { HttpResponse, graphql } from 'msw';
import { v4 as uuidv4 } from 'uuid';
import subtasks from '../subtasks';

const CREATE_SUBTASK = graphql.mutation('CreateSubtask', ({ variables }) => {
	const { title, task_id } = variables;
	const newSubtask = {
		id: uuidv4(),
		title,
		completed: false,
		creation_date: new Date(),
		task_id,
	};

	subtasks.push(newSubtask);

	return HttpResponse.json({
		data: newSubtask,
	});
});

export default CREATE_SUBTASK;
