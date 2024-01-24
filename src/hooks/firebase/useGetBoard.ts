import { useEffect, useState } from 'react';
import Board from '../../types/Board.type';
import { collection, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../config/firebase';

export const useGetBoard = (boardId: string) => {
	const [board, setBoard] = useState<Board>({ id: '', title: '' });
	const [isLoadingBoard, setIsLoadingBoard] = useState<boolean>(true);

	useEffect(() => {
		setIsLoadingBoard(true);
		const boardsCollectionsRef = collection(db, 'boards');
		const queryBoards = query(boardsCollectionsRef);

		const unsubscribe = onSnapshot(queryBoards, (snapshot) => {
			snapshot.docs.forEach((doc) => {
				if (doc.id === boardId) {
					const { title } = doc.data();
					setBoard({ id: doc.id, title });
				}
			});
		});

		setIsLoadingBoard(false);

		// Limpar subscrição quando o componente for desmontado
		return () => unsubscribe();
	}, [boardId]);

	return { board, isLoadingBoard };
};
