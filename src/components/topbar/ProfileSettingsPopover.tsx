import LogoutIcon from '@mui/icons-material/Logout';
import { Box } from '@mui/material';
import { t } from 'i18next';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@base/store';
import ProfileLink from '@components/shared/ProfileLink';
import LanguageSelectorPopover from '@components/topbar/LanguageSelectorPopover';
import SelectLanguage from '@components/topbar/SelectLanguage';
import TopbarPopover from '@components/topbar/TopbarPopover';
import { Languages, PageURLs } from '@helpers/enums/enums';
import { setIsUserLoggedIn } from '@helpers/reducers/appReducer';
import { selectCurrentUser, selectGoogleInfo } from '@helpers/selectors/APIRequestSelector';
import { selectLanguage } from '@helpers/selectors/appSelector';
import { RandomUser } from '@helpers/types/api';

export default function ProfileSettingsPopover() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectedLanguage = useAppSelector(selectLanguage) || Languages.EN;
  const currentUser = useAppSelector(selectCurrentUser);
  const googleInfo = useAppSelector(selectGoogleInfo);
  let updatedUserInfo = currentUser;

  if (googleInfo.given_name && googleInfo.picture) {
    const currentProfileImage = googleInfo.picture;
    const currentProfileName = { first: googleInfo.given_name, last: googleInfo.family_name };
    const currentUserPicture = currentProfileImage || ((currentUser || {}).picture || {})?.thumbnail || '';
    updatedUserInfo = { ...currentUser, name: currentProfileName, picture: { thumbnail: currentUserPicture } } as RandomUser;
  }

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
      <ProfileLink
        user={updatedUserInfo}
        isOnline={false}
        isLoggedInUser={true}
      />

      <TopbarPopover
        open={false}
        title={''}
        icon={<SelectLanguage currentLang={selectedLanguage} />}
        children={<LanguageSelectorPopover />}
      />

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
      </Box>
    </Box>
  );
}
