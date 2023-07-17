import React from 'react';
import Sidebar from '../components/Sidebar';
import Rightbar from '../components/RightbarContainer';
import Feed from '../components/Feed';
import { users } from '../helper/api/users';
import { usersProfileDetails } from '../helper/api/profileDetails';
import { Box } from '@mui/material';

export default function Profile() {
  const currentUserData = users.filter((user) => user.currentUser)[0];
  const { userName, profilePicture, id } = currentUserData;
  const currentProfileDetails = usersProfileDetails.filter((userProfileDetail) => userProfileDetail.id === id);
  const { profileDescription } = currentProfileDetails[0];

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="start"
    >
      <Box
        display="flex"
        className="flex-[3]"
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
              src="assets/post/3.jpeg"
              alt=""
            />

            <img
              loading="lazy"
              className=" 
                object-cover left-0 right-0 rounded-full absolute m-auto
                bottom-0 cursor-pointer w-36 h-36 border-4 white"
              src={profilePicture}
              alt=""
            />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <h4 className="text-2xl">{userName}</h4>

            <span className="font-light	">{profileDescription} </span>
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
