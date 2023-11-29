import { Grid, Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, Route, Routes } from 'react-router-dom';
import i18n from '@base/i18n';
import { useAppDispatch, useAppSelector } from '@base/store';
import Alert from '@components/shared/Alert';
import Loading from '@components/shared/Loading';
import Topbar from '@components/topbar/Topbar';
import { PageURLs } from '@helpers/enums/enums';
import {
  generateRandomUsers,
  generateRandomPosts,
  setAlertMessage,
  setRandomCloseFriends,
  setRandomOnlineFriends,
  setRandomPosts,
  setCurrentUser,
  setFriendRequests,
} from '@helpers/reducers/APIRequestReducer';
import { setLastVisitedURL } from '@helpers/reducers/appReducer';
import { selectAlerts, selectCloseFriends, selectIsLoading, selectOnlineFriends } from '@helpers/selectors/APIRequestSelector';
import { selectIsLoggedIn, selectLanguage } from '@helpers/selectors/appSelector';
import { changeLanguage } from '@helpers/translationTool';
import { GeneratePostAPIResponse, GenerateUser, GenerateUserAPIResponse } from '@helpers/types/api';
import { generateErrorMessage } from '@helpers/utils/commonFunctions';
import ProtectedRoute from '@helpers/utils/protectedRoute';
import Home from '@pages/Home';
import Login from '@pages/Login';
import Profile from '@pages/Profile';
import WildCard from '@pages/WildCard';

function App() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const alerts = useAppSelector(selectAlerts);
  const isLoading = useAppSelector(selectIsLoading);
  const closeFriends = useAppSelector(selectCloseFriends);
  const onlineFriends = useAppSelector(selectOnlineFriends);
  const selectedLanguage = useAppSelector(selectLanguage);
  const location = useLocation();
  const [availableLanguages, setAvailableLanguages] = useState<string[]>(['']);
  const { pathname } = useLocation();
  const randomUserOptions: GenerateUser = {
    filter: [],
  };

  const randomFriendRequestAPIOptions: GenerateUser = {
    filter: ['name', 'picture'],
    results: Math.floor(Math.random() * 9),
  };

  const randomOnlineFriendAPIOptions: GenerateUser = {
    filter: ['name', 'picture'],
    results: Math.floor(Math.random() * 10) + 1,
  };

  const closeFriendOptions: GenerateUser = {
    filter: ['name', 'picture'],
    results: 10,
  };

  useEffect(() => {
    const isCloseFriendsEmpty = closeFriends.length === 0;
    const isOnlineFriendsEmpty = onlineFriends.length === 0;

    if (isLoggedIn) {
      dispatch(generateRandomUsers({ filterOptions: randomUserOptions }))
        .then((response) => {
          const payload = response.payload as GenerateUserAPIResponse;

          dispatch(setCurrentUser(payload));
        })
        .catch((error: { error: string }) => {
          dispatch(setAlertMessage(generateErrorMessage(error.error)));
        });

      dispatch(generateRandomUsers({ filterOptions: randomFriendRequestAPIOptions }))
        .then((response) => {
          const payload = response.payload as GenerateUserAPIResponse;

          dispatch(setFriendRequests(payload));
        })
        .catch((error: { error: string }) => {
          dispatch(setAlertMessage(generateErrorMessage(error.error)));
        });

      dispatch(generateRandomPosts({ page: '0', limit: '10' }))
        .then((response) => {
          const payload = response.payload as GeneratePostAPIResponse;
          const { data } = payload;

          dispatch(setRandomPosts(data));
        })
        .catch((error: { error: string }) => {
          dispatch(setAlertMessage(generateErrorMessage(error.error)));
        });

      if (isCloseFriendsEmpty) {
        dispatch(generateRandomUsers({ filterOptions: closeFriendOptions }))
          .then((response) => {
            const payload = response.payload as GenerateUserAPIResponse;

            dispatch(setRandomCloseFriends(payload));
          })
          .catch((error: { error: string }) => {
            dispatch(setAlertMessage(generateErrorMessage(error.error)));
          });
      }

      if (isOnlineFriendsEmpty) {
        dispatch(generateRandomUsers({ filterOptions: randomOnlineFriendAPIOptions }))
          .then((response) => {
            const payload = response.payload as GenerateUserAPIResponse;

            dispatch(setRandomOnlineFriends(payload));
          })
          .catch((error: { error: string }) => {
            dispatch(setAlertMessage(generateErrorMessage(error.error)));
          });
      }
    }
  }, [isLoggedIn]);

  useEffect(() => {
    const supportedLngs = i18n.options.supportedLngs ? i18n.options.supportedLngs : [''];
    const supportedLanguages = supportedLngs.filter((lang: string) => lang !== 'cimode');

    setAvailableLanguages(supportedLanguages);
  }, [dispatch]);

  useEffect(() => {
    const langExists = availableLanguages.includes(selectedLanguage);
    const correctLanguage = langExists ? selectedLanguage : i18n.languages[1];

    changeLanguage(correctLanguage);
  }, [selectedLanguage, availableLanguages]);

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
            path={`${PageURLs.PROFILE}/:userId`}
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
