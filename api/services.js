import crud from "./crud";

const COMMENTS_BASE_URL = "https://jsonplaceholder.typicode.com/comments/";
const POSTS_BASE_URL = "https://jsonplaceholder.typicode.com/posts/";

export const getPost = (id) => crud.get(POSTS_BASE_URL + id);

export const deletePost = (id) => crud.delete(POSTS_BASE_URL + id);

export const updatePost = (id, body) => crud.put(POSTS_BASE_URL + id, body);

export const createPost = (body) => crud.post(POSTS_BASE_URL, body);

export const getPosts = async (startFrom = 0) => {
	const posts = await crud.get(
		POSTS_BASE_URL + `?_start=${startFrom}&_limit=10`,
	);
	const withNumberOfComments = await Promise.all(
		posts.map(async (post) => {
			const comments = await getComments(post.id);
			return { ...post, numberOfComments: comments.length };
		}),
	);
	return withNumberOfComments;
};

export const getComments = (postId, startFrom = 0, limit = 10) =>
	crud.get(
		COMMENTS_BASE_URL +
			`?postId=${postId}&_start=${startFrom}` +
			(limit ? `&_limit=${limit}` : ""),
	);
