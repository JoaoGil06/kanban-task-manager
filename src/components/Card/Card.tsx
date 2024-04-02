import { CardContainer, CardSubtitle, CardTitle } from './styles/Card.styledcomponent';
import CardProps from './types/CardProps.type';

export const Card = ({ task, completedSubtasks, totalSubtasks, onClick }: CardProps) => {
	return (
		<CardContainer onClick={onClick}>
			<CardTitle>{task.title}</CardTitle>
			{totalSubtasks > 0 && (
				<CardSubtitle>
					{completedSubtasks} of {totalSubtasks} subtasks
				</CardSubtitle>
			)}
		</CardContainer>
	);
};
