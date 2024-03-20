export interface setBoardAction {
	id: string;
	title: string;
	isLoading: boolean;
}

// Quando tiver mais actions será:
// setBoardAction | xxxAction | yyyAction
type BoardActions = setBoardAction;

export default BoardActions;
