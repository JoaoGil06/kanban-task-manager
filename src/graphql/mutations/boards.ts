import { gql } from '@apollo/client';

const CREATE_BOARD = gql`
	mutation CreateBoard($title: string) {
		createBoard(title: $title) {
			id
			title
		}
	}
`;

const DELETE_BOARD = gql`
	mutation DeleteBoard($id: ID!) {
		deleteBoard(id: $id) {
			id
		}
	}
`;

export { CREATE_BOARD, DELETE_BOARD };
