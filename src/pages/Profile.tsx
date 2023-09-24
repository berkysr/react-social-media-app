import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Rightbar from '../components/RightbarContainer';
import Feed from '../components/Feed';
import { Box } from '@mui/material';
import { useAppSelector } from '../store';
import { selectCurrentUser, selectGoogleInfo } from '../shared/selectors/APIRequestSelector';
import { t } from 'i18next';

export default function Profile() {
  const currentUserGoogleInfo = useAppSelector(selectGoogleInfo);
  const currentUser = useAppSelector(selectCurrentUser);

  const [isCurrentUserLoaded, setIsCurrentUserLoaded] = useState(false);
  const [currentProfileImage, setCurrentProfileImage] = useState('');
  const [currentUserName, setCurrentUserName] = useState('');

  const currentUserPicture = currentProfileImage || ((currentUser || {}).picture || {})?.medium || '';

  useEffect(() => {
    if (currentUser && !currentUserGoogleInfo.iss) {
      setCurrentUserName(`${currentUser.name?.first} ${currentUser.name?.last}`);
    }

    if (currentUserGoogleInfo.iss) {
      setCurrentProfileImage(currentUserGoogleInfo.picture);
      setCurrentUserName(currentUserGoogleInfo.name);
    }

    if (currentUser || currentUserGoogleInfo.iss) {
      setIsCurrentUserLoaded(true);
    }
  }, [currentUser, currentUserGoogleInfo]);

  return isCurrentUserLoaded ? (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="start"
    >
      <Box
        display="flex"
        className="flex-[3] relative"
      >
        <Sidebar />
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
            <img
              loading="lazy"
              className="object-cover h-full w-full"
              aria-label={t('a11y.currentUserBackgroundImage')}
              src="https://images.pexels.com/photos/3074526/pexels-photo-3074526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt={t('a11y.currentUserBackgroundImage')}
            />

            <img
              loading="lazy"
              className=" 
                object-cover left-0 right-0 rounded-full absolute m-auto
                bottom-0 cursor-pointer w-36 h-36 border-4 white"
              aria-label={t('a11y.currentUserPicture')}
              src={currentUserPicture}
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
          flexDirection="row"
        >
          <Box
            display="flex"
            flexDirection="column"
            className="flex"
          >
            <Feed />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            className="flex-none w-96"
          >
            <Rightbar profile />
          </Box>
        </Box>
      </Box>
    </Box>
  ) : null;
}
