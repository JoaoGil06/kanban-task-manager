interface Action {
	label: string;
	onClick: () => void;
}

export default interface ActionListProps {
	actions: Action[];
}
