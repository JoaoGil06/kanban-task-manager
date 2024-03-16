import { gql } from '@apollo/client';

const DELETE_BOARD = gql`
	mutation DeleteBoard($id: ID!) {
		deleteBoard(id: $id) {
			id
		}
	}
`;

export { DELETE_BOARD };
