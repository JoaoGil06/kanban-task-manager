import { DropdownItem } from '../../../../../components/Dropdown/types/DropdownItem.type';

interface SubTask {
	id: string;
	title: string;
}

export default interface EditTaskModalForm {
	title: string;
	description: string;
	subTasks: SubTask[];
	status: DropdownItem;
}
