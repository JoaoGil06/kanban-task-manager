import { gql } from '@apollo/client';

const GET_SUBTASKS = gql`
	query Subtasks($task_id: ID!) {
		subTasks(task_id: $task_id) {
			id
			title
			task_id
			completed
			creation_date
		}
	}
`;

export { GET_SUBTASKS };
