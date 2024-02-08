import { useState } from 'react';
import { ActionItem, ActionsContainer, Circle, CircleContainer, Container } from './styles/ActionList.styledcomponent';
import ActionListProps from './styles/ActionListProps.type';

export const ActionList = ({ actions }: ActionListProps) => {
	const [isActionsVisible, setIsActionsVisible] = useState<boolean>(true);

	const handleToggleActionsVisibility = () => {
		setIsActionsVisible(!isActionsVisible);
	};

	return (
		<Container>
			<CircleContainer onClick={handleToggleActionsVisibility}>
				<Circle />
				<Circle />
				<Circle />
			</CircleContainer>
			{isActionsVisible && (
				<ActionsContainer>
					{actions.map((action) => (
						<ActionItem key={action.label} onClick={action.onClick}>
							{action.label}
						</ActionItem>
					))}
				</ActionsContainer>
			)}
		</Container>
	);
};
