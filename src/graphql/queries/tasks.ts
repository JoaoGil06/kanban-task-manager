import { gql } from '@apollo/client';

const SUBTASKS_FIELDS = gql`
	fragment SubtasksFields on Task {
		id
		title
		task_id
		completed
		creation_date
	}
`;

const GET_TASKS = gql`
	query Tasks($columns: [Column]!) {
		task(columns: $columns) {
			id
			title
			description
			creation_date
			column_id
			subtasks {
				...SubtasksFields
			}
		}
		${SUBTASKS_FIELDS}
	}
`;

export { GET_TASKS };
