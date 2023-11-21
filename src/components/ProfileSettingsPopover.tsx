import React from 'react';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { t } from 'i18next';
import { useAppDispatch, useAppSelector } from '../store';
import { selectCurrentUser, selectGoogleInfo } from '../shared/selectors/APIRequestSelector';
import { Languages, PageURLs } from '../shared/enums/enums';
import TopbarPopover from './TopbarPopover';
import SelectLanguage from '../organisms/SelectLanguage';
import { selectLanguage } from '../shared/selectors/appSelector';
import { setIsUserLoggedIn } from '../shared/reducers/appReducer';
import LogoutIcon from '@mui/icons-material/Logout';
import LanguageSelectorPopover from './LanguageSelectorPopover';

export default function ProfileSettingsPopover() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedLanguage = useAppSelector(selectLanguage) || Languages.EN;
  const currentUser = useAppSelector(selectCurrentUser);
  const currentProfileImage = useAppSelector(selectGoogleInfo).picture;
  const currentUserPicture = currentProfileImage || ((currentUser || {}).picture || {})?.medium || '';

  const logout = () => {
    dispatch(setIsUserLoggedIn(false));

    navigate(PageURLs.SIGN_IN);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={1}
      marginTop={1}
    >
      <Link
        className="w-full flex row gap-[10px] hover:bg-[#3333331c] p-2 rounded-lg"
        aria-label={t('a11y.currentUserPicture')}
        to="/profile"
      >
        <img
          loading="lazy"
          src={currentUserPicture}
          aria-label={t('a11y.currentUserPicture')}
          alt={t('a11y.currentUserPicture')}
          className="w-[25px] h-[25px] rounded-full object-cover cursor-pointer"
        />
        <figcaption>{`${currentUser.name?.first} ${currentUser.name?.last}`}</figcaption>
      </Link>

      <hr className="border-t-1 border-[rgb(236 239 241)]"></hr>

      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap={1}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          className="w-full flex row gap-[10px] hover:bg-[#3333331c] p-2 rounded-lg"
          gap={1}
        >
          <LogoutIcon />
          <Link
            to="#"
            className="text-sm font-medium cursor-pointer"
            onClick={logout}
          >
            {t('components.topbar.logOut')}
          </Link>
        </Box>
        <TopbarPopover
          open={false}
          title={''}
          icon={<SelectLanguage currentLang={selectedLanguage} />}
          children={<LanguageSelectorPopover></LanguageSelectorPopover>}
        ></TopbarPopover>
      </Box>
    </Box>
  );
}
