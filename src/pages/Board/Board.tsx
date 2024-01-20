import { useParams } from 'react-router-dom';

export const Board = () => {
	const { id } = useParams();

	return <h1>Board {id}</h1>;
};
