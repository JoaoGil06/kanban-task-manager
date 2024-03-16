import { faker } from '@faker-js/faker';
import Board from '../../../types/Board.type';

const boards: Board[] = [
	{ id: 'dc542789-9cc0-4655-810c-97677cf182a8', title: faker.person.jobArea() },
	{ id: 'e082a207-2e00-4b99-b716-65645df29aae', title: faker.person.jobArea() },
	{ id: '5a63a993-5cf5-48e6-8927-126385e76995', title: faker.person.jobArea() },
	{ id: '74dbd973-cb74-4a52-aaac-489135055c75', title: faker.person.jobArea() },
];

export default boards;
