import { graphql } from 'msw';
import { DELETE_BOARD, GET_BOARD, GET_BOARDS } from './handlers/boards';
import { CREATE_COLUMN, GET_COLUMNS, GET_COLUMNS_BY_BOARD_ID } from './handlers/columns';
import { GET_TASKS } from './handlers/tasks';
import { GET_SUBTASKS } from './handlers/subtasks';
import CREATE_TASK from './handlers/tasks/requests/CREATE_TASK';
import CREATE_SUBTASK from './handlers/subtasks/requests/CREATE_SUBTASK';
import CREATE_BOARD from './handlers/boards/requests/CREATE_BOARD';

export const handlers = [
	GET_BOARDS,
	GET_BOARD,
	DELETE_BOARD,
	CREATE_BOARD,
	GET_COLUMNS,
	GET_COLUMNS_BY_BOARD_ID,
	CREATE_COLUMN,
	GET_TASKS,
	CREATE_TASK,
	GET_SUBTASKS,
	CREATE_SUBTASK,
	graphql.mutation('CreatePost', ({ query, variables }) => {
		console.log('Intercepted a "CreatePost" GraphQL mutation:', query, variables);
	}),
	graphql.mutation('DeletePost', ({ query, variables }) => {
		console.log('Intercepted a "DeletePost" GraphQL mutation', query, variables);
	}),
];
