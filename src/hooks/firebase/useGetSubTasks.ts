import { useCallback, useState } from 'react';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';
import SubTask from '../../types/SubTask.type';

export const useGetSubTasks = () => {
	const [subTasks, setSubTasks] = useState<SubTask[]>([]);
	const [isLoadingSubTasks, setIsLoadingSubTasks] = useState<boolean>(true);

	const onGetSubTasks = useCallback(async (task_id: string) => {
		setIsLoadingSubTasks(true);
		const subTasksCollectionsRef = collection(db, 'subtasks');
		const querySubTasks = query(subTasksCollectionsRef, where('task_id', '==', task_id));

		const unsubscribe = await onSnapshot(querySubTasks, (snapshot) => {
			const docs = snapshot.docs.map((doc) => {
				const { title, completed, creation_date, task_id } = doc.data();

				return {
					id: doc.id,
					title,
					completed,
					creation_date,
					task_id,
				};
			});

			setSubTasks(docs);
			setIsLoadingSubTasks(false);
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return { subTasks, isLoadingSubTasks, onGetSubTasks };
};
