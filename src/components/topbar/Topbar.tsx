import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store';
import FriendRequest from './FriendRequests';
import { selectCurrentUser, selectFriendRequests } from '../../helpers/selectors/APIRequestSelector';
import TopbarPopover from './TopbarPopover';
import ProfileSettingsPopover from './ProfileSettingsPopover';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { setIsMobileNavbarActive } from '../../helpers/reducers/appReducer';
import { selectIsMobileNavbarActive } from '../../helpers/selectors/appSelector';

export default function Topbar() {
  const { t } = useTranslation();
  const currentUser = useAppSelector(selectCurrentUser);
  const friendRequestCount = useAppSelector(selectFriendRequests).length;
  const isFriendRequestExist = useAppSelector(selectFriendRequests).length > 0;
  const [isCurrentUserLoaded, setIsCurrentUserLoaded] = useState(false);
  const dispatch = useAppDispatch();
  const isMobileNavbarActive = useAppSelector(selectIsMobileNavbarActive);

  const handleMobileNavbarClick = () => {
    dispatch(setIsMobileNavbarActive(!isMobileNavbarActive));
  };

  useEffect(() => {
    if (currentUser) {
      setIsCurrentUserLoaded(true);
    }
  }, [currentUser]);

  return isCurrentUserLoaded ? (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      px={3}
      py={1}
      className="h-14 w-full bg-[#1877f2] z-[999] sticky top-0"
      position={'sticky'}
    >
      <Box
        className="w-[30%]"
        display="flex"
        flexDirection="row"
        alignItems="center"
        gap={1}
      >
        {isMobile ? (
          !isMobileNavbarActive ? (
            <MenuOutlinedIcon
              fontSize="large"
              className="text-white"
              onClick={() => handleMobileNavbarClick()}
            />
          ) : (
            <CloseTwoToneIcon
              fontSize="large"
              className="text-white"
              onClick={() => handleMobileNavbarClick()}
            />
          )
        ) : null}

        <Box className="flex">
          <Link
            aria-label={t('a11y.goToHome')}
            to="/"
          >
            <p className="font-bold text-[#f5f5f5] text-2xl cursor-pointer">{t('logo.social')}</p>
          </Link>
        </Box>
      </Box>

      {!isMobile ? (
        <Box
          display="flex"
          alignItems="center"
          className="flex w-[40%] rounded-[7.5rem] bg-white"
          py={1}
        >
          <Search className="!text-xl ml-2.5" />

          <input
            placeholder={t('components.topbar.search')}
            className="border-0 w-[70%] focus:outline-none"
          />
        </Box>
      ) : null}

      <Box
        display="flex"
        alignItems="center"
        className="flex w-[30%] text-white"
        flexDirection="row"
        justifyContent="end"
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
        >
          <Box className="mr-4 cursor-pointer relative">
            <TopbarPopover
              title={isFriendRequestExist ? t('components.topbar.popover.friendRequests') : ''}
              icon={<Person />}
              children={<FriendRequest />}
              open={false}
            />
            <p
              className={`top-[-30%] right-[-30%] w-4 h-4 bg-[#ff0000] rounded-full text-white absolute flex justify-center items-center text-xs ${
                friendRequestCount === 0 ? 'hidden' : ''
              }`}
            >
              {friendRequestCount === 0 ? '' : friendRequestCount}
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
            flexDirection="row"
            alignItems="center"
          >
            <TopbarPopover
              title={t('components.topbar.popover.userSettings')}
              icon={<SettingsIcon />}
              children={<ProfileSettingsPopover />}
              open={false}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  ) : null;
}
