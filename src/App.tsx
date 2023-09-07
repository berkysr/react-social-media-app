import React, { useEffect, useMemo, useState } from 'react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import { useLocation, Route, Routes } from 'react-router-dom';
import i18n from './i18n';
import { changeLanguage } from './shared/translationTool';
import { Grid, Box } from '@mui/material';
import Topbar from './components/Topbar';
import { PageURLs, Languages, Events } from './shared/enums/enums';
import ProtectedRoute from './helper/utils/protectedRoute';
import { useAppDispatch, useAppSelector } from './store';
import { selectIsLoggedIn } from './shared/selectors/appSelector';
import { selectAlerts } from './shared/selectors/APIRequestSelector';
import { setLastVisitedURL } from './shared/reducers/appReducer';
import AlertComponent from './components/AlertComponent';
import WildCard from './pages/WildCard';

function App() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const alerts = useAppSelector(selectAlerts);

  const [availableLanguages, setAvailableLanguages] = useState<string[]>(['']);
  const [language, setLanguage] = useState<string>(Languages.EN);

  const { pathname } = useLocation();

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

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(setLastVisitedURL(pathname || ''));
    }
  }, [pathname]);

  return (
    <>
      <Grid
        container
        direction="column"
        className="app-container"
        position="relative"
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
          <Route
            path={PageURLs.WILD_CARD}
            element={<WildCard />}
          />
        </Routes>

        {alerts ? (
          <Box
            position="absolute"
            className="right-4 top-0 z-[999] max-h-96 overflow-y-auto"
          >
            {alerts.map((alert) => (
              <AlertComponent
                key={alert.identifier}
                identifier={alert.identifier}
                icon={alert.icon}
                message={alert.message}
                canBeClosed={alert.canBeClosed}
              ></AlertComponent>
            ))}
          </Box>
        ) : null}
      </Grid>
    </>
  );
}

export default App;
