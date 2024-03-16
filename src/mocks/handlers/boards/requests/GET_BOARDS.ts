import { HttpResponse, graphql } from 'msw';
import boards from '../boards';

const GET_BOARDS = graphql.query('Boards', () => {
	return HttpResponse.json({
		data: boards,
	});
});

export default GET_BOARDS;
