import { DropdownItem } from '../../../../../components/Dropdown/types/DropdownItem.type';

interface SubTask {
	id: string;
	title: string;
}

export default interface NewTaskModalForm {
	title: string;
	description: string;
	subTasks: SubTask[];
	status: DropdownItem;
}
