import { useState, useEffect } from "react";

import * as services from "../api/services";

function usePost() {
	const [posts, setPosts] = useState([]);
	const [loadingPosts, setLoadingPosts] = useState(true);
	const [deleting, setDeleting] = useState([]);
	const [commentsOpen, setCommentsOpen] = useState([]);
	const [commentsLoading, setCommentsLoading] = useState([]);
	const [postFetchError, setPostFetchError] = useState(null);

	const fetch10Posts = async () => {
		try {
			setPostFetchError(null);
			setLoadingPosts(true);
			const newPosts = await services.getPosts(posts.length);
			const jointPosts = [...posts, ...newPosts];
			setPosts(jointPosts);
		} catch (e) {
			setPostFetchError("Error fetching posts." + suggestErrorSolution());
		} finally {
			setLoadingPosts(false);
		}
	};

	const suggestErrorSolution = () =>
		!navigator.onLine &&
		" Please check your internet connection and refresh the page";

	const availablePostComments = (postId) =>
		posts.find(({ id }) => id === postId)?.comments || [];

	const isCommentsLoading = (postId) => commentsLoading.includes(postId);

	const isPostBeingDeleted = (postId) => deleting.includes(postId);

	const isPostOpened = (postId) => commentsOpen.includes(postId);

	const filter = (array = [], excludeThisId) =>
		array.filter((id) => id !== excludeThisId);

	const onCommentsOpen = (postId) => {
		if (
			availablePostComments(postId).length === 0 &&
			!isCommentsLoading(postId) &&
			!isPostBeingDeleted(postId)
		)
			fetch10Comments(postId);
		if (!isPostOpened(postId)) setCommentsOpen([...commentsOpen, postId]);
		else setCommentsOpen(filter(commentsOpen, postId));
	};

	const fetch10Comments = async (postId) => {
		try {
			setCommentsLoading([...commentsLoading, postId]);
			const availComments = availablePostComments(postId);
			const newComments = await services.getComments(
				postId,
				availComments.length,
			);
			const jointComments = [...availComments, ...newComments];

			const updatedPost = [...posts].map((post) => {
				if (post.id === postId) return { ...post, comments: jointComments };
				return post;
			});
			setPosts(updatedPost);
		} catch (err) {
			console.log(err);
		} finally {
			setCommentsLoading(filter(commentsLoading, postId));
		}
	};

	const deletePost = async (postId) => {
		setDeleting([...deleting, postId]);
		await services.deletePost(postId);
		setPosts(posts.filter(({ id }) => id !== postId));
		setDeleting(deleting.filter((id) => id !== postId));
		setDeleting(filter(deleting, postId));
		setCommentsLoading(filter(commentsLoading, postId));
		setCommentsOpen(filter(commentsOpen, postId));
	};

	useEffect(() => {
		fetch10Posts();
	}, []);

	return {
		posts,
		loadingPosts,
		deleting,
		commentsOpen,
		postFetchError,
		fetch10Posts,
		fetch10Comments,
		onCommentsOpen,
		availablePostComments,
		deletePost,
		isCommentsLoading,
		isPostBeingDeleted,
		isPostOpened,
	};
}

export default usePost;
