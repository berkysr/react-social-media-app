import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('This field is required'),
  lastName: Yup.string().notRequired(),
  email: Yup.string().email('Please enter a valid email').required('This field is required'),
  password: Yup.string().required('This field is required').min(8, 'Pasword must be 8 or more characters'),
});

export default validationSchema;
