import { HttpResponse, graphql } from 'msw';
import { v4 as uuidv4 } from 'uuid';
import boards from '../boards';

const CREATE_BOARD = graphql.mutation('CreateBoard', ({ variables }) => {
	const { title } = variables;
	const newBoard = {
		id: uuidv4(),
		title,
	};

	boards.push(newBoard);

	return HttpResponse.json({
		data: newBoard,
	});
});

export default CREATE_BOARD;
