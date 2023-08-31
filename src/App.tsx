import React, { useEffect, useState } from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import { useLocation, Route, Routes } from 'react-router-dom';
import i18n from './i18n';
import { changeLanguage } from './shared/translationTool';
import { Grid } from '@mui/material';
import Topbar from './components/Topbar';
import { PageNames, PageURLs, Languages, Events } from './helper/enums/enums';
import ProtectedRoute from './helper/utils/protectedRoute';
import { useAppDispatch, useAppSelector } from './store';
import { selectIsLoggedIn } from './helper/selectors/appSelector';

function App() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const [availableLanguages, setAvailableLanguages] = useState<string[]>(['']);
  const [language, setLanguage] = useState<string>(Languages.EN);

  useEffect(() => {
    const supportedLngs = i18n.options.supportedLngs ? i18n.options.supportedLngs : [''];
    const supportedLanguages = supportedLngs.filter((lang: string) => lang !== 'cimode');

    i18n.on(Events.LANGUAGE_CHANGED, (lng: string) => {
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
        {isLoggedIn ? <Topbar /> : null}

        <Routes>
          <Route
            path={PageURLs.HOME}
            element={
              <ProtectedRoute
                isProtected={isLoggedIn}
                component={<Home />}
              />
            }
          />
          <Route
            path={PageURLs.PROFILE}
            element={
              <ProtectedRoute
                isProtected={isLoggedIn}
                component={<Profile />}
              />
            }
          />
          <Route
            path={PageURLs.SIGN_IN}
            element={<Login />}
          />
        </Routes>
      </Grid>
    </>
  );
}

export default App;
