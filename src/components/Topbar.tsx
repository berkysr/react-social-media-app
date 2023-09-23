import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PageURLs } from '../shared/enums/enums';
import { useAppDispatch, useAppSelector } from '../store';
import { setIsUserLoggedIn } from '../shared/reducers/appReducer';
import { selectCurrentUser } from '../shared/selectors/APIRequestSelector';
import { selectIsLoggedIn } from '../shared/selectors/appSelector';

export default function Topbar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const logout = () => {
    dispatch(setIsUserLoggedIn(false));

    navigate(PageURLs.SIGN_IN);
  };

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="start"
      alignItems="center"
      px={3}
      py={1}
      className="h-14 w-full bg-[#1877f2] z-[999] sticky top-0"
    >
      <Box className="flex w-[15%] lg:w-[15%]">
        <Link to="/">
          <p className="font-bold text-[#f5f5f5] text-2xl cursor-pointer">{t('logo.social')}</p>
        </Link>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        className="flex w-[40%] lg:w-[50%] rounded-[7.5rem] bg-white"
        py={1}
      >
        <Search className="!text-xl ml-2.5" />

        <input
          placeholder={t('components.topbar.search')}
          className="border-0 w-[70%] focus:outline-none"
        />
      </Box>

      <Box
        display="flex"
        alignItems="center"
        className="flex w-[45%] lg:w-[35%] text-white"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flexDirection="row"
          ml={2}
        >
          <p className="mr-2.5 text-sm font-medium cursor-pointer">{t('components.topbar.homePage')}</p>

          <p className="mr-2.5 text-sm font-medium cursor-pointer">{t('components.topbar.timeLine')}</p>

          <p
            className="mr-2.5 text-sm font-medium cursor-pointer"
            onClick={logout}
          >
            {t('components.topbar.logOut')}
          </p>
        </Box>

        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <Box className="mr-4 cursor-pointer relative">
            <Person />

            <p className="top-[-30%] right-[-30%] w-4 h-4 bg-[#ff0000] rounded-full text-white absolute flex justify-center items-center text-xs">
              1
            </p>
          </Box>

          <Box className="mr-4 cursor-pointer relative">
            <Chat />

            <p className="top-[-30%] right-[-30%] w-4 h-4 bg-[#ff0000] rounded-full text-white absolute flex justify-center items-center text-xs">
              3
            </p>
          </Box>

          <Box className="mr-4 cursor-pointer relative">
            <Notifications />

            <p className="top-[-30%] right-[-30%] w-4 h-4 bg-[#ff0000] rounded-full text-white absolute flex justify-center items-center text-xs">
              17
            </p>
          </Box>

          <Box
            display="flex"
            className="w-12 h-12 flex-none"
          >
            <Link
              className="w-full"
              to="/profile"
            >
              <img
                loading="lazy"
                src={((currentUser || {}).picture || {})?.medium || ''}
                alt=""
                className="w-full h-full rounded-full object-cover cursor-pointer"
              />
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
