import { CardContainer, CardSubtitle, CardTitle } from './styles/Card.styledcomponent';
import CardProps from './types/CardProps.type';

export const Card = ({ task }: CardProps) => {
	return (
		<CardContainer>
			<CardTitle>{task.title}</CardTitle>
			<CardSubtitle>0 of 3 subtasks</CardSubtitle>
		</CardContainer>
	);
};
