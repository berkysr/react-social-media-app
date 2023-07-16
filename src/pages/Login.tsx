import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

export default function Login() {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="start"
      className="w-screen h-screen items-center justify-center bg-gradient-to-tl from-green-700 to-blue-900"
    >
      <div className="shadow-card w-[75vh] h-[75vh] flex justify-center flex-col p-20 bg-gray-200">
        <h1 className="text-2xl font-bold py-5">{t('pages.login.welcome')}</h1>
        <div className="flex align-center justify-center flex-col py-2.5 w-full">
          <span className="text-sm">{t('pages.login.email')}</span>
          <input
            type="text"
            className="border-solid rounded-xl border-grey border-2 p-2.5 mt-1.5 focus:mt-[-50] focus:border-blue-500 focus:outline-none"
            placeholder="example@domain.com"
          />
        </div>
        <div className="flex align-center justify-center flex-col py-2.5 w-full">
          <span className="text-sm">{t('pages.login.password')}</span>
          <input
            type="password"
            name="password"
            className="border-solid rounded-xl border-grey border-2 p-2.5 mt-1.5 focus:mt-[-50] focus:border-blue-500 focus:outline-none"
            placeholder="Password"
          />
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
          <GoogleLogin onSuccess={console.log} />
        </div>
      </div>
    </Box>
  );
}
