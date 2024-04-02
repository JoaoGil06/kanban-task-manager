import { DropdownItem } from '../../../../../components/Dropdown/types/DropdownItem.type';

interface Subtask {
	id: string;
	title: string;
}

export default interface NewTaskModalForm {
	title: string;
	description: string;
	subtasks: Subtask[];
	status: DropdownItem;
}
