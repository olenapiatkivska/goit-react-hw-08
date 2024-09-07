import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { logIn } from '../../redux/auth/operations';
import css from './LoginForm.module.css';

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const LoginValidationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('This field is required'),
    password: Yup.string()
      .min(8, 'Minimum 8 characters')
      .required('This field is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={LoginValidationSchema}
    >
      <Form className={css.formLogin}>
        <label className={css.labelLogin}>
          Email
          <Field className={css.inputLogin} type="text" name="email" />
          <ErrorMessage
            className={css.errorLogin}
            name="email"
            component="span"
          />
        </label>
        <label className={css.labelLogin}>
          Password
          <Field className={css.inputLogin} type="password" name="password" />
          <ErrorMessage
            className={css.errorLogin}
            name="password"
            component="span"
          />
        </label>
        <button className={css.buttonLogin} type="submit">
          log In
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
