import { graphql } from 'msw';
import { DELETE_BOARD, GET_BOARD, GET_BOARDS } from './handlers/boards';
import { GET_COLUMNS, GET_COLUMNS_BY_BOARD_ID } from './handlers/columns';
import { GET_TASKS } from './handlers/tasks';
import { GET_SUBTASKS } from './handlers/subtasks';

export const handlers = [
	GET_BOARDS,
	GET_BOARD,
	DELETE_BOARD,
	GET_COLUMNS,
	GET_COLUMNS_BY_BOARD_ID,
	GET_TASKS,
	GET_SUBTASKS,
	graphql.mutation('CreatePost', ({ query, variables }) => {
		console.log('Intercepted a "CreatePost" GraphQL mutation:', query, variables);
	}),
	graphql.mutation('DeletePost', ({ query, variables }) => {
		console.log('Intercepted a "DeletePost" GraphQL mutation', query, variables);
	}),
];
