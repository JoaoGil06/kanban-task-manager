import { HttpResponse, graphql } from 'msw';
import boards from '../boards';

const GET_BOARD = graphql.query('Board', ({ variables }) => {
	const { id } = variables;

	const res = boards.find((board) => board.id === id);

	return HttpResponse.json({
		data: res,
	});
});

export default GET_BOARD;
