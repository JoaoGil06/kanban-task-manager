import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCYVcoPYj1FGJnVDYL9zjSqmwhD0sKfbNI',
	authDomain: 'kanban-task-manager-b298e.firebaseapp.com',
	projectId: 'kanban-task-manager-b298e',
	storageBucket: 'kanban-task-manager-b298e.appspot.com',
	messagingSenderId: '843689932416',
	appId: '1:843689932416:web:07c4eb0dd176a244d61865',
	measurementId: 'G-Z00REFXLR4',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
