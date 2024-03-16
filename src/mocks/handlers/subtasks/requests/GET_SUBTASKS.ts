import { HttpResponse, graphql } from 'msw';
import subtasks from '../subtasks';

const GET_SUBTASKS = graphql.query('Subtasks', ({ variables }) => {
	const { task_id } = variables;
	const res = subtasks.filter((subtask) => subtask.task_id === task_id);

	return HttpResponse.json({
		data: res,
	});
});

export default GET_SUBTASKS;
