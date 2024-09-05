import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const RegisterValidationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Minimum 3 characters')
      .max(50, 'Maximum 50 characters')
      .required('This field is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('This field is required'),
    password: Yup.string()
      .min(8, 'Minimum 8 characters')
      .required('This field is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegisterValidationSchema}
    >
      <Form className={css.formRegister}>
        <label className={css.labelRegister}>
          Username
          <Field className={css.inputRegister} type="text" name="name" />
          <ErrorMessage
            className={css.errorRegister}
            name="name"
            component="span"
          />
        </label>
        <label className={css.labelRegister}>
          Email
          <Field className={css.inputRegister} type="text" name="email" />
          <ErrorMessage
            className={css.errorRegister}
            name="email"
            component="span"
          />
        </label>
        <label className={css.labelRegister}>
          Password
          <Field
            className={css.inputRegister}
            type="password"
            name="password"
          />
          <ErrorMessage
            className={css.errorRegister}
            name="password"
            component="span"
          />
        </label>
        <button className={css.buttonRegister} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
