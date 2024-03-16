import { gql } from '@apollo/client';

const GET_TASKS = gql`
	query Tasks($columns: [Column]!) {
		task(columns: $columns) {
			id
			title
			description
			creation_date
			column_id
		}
	}
`;

export { GET_TASKS };
