import { faker } from '@faker-js/faker';
import Task from '../../../types/Task.type';

const tasks: Task[] = [
	{
		id: '4f796626-377d-4bc9-b319-f340c1eefcbb',
		title: faker.lorem.words(),
		description: faker.lorem.paragraph(),
		creation_date: faker.date.anytime(),
		column_id: '4e9aae2b-09d8-44eb-95ff-a35f924d7ffa',
		subtasks: [
			{ id: faker.string.uuid(), title: faker.lorem.words(), completed: true, creation_date: faker.date.anytime(), task_id: '4f796626-377d-4bc9-b319-f340c1eefcbb' },
			{ id: faker.string.uuid(), title: faker.lorem.words(), completed: false, creation_date: faker.date.anytime(), task_id: '4f796626-377d-4bc9-b319-f340c1eefcbb' },
			{ id: faker.string.uuid(), title: faker.lorem.words(), completed: false, creation_date: faker.date.anytime(), task_id: '4f796626-377d-4bc9-b319-f340c1eefcbb' },
			{ id: faker.string.uuid(), title: faker.lorem.words(), completed: true, creation_date: faker.date.anytime(), task_id: '4f796626-377d-4bc9-b319-f340c1eefcbb' },
		],
	},
	{
		id: '367c1ee1-fd8b-463c-9841-a8f500a414ca',
		title: faker.lorem.words(),
		description: faker.lorem.paragraph(),
		creation_date: faker.date.anytime(),
		column_id: '4e9aae2b-09d8-44eb-95ff-a35f924d7ffa',
		subtasks: [
			{ id: faker.string.uuid(), title: faker.lorem.words(), completed: false, creation_date: faker.date.anytime(), task_id: '367c1ee1-fd8b-463c-9841-a8f500a414ca' },
			{ id: faker.string.uuid(), title: faker.lorem.words(), completed: true, creation_date: faker.date.anytime(), task_id: '367c1ee1-fd8b-463c-9841-a8f500a414ca' },
			{ id: faker.string.uuid(), title: faker.lorem.words(), completed: true, creation_date: faker.date.anytime(), task_id: '367c1ee1-fd8b-463c-9841-a8f500a414ca' },
			{ id: faker.string.uuid(), title: faker.lorem.words(), completed: false, creation_date: faker.date.anytime(), task_id: '367c1ee1-fd8b-463c-9841-a8f500a414ca' },
		],
	},
	{
		id: '6a8e10a6-9924-45cc-b96f-70e2e88f0b22',
		title: faker.lorem.words(),
		description: faker.lorem.paragraph(),
		creation_date: faker.date.anytime(),
		column_id: '4e9aae2b-09d8-44eb-95ff-a35f924d7ffa',
		subtasks: [],
	},
	{
		id: '140c59a8-289d-4219-8889-41f6f5a633db',
		title: faker.lorem.words(),
		description: faker.lorem.paragraph(),
		creation_date: faker.date.anytime(),
		column_id: '4e9aae2b-09d8-44eb-95ff-a35f924d7ffa',
		subtasks: [],
	},

	{
		id: 'ec3368b2-dec5-4c56-b9be-9b469df4f68e',
		title: faker.lorem.words(),
		description: faker.lorem.paragraph(),
		creation_date: faker.date.anytime(),
		column_id: '38af6b69-a847-42ef-9972-309bacd6a72f',
		subtasks: [],
	},
	{
		id: '5ff28715-a248-4938-a588-fbf46f477f13',
		title: faker.lorem.words(),
		description: faker.lorem.paragraph(),
		creation_date: faker.date.anytime(),
		column_id: 'ea336cf7-44fb-4ba3-8649-7f9b1485c286',
		subtasks: [],
	},
	{
		id: '11d4fd0c-7f8c-4e5d-9562-3c2d9df0705a',
		title: faker.lorem.words(),
		description: faker.lorem.paragraph(),
		creation_date: faker.date.anytime(),
		column_id: 'ea336cf7-44fb-4ba3-8649-7f9b1485c286',
		subtasks: [],
	},
	{
		id: '9a2660b9-26b8-4f58-9731-b608e402e50b',
		title: faker.lorem.words(),
		description: faker.lorem.paragraph(),
		creation_date: faker.date.anytime(),
		column_id: 'c6c4dde0-fb26-428d-94e7-1cb0bed980a3',
		subtasks: [],
	},
];

export default tasks;
