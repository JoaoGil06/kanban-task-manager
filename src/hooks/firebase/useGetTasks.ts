import { Unsubscribe, collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useEffect, useState } from 'react';
import Task from '../../types/Task.type';
import Column from '../../types/Column.type';

export const useGetTasks = (columns: Column[]) => {
	const [tasks, setTasks] = useState<Task[]>([]);
	const [isLoadingTasks, setIsLoadingTasks] = useState<boolean>(true);

	useEffect(() => {
		setIsLoadingTasks(true);
		const unsubscribes: Unsubscribe[] = [];
		const tasksCollectionsRef = collection(db, 'tasks');

		columns.forEach((column) => {
			const queryTasks = query(tasksCollectionsRef, where('column_id', '==', column.id));

			const unsubscribe = onSnapshot(queryTasks, (snapshot) => {
				const docs = snapshot.docs.map((doc) => {
					const { title, description, column_id, creation_date } = doc.data();
					return {
						id: doc.id,
						title,
						description,
						column_id,
						creation_date,
					};
				});

				setTasks((previousState) => {
					const updatedTasks = new Map(previousState.map((task) => [task.id, task]));
					docs.forEach((task) => updatedTasks.set(task.id, task));
					return Array.from(updatedTasks.values());
				});
			});
			unsubscribes.push(unsubscribe);
		});

		setIsLoadingTasks(false);

		// Limpar subscrição quando o componente for desmontado
		return () => {
			unsubscribes.forEach((unsubscribe) => unsubscribe());
		};
	}, [columns]);

	return { tasks, isLoadingTasks };
};
