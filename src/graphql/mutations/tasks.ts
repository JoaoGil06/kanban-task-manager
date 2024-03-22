import { gql } from '@apollo/client';

const CREATE_TASK = gql`
	mutation CreateTask($column_id: ID!, $title: string, $description: string) {
		createTask(column_id: $column_id, title: $title, description: $description) {
			id
			title
			description
			creation_date
			column_id
		}
	}
`;

export { CREATE_TASK };
