import React, { useEffect, useState } from 'react';
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
import { selectAlerts, selectCloseFriends, selectIsLoading, selectOnlineFriends } from './shared/selectors/APIRequestSelector';
import { setLastVisitedURL } from './shared/reducers/appReducer';
import Alert from './components/Alert';
import WildCard from './pages/WildCard';
import Loading from './components/Loading';
import {
  GenerateUser,
  GenerateUserAPIResponse,
  generateRandomUsers,
  generateRandomPosts,
  setAlertMessage,
  setRandomCloseFriends,
  setRandomOnlineFriends,
  setRandomPosts,
  GeneratePostAPIResponse,
  setCurrentUser,
} from './shared/reducers/APIRequestReducer';
import { t } from 'i18next';

function App() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const alerts = useAppSelector(selectAlerts);
  const isLoading = useAppSelector(selectIsLoading);
  const closeFriends = useAppSelector(selectCloseFriends);
  const onlineFriends = useAppSelector(selectOnlineFriends);
  const location = useLocation();

  const [availableLanguages, setAvailableLanguages] = useState<string[]>(['']);
  const [language, setLanguage] = useState<string>(Languages.EN);

  const { pathname } = useLocation();

  const randomCloseFriendAPIOptions: GenerateUser = {
    filter: ['name', 'picture'],
    results: 10,
  };

  const randomOnlineFriendAPIOptions: GenerateUser = {
    filter: ['name', 'picture'],
    results: Math.floor(Math.random() * 10) + 1,
  };

  useEffect(() => {
    const isCloseFriendsEmpty = closeFriends.length === 0;
    const isOnlineFriendsEmpty = onlineFriends.length === 0;
    const randomUserOptions: GenerateUser = {
      filter: [],
    };

    if (isLoggedIn) {
      dispatch(generateRandomUsers({ filterOptions: randomUserOptions }))
        .then((response) => {
          const payload = response.payload as GenerateUserAPIResponse;

          dispatch(setCurrentUser(payload));
        })
        .catch((error: { error: string }) => {
          const errorResponse = {
            message: error.error || t('error:error.api.generic'),
            icon: 'danger',
            canBeClosed: true,
          };

          dispatch(setAlertMessage(errorResponse));
        });
      dispatch(generateRandomPosts({ page: '0', limit: '10' }))
        .then((response) => {
          const payload = response.payload as GeneratePostAPIResponse;

          dispatch(setRandomPosts(payload));
        })
        .catch((error: { error: string }) => {
          const errorResponse = {
            message: error.error || t('error:error.api.generic'),
            icon: 'danger',
            canBeClosed: true,
          };

          dispatch(setAlertMessage(errorResponse));
        });

      if (isCloseFriendsEmpty) {
        dispatch(generateRandomUsers({ filterOptions: randomCloseFriendAPIOptions }))
          .then((response) => {
            const payload = response.payload as GenerateUserAPIResponse;

            dispatch(setRandomCloseFriends(payload));
          })
          .catch((error: { error: string }) => {
            const errorResponse = {
              message: error.error || t('error:error.api.generic'),
              icon: 'danger',
              canBeClosed: true,
            };

            dispatch(setAlertMessage(errorResponse));
          });
      }

      if (isOnlineFriendsEmpty) {
        dispatch(generateRandomUsers({ filterOptions: randomOnlineFriendAPIOptions }))
          .then((response) => {
            const payload = response.payload as GenerateUserAPIResponse;

            dispatch(setRandomOnlineFriends(payload));
          })
          .catch((error: { error: string }) => {
            const errorResponse = {
              message: error.error || t('error:error.api.generic'),
              icon: 'danger',
              canBeClosed: true,
            };

            dispatch(setAlertMessage(errorResponse));
          });
      }
    }
  }, [isLoggedIn]);

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
        {isLoading ? <Loading /> : null}
        {isLoggedIn && location.pathname !== PageURLs.SIGN_IN ? <Topbar /> : null}

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
              <Alert
                key={alert.identifier}
                identifier={alert.identifier}
                icon={alert.icon}
                message={alert.message}
                canBeClosed={alert.canBeClosed}
              ></Alert>
            ))}
          </Box>
        ) : null}
      </Grid>
    </>
  );
}

export default App;
