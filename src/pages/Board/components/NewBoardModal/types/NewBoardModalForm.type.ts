type ColumnType = {
	id: string;
	value: string;
};

export default interface NewBoardModalForm {
	name: string;
	columns: ColumnType[];
}
