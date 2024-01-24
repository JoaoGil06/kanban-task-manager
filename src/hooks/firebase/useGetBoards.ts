import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useEffect, useState } from 'react';
import Board from '../../types/Board.type';

export const useGetBoards = () => {
	const [boards, setBoards] = useState<Board[]>([]);
	const [isLoadingBoards, setIsLoadingBoards] = useState<boolean>(true);

	useEffect(() => {
		setIsLoadingBoards(true);
		const boardsCollectionsRef = collection(db, 'boards');
		const queryBoards = query(boardsCollectionsRef);

		const unsubscribe = onSnapshot(queryBoards, (snapshot) => {
			const docs = snapshot.docs.map((doc) => {
				const { title } = doc.data();
				return {
					id: doc.id,
					title,
				};
			});

			setBoards(docs);
		});

		setIsLoadingBoards(false);

		// Limpar subscrição quando o componente for desmontado
		return () => unsubscribe();
	}, []);

	return { boards, isLoadingBoards };
};
