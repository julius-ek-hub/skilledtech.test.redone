import { useContext } from "react";
import PostContext from "../contexts/PostContext";

/**
 * @returns {{
 * post: {
 * body: String,
 * id: Number,
 * userId: Number,
 * numberOfComments: Number,
 * }
 * loadingPosts: Boolean,
 * postFetchError: String | null,
 * deleting: [Number],
 * commentsOpen: [Number],
 * fetch10Posts: Function,
 * deletePost: Function,
 * fetch10Comments: Function,
 * availablePostComments: Function,
 * onCommentsOpen: Function,
 * isCommentsLoading: Function
 * isPostBeingDeleted: Function
 * isPostOpened: Function
 * }}
 */

const usePostContext = () => useContext(PostContext);

export default usePostContext;
