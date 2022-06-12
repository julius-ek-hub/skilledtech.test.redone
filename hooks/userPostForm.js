import { useState, useEffect } from "react";

import { useRouter } from "next/router";

import * as services from "../api/services";

const _initialValues = {
	title: "",
	body: "",
};

function userPostForm() {
	const [initialValues, setInitialValues] = useState(_initialValues);
	const [loading, setLoading] = useState(true);
	const [saving, setSaving] = useState(false);
	const [error, setError] = useState(null);

	const router = useRouter();
	const id = router.query.id;

	const isNewPost = Object.values(initialValues).every((value) => !value);

	const suggestErrorSolution = () =>
		!navigator.onLine &&
		" Please check your internet connection and refresh the page";

	const doSetInitialValues = async () => {
		if (id === undefined) return;
		if (id === "new") return setLoading(false);
		if (isNaN(id)) return router.replace("/posts");

		try {
			setError(null);
			const post = await services.getPost(id);
			setInitialValues(post);
		} catch (e) {
			setError("Error fetching post for update." + suggestErrorSolution());
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		doSetInitialValues();
	}, [id]);

	const handleSubmit = async (values) => {
		try {
			setError(null);
			setSaving(true);
			if (isNewPost) await services.createPost(values);
			else await services.updatePost(id, values);
			router.push("/posts");
		} catch (error) {
			setError("Failed to save post." + suggestErrorSolution());
		} finally {
			setSaving(false);
		}
	};

	return {
		loading,
		saving,
		error,
		initialValues,
		isNewPost,
		handleSubmit,
	};
}

export default userPostForm;
