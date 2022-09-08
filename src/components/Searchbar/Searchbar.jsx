import { Formik, Form, Field } from 'formik';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    const query = values.query;
    resetForm();
    onSubmit(query);
  };
  return (
    <header>
      <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
        <Form>
          <Field id="search" type="text" name="query" />
          <button type="submit">submit</button>
        </Form>
      </Formik>
    </header>
  );
};
