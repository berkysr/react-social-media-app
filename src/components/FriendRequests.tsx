import React from 'react';
import { Box } from '@mui/system';
import PersonRemoveOutlinedIcon from '@mui/icons-material/PersonRemoveOutlined';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

export default function FriendRequest() {
  return (
    <Box
      display="none"
      flexDirection="column"
      p={2}
      className="w-full absolute bg-white shadow-card w-[400px] h-[200px] rounded-tl-2xl rounded-b-2xl right-0 top-10"
    >
      <h3 className="text-black">Friend Requests</h3>
      <svg
        className="absolute text-white h-6 right-0 ml-3 bottom-full rotate-180"
        x="0px"
        y="0px"
        viewBox="0 0 255 255"
        xmlSpace="preserve"
      >
        <polygon
          className="fill-current shadow-card"
          points="0,0 127.5,127.5 255,0"
        />
      </svg>
      <Box
        display="flex"
        flexDirection="row"
        width="full"
      >
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          pt={1}
          width="full"
        >
          <div className="flex-shrink-0">
            <img
              className="w-8 h-8 rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-1.jpg"
              alt="Neil image"
            ></img>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-black truncate">Neil Sims</p>
            <p className="text-sm text-gray-500 truncate dark:text-gray-400">No mutual friend</p>
          </div>
          <Box
            display="flex"
            flexDirection="row"
            gap={2}
          >
            <PersonAddOutlinedIcon className="text-black"></PersonAddOutlinedIcon>
            <PersonRemoveOutlinedIcon className="text-black"></PersonRemoveOutlinedIcon>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
