import { Box } from '@mui/material';
import { t } from 'i18next';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useAppSelector } from '@base/store';
import Feed from '@components/feed/Feed';
import SlidingMenu from '@components/mobile/SlidingMenu';
import Rightbar from '@components/RightbarContainer';
import Sidebar from '@components/Sidebar';
import { selectCurrentUser, selectGoogleInfo, selectSelectedUser } from '@helpers/selectors/APIRequestSelector';
import { loadingSVG } from '@helpers/utils/SVG';

export default function Profile() {
  const currentUserGoogleInfo = useAppSelector(selectGoogleInfo);
  const currentUser = useAppSelector(selectCurrentUser);
  const selectedUser = useAppSelector(selectSelectedUser);
  const [isCurrentUserLoaded, setIsCurrentUserLoaded] = useState(false);
  const [currentProfileImage, setCurrentProfileImage] = useState('');
  const [currentUserName, setCurrentUserName] = useState('');
  const [backgroundPicture, setBackgroundPicture] = useState('');

  const currentUserPicture = currentProfileImage || ((currentUser || {}).picture || {})?.medium || '';

  useEffect(() => {
    if (currentUser && !currentUserGoogleInfo.iss) {
      setCurrentUserName(`${currentUser.name?.first} ${currentUser.name?.last}`);
      setCurrentProfileImage(((currentUser || {}).picture || {})?.medium || '');
    }

    if (currentUserGoogleInfo.iss) {
      setCurrentProfileImage(currentUserGoogleInfo.picture);
      setCurrentUserName(currentUserGoogleInfo.name);
    }

    if (currentUser || currentUserGoogleInfo.iss) {
      setIsCurrentUserLoaded(true);
    }

    if (selectedUser.name && selectedUser.picture) {
      setCurrentProfileImage(selectedUser.picture.medium);
      setCurrentUserName(`${selectedUser.name?.first} ${selectedUser.name?.last}`);
    }

    setBackgroundPicture(`https://source.unsplash.com/random/1366x768?v=${Math.random().toFixed(4)}`);
  }, [currentUser, currentUserGoogleInfo, selectedUser]);

  return isCurrentUserLoaded ? (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="start"
    >
      <Box
        display="flex"
        className={`${isMobile ? '' : 'flex-[3]'} relative`}
      >
        {isMobile ? <SlidingMenu /> : <Sidebar />}
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        className="flex-[9]"
      >
        <Box
          display="flex"
          flexDirection="column"
        >
          <Box
            display="flex"
            flexDirection="column"
            className="relative h-96 w-full overflow-hidden"
            pb={9}
          >
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              position="absolute"
              className="h-96 w-full"
              zIndex="-1"
            >
              {loadingSVG}
            </Box>

            <img
              loading="lazy"
              className="object-cover h-full w-full"
              aria-label={t('a11y.currentUserBackgroundImage')}
              src={backgroundPicture}
              width="100%"
              height="100%"
              alt={t('a11y.currentUserBackgroundImage')}
            />

            <img
              loading="lazy"
              className=" 
                object-cover left-0 right-0 rounded-full absolute m-auto
                bottom-0 cursor-pointer w-36 h-36 border-4 white"
              aria-label={t('a11y.currentUserPicture')}
              src={currentUserPicture}
              referrerPolicy="no-referrer"
              width="100%"
              height="100%"
              alt={t('a11y.currentUserPicture')}
            />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <h4 className="text-2xl">{currentUserName}</h4>

            <span className="font-light	">{currentUser.location?.city} </span>
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection={`${isMobile ? 'column' : 'row'}`}
        >
          <Box
            display="flex"
            flexDirection="column"
            className={`${isMobile ? 'order-1' : ''}`}
          >
            <Feed />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            className={`flex-none w-96 ${isMobile ? 'order-0 w-full' : ''}`}
          >
            <Rightbar profile />
          </Box>
        </Box>
      </Box>
    </Box>
  ) : null;
}
