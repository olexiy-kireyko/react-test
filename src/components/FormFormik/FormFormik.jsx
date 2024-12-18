import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

const FormFormik = () => {
  const initialValues = {
    username: '',
    email: '',
    userLastName: '',
    login: '',
    selectLevel: 'good',
  };
  const handleSubmit = (values, actions) => {
    console.log('values', values);
    console.log('actions', actions);
    actions.resetForm();
  };
  const userNameId = useId();
  const emailId = useId();
  const fieldsetId = useId();
  const FeedBackSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'too short')
      .max(20, 'too long')
      .required('Required'),
    email: Yup.string().email('bad email').required('Required'),
    userLastName: Yup.string()
      .min(2, 'too short')
      .max(20, 'too long')
      .required('Required'),
    login: Yup.string()
      .min(2, 'too short')
      .max(20, 'too long')
      .required('Required'),
    selectLevel: Yup.string()
      .oneOf(['good', 'normal', 'bad'])
      .required('Required'),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedBackSchema}
    >
      <Form>
        <label htmlFor={userNameId}>enter username</label>
        <Field
          as="textarea"
          cols="60"
          rows="5"
          name="username"
          id={userNameId}
        />
        <ErrorMessage name="username" component="span" />
        <label htmlFor={emailId}>enter email</label>
        <Field type="email" name="email" id={emailId} />
        <ErrorMessage name="email" component="span" />
        <legend htmlFor={fieldsetId}>
          Enter last name & login in fieldset
        </legend>
        <fieldset id={fieldsetId}>
          <Field type="text" name="userLastName" />
          <ErrorMessage name="userLastName" component="span" />
          <Field type="text" name="login" />
          <ErrorMessage name="login" component="span" />
        </fieldset>
        <label>
          {' '}
          Select level:
          <Field as="select" name="selectLevel">
            <option value="good">good</option>
            <option value="normal">normal</option>
            <option value="bad">bad</option>
          </Field>
          <ErrorMessage name="selectLevel" component="span" />
        </label>
        <button type="submit">submit</button>
      </Form>
    </Formik>
  );
};
export default FormFormik;
