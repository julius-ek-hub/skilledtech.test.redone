export const save = (contacts) => {
	globalThis.localStorage.setItem("contacts", JSON.stringify(contacts));
	return contacts;
};

export const getAll = () => {
	const result = globalThis.localStorage.getItem("contacts");
	if (!result) return [];

	return JSON.parse(result);
};

export const add = (newSet) => {
	const all = getAll();
	all.push(newSet);
	return save(all);
};

export const deleteContact = (idValue) => {
	const all = getAll();
	const allNow = all.filter((contact) => contact.id.value != idValue);
	return save(allNow);
};
