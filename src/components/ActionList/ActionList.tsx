import { useState } from 'react';
import { ActionItem, ActionsContainer, Circle, CircleContainer, Container } from './styles/ActionList.styledcomponent';
import ActionListProps from './types/ActionListProps.type';

export const ActionList = ({ actions }: ActionListProps) => {
	const [isActionsVisible, setIsActionsVisible] = useState<boolean>(false);

	const handleToggleActionsVisibility = () => {
		setIsActionsVisible(!isActionsVisible);
	};

	const handleOnClick = (onClick: () => void) => {
		onClick();
		setIsActionsVisible(false);
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
						<ActionItem key={action.label} onClick={() => handleOnClick(action.onClick)}>
							{action.label}
						</ActionItem>
					))}
				</ActionsContainer>
			)}
		</Container>
	);
};
