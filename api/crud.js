const _fetch = async (url, props) => {
	const result = await fetch(url, props);
	return await result.json();
};

const post = (url, body) => _fetch(url, { body, method: "POST" });
const get = (url) => _fetch(url);
const put = (url, body) => _fetch(url, { body, method: "PUT" });
const _delete = (url) => _fetch(url, { method: "DELETE" });

export default {
	get,
	post,
	put,
	delete: _delete,
};
