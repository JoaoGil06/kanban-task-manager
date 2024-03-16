import { gql } from '@apollo/client';

const COLUMN_FIELDS = gql`
	fragment ColumnFields on Column {
		id
		title
		board_id
	}
`;

const GET_COLUMNS = gql`
	query Columns {
		columns {
			...ColumnFields
		}
	}
	${COLUMN_FIELDS}
`;

const GET_COLUMNS_BY_BOARD_ID = gql`
	query ColumnsByBoardId($board_id: ID!) {
		column(board_id: $board_id) {
			...COLUMN_FIELDS
		}
		${COLUMN_FIELDS}
	}
`;

export { GET_COLUMNS, GET_COLUMNS_BY_BOARD_ID };
