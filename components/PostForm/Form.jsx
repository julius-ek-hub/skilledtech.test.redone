import { Formik } from "formik";

import usersFormSchema from "./schema";

const Form = ({ initialValues, onSubmit, children }) => (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={usersFormSchema}
    >
        {() => children}
    </Formik>
);

export default Form;