import { HttpResponse, graphql } from 'msw';
import tasks from '../tasks';
import Task from '../../../../types/Task.type';
import Column from '../../../../types/Column.type';

const GET_TASKS = graphql.query('Tasks', ({ variables }) => {
	console.log(variables);
	const { columns } = variables;
	let res: Task[] = [];

	columns.forEach((column: Column) => {
		const result = tasks.filter((task) => task.column_id === column.id);
		res = [...res, ...result];
	});

	return HttpResponse.json({
		data: res,
	});
});

export default GET_TASKS;
