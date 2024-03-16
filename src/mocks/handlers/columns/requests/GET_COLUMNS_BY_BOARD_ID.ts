import { HttpResponse, graphql } from 'msw';
import columns from '../columns';

const GET_COLUMNS_BY_BOARD_ID = graphql.query('ColumnsByBoardId', ({ variables }) => {
	const { board_id } = variables;
	const res = columns.filter((column) => column.board_id === board_id);

	return HttpResponse.json({
		data: res,
	});
});

export default GET_COLUMNS_BY_BOARD_ID;
