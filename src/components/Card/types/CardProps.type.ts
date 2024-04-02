import Task from '../../../types/Task.type';

export default interface CardProps {
	task: Task;
	onClick: () => void;
	completedSubtasks: number;
	totalSubtasks: number;
}
