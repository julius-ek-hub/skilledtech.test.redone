import * as Yup from "yup";

const usersFormSchema = Yup.object().shape({
	title: Yup.string().min(2).max(200).required().label("Title"),
	body: Yup.string().min(2).required().label("Body"),
});

export default usersFormSchema;
