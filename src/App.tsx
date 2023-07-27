import React, { SetStateAction, useEffect, useMemo, useState } from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import { Routes, Route, useLocation } from 'react-router-dom';
import './index.scss';
import i18n from './i18n';
import { changeLanguage } from './shared/translationTool';
import { Grid } from '@mui/material';
import Topbar from './components/Topbar';
import { PageNames } from './helper/enums/enums';

function App() {
  const [availableLanguages, setAvailableLanguages] = useState<string[]>(['']);
  const [language, setLanguage] = useState<string>('en');
  const [isSignInPage, setIsSignInPage] = useState<boolean>(false);

  const { pathname } = useLocation();

  useEffect(() => {
    const rawPageName = pathname.split('/').pop();

    setIsSignInPage(rawPageName === PageNames.SIGN_IN);
  }, [pathname]);

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
      <Grid
        container
        direction="column"
        className="app-container"
      >
        {!isSignInPage ? <Topbar /> : null}

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
      </Grid>
    </>
  );
}

export default App;
