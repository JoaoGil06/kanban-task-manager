import { HttpResponse, graphql } from 'msw';
import boards from '../boards';

const GET_BOARD = graphql.query('Board', ({ variables }) => {
	const { id } = variables;
	console.log('[BOARDS]: ', boards);

	const res = boards.find((board) => board.id === id);

	console.log('[RESPONSE]: ', res);

	return HttpResponse.json({
		data: res,
	});
});

export default GET_BOARD;
