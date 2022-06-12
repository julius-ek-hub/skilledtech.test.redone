import { useState } from "react";

import { useRouter } from "next/router";

import usePostContext from "./usePostContext";

function usePostMenu() {
	const { post, deletePost } = usePostContext();

	const router = useRouter();

	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return { post, deletePost, router, open, anchorEl, handleClick, handleClose };
}

export default usePostMenu;
