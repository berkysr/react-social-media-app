import React from 'react';
import FormInput from '../components/InputField';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useTranslation } from 'react-i18next';
import jwt_decode from 'jwt-decode';
import { useFormik } from 'formik';
import validationSchema from '../shared/formValidations';
import { Box } from '@mui/material';

export default function Login() {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      className="w-screen h-screen items-center justify-center bg-gradient-to-tl from-green-700 to-blue-900"
    >
      <div className="shadow-card w-[75vh] h-[75vh] flex justify-center flex-col p-20 bg-gray-200">
        <h1 className="text-2xl font-bold py-5">{t('pages.login.welcome')}</h1>

        <div className="flex align-center justify-center flex-col py-2.5 w-full">
          <FormInput
            id="email"
            type="email"
            name="email"
            value={formik.values.email}
            placeHolder="example@domain.com"
            label={t('pages.login.email')}
            helperText={formik.errors.email ? formik.errors.email : ''}
            onChange={formik.handleChange}
          ></FormInput>
        </div>

        <div className="flex align-center justify-center flex-col py-2.5 w-full">
          <div className="flex align-center justify-center flex-col py-2.5 w-full">
            <FormInput
              id="password"
              type="password"
              name="password"
              value={formik.values.password}
              placeHolder="Your password"
              label={t('pages.login.password')}
              helperText={formik.errors.password ? formik.errors.password : ''}
              onChange={formik.handleChange}
            ></FormInput>
          </div>
        </div>

        <button className="group relative h-12 w-full overflow-hidden rounded-lg bg-white text-lg shadow mt-6">
          <div className="absolute inset-0 w-3 bg-blue-500 transition-all duration-[250ms] ease-out group-hover:w-full"></div>

          <span className="relative text-black group-hover:text-white">{t('button.signIn')}</span>
        </button>

        <div className="flex flex-column items-center m-5">
          <div className="flex-[4] border-gray-400 border h-[2px]"></div>

          <div className="flex[2] mx-5">{t('pages.login.or')}</div>

          <div className="flex-[4] border-gray-400 border h-[2px]"></div>
        </div>

        <div className="flex flex-row justify-evenly">
          <GoogleLogin
            onSuccess={(credentialResponse: CredentialResponse) => {
              if (credentialResponse) {
                const jwtDecodedResponse = jwt_decode(credentialResponse.credential as string);

                console.log(jwtDecodedResponse);
              }
            }}
          />
        </div>
      </div>
    </Box>
  );
}
