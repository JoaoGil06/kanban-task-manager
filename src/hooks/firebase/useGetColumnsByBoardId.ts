import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useEffect, useState } from 'react';
import Column from '../../types/Column.type';

export const useGetColumns = (board_id: string | undefined) => {
	const [columns, setColumns] = useState<Column[]>([]);
	const [isLoadingColumns, setIsLoadingColumns] = useState<boolean>(true);

	useEffect(() => {
		setIsLoadingColumns(true);
		const columnsCollectionsRef = collection(db, 'columns');
		const queryColumns = query(columnsCollectionsRef, where('board_id', '==', board_id));

		const unsubscribe = onSnapshot(queryColumns, (snapshot) => {
			const docs = snapshot.docs.map((doc) => {
				const { title, board_id } = doc.data();
				return {
					id: doc.id,
					title,
					board_id,
				};
			});

			setColumns(docs);
		});

		setIsLoadingColumns(false);

		// Limpar subscrição quando o componente for desmontado
		return () => unsubscribe();
	}, [board_id]);

	return { columns, isLoadingColumns };
};
