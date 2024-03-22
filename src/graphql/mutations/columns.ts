import { gql } from '@apollo/client';

const CREATE_COLUMN = gql`
	mutation CreateColumn($board_id: ID!, $title: string) {
		createColumn(board_id: $board_id, title: $title) {
			id
			board_id
			title
		}
	}
`;

export { CREATE_COLUMN };
