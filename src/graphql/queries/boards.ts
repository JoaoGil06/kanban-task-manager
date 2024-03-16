import { gql } from '@apollo/client';

const BOARD_FIELDS = gql`
	fragment BoardFields on Board {
		id
		title
	}
`;

const GET_BOARDS = gql`
	${BOARD_FIELDS}
	query Boards {
		boards {
			...BoardFields
		}
	}
`;

const GET_BOARD = gql`
	${BOARD_FIELDS}
	query Board($id: ID!) {
		board(id: $id) {
			...BoardFields
		}
	}
`;

export { GET_BOARDS, GET_BOARD };
