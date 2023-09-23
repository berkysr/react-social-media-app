import React from 'react';
import Sidebar from '../components/Sidebar';
import Rightbar from '../components/RightbarContainer';
import Feed from '../components/Feed';
import { Box } from '@mui/material';
import { useAppSelector } from '../store';
import { selectCurrentUser, selectGoogleImage } from '../shared/selectors/APIRequestSelector';

export default function Profile() {
  const currentProfileImage = useAppSelector(selectGoogleImage);
  const currentUser = useAppSelector(selectCurrentUser);

  return (
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
              src="https://images.pexels.com/photos/3074526/pexels-photo-3074526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />

            <img
              loading="lazy"
              className=" 
                object-cover left-0 right-0 rounded-full absolute m-auto
                bottom-0 cursor-pointer w-36 h-36 border-4 white"
              src={currentProfileImage || currentUser.picture?.medium}
              alt=""
            />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <h4 className="text-2xl">{`${currentUser.name?.first} ${currentUser.name?.last}`}</h4>

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
  );
}
