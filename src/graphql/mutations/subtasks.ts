import { gql } from '@apollo/client';

const CREATE_SUBTASK = gql`
	mutation CreateSubtask($task_id: ID!, $title: string) {
		createSubtask(task_id: $task_id, title: $title) {
			id
			title
			completed
			creation_date
			task_id
		}
	}
`;

export { CREATE_SUBTASK };
