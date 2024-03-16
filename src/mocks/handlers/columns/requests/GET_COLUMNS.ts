import { HttpResponse, graphql } from 'msw';
import columns from '../columns';

const GET_COLUMNS = graphql.query('Columns', () => {
	return HttpResponse.json({
		data: columns,
	});
});

export default GET_COLUMNS;
