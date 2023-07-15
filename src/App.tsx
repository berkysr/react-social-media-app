import React, { useEffect, useState } from 'react';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Login from './pages/login/Login';
import { Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.scss';
import i18n from './i18n';
import { changeLanguage } from './shared/translationTool';

function App() {
  const [availableLanguages, setAvailableLanguages] = useState<string[]>(['']);
  const [language, setLanguage] = useState<string>('en');

  useEffect(() => {
    const supportedLngs = i18n.options.supportedLngs ? i18n.options.supportedLngs : [''];
    const supportedLanguages = supportedLngs.filter((lang: string) => lang !== 'cimode');

    i18n.on('languageChanged', (lng: string) => {
      setLanguage(lng);
    });

    setAvailableLanguages(supportedLanguages);
  }, []);

  useEffect(() => {
    const langExists = availableLanguages.includes(language);
    const correctLanguage = langExists ? language : i18n.languages[1];

    changeLanguage(correctLanguage);
  }, [language, availableLanguages]);

  return (
    <>
      <GoogleOAuthProvider clientId="863241284462-dgoi5hg4g19rmlltglij8dlinbe8kkav.apps.googleusercontent.com">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/profile"
            element={<Profile />}
          />
          <Route
            path="/sign-in"
            element={<Login />}
          />
        </Routes>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
