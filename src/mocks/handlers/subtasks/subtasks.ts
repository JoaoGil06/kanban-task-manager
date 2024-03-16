import { faker } from '@faker-js/faker';
import SubTask from '../../../types/SubTask.type';

const subtasks: SubTask[] = [
	{ id: faker.string.uuid(), title: faker.lorem.words(), completed: true, creation_date: faker.date.anytime(), task_id: '4f796626-377d-4bc9-b319-f340c1eefcbb' },
	{ id: faker.string.uuid(), title: faker.lorem.words(), completed: false, creation_date: faker.date.anytime(), task_id: '4f796626-377d-4bc9-b319-f340c1eefcbb' },
	{ id: faker.string.uuid(), title: faker.lorem.words(), completed: false, creation_date: faker.date.anytime(), task_id: '4f796626-377d-4bc9-b319-f340c1eefcbb' },
	{ id: faker.string.uuid(), title: faker.lorem.words(), completed: true, creation_date: faker.date.anytime(), task_id: '4f796626-377d-4bc9-b319-f340c1eefcbb' },

	{ id: faker.string.uuid(), title: faker.lorem.words(), completed: false, creation_date: faker.date.anytime(), task_id: '367c1ee1-fd8b-463c-9841-a8f500a414ca' },
	{ id: faker.string.uuid(), title: faker.lorem.words(), completed: true, creation_date: faker.date.anytime(), task_id: '367c1ee1-fd8b-463c-9841-a8f500a414ca' },
	{ id: faker.string.uuid(), title: faker.lorem.words(), completed: true, creation_date: faker.date.anytime(), task_id: '367c1ee1-fd8b-463c-9841-a8f500a414ca' },
	{ id: faker.string.uuid(), title: faker.lorem.words(), completed: false, creation_date: faker.date.anytime(), task_id: '367c1ee1-fd8b-463c-9841-a8f500a414ca' },
];

export default subtasks;
