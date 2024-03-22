import { HttpResponse, graphql } from 'msw';
import { v4 as uuidv4 } from 'uuid';
import columns from '../columns';

const CREATE_COLUMN = graphql.mutation('CreateColumn', ({ variables }) => {
	const { board_id, title } = variables;
	const newColumn = {
		id: uuidv4(),
		board_id,
		title,
	};

	columns.push(newColumn);

	return HttpResponse.json({
		data: newColumn,
	});
});

export default CREATE_COLUMN;
