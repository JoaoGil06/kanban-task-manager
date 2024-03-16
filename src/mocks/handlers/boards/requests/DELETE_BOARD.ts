import { HttpResponse, graphql } from 'msw';

const DELETE_BOARD = graphql.mutation('DeleteBoard', ({ variables }) => {
	const { board_id } = variables;
	const deletedBoard = { id: '123' };

	// Respond with a GraphQL error when trying
	// to delete a post that doesn't exist.
	// if (!deletedPost) {
	// 	return HttpResponse.json({
	// 		errors: [
	// 			{
	// 				message: `Cannot find post with ID "${postId}"`,
	// 			},
	// 		],
	// 	});
	// }

	// allPosts.delete(postId);

	return HttpResponse.json({
		data: deletedBoard,
	});
});

export default DELETE_BOARD;
