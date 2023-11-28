import { Box } from '@mui/material';
import React from 'react';
import { isMobile } from 'react-device-detect';
import Feed from '@components/feed/Feed';
import SlidingMenu from '@components/mobile/SlidingMenu';
import Rightbar from '@components/RightbarContainer';
import Sidebar from '@components/Sidebar';

export default function Home() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="start"
        className="w-full"
      >
        <Box
          display="flex"
          className={`${isMobile ? '' : 'w-[30%] lg:w-[20%]'} relative`}
        >
          {isMobile ? <SlidingMenu /> : <Sidebar />}
        </Box>

        <Box
          display="flex"
          className={`${isMobile ? 'w-full' : 'w-[40%]'} lg:w-[60%]`}
        >
          <Feed />
        </Box>

        {!isMobile ? (
          <Box
            display="flex"
            className="w-[30%] lg:w-[20%]"
          >
            <Rightbar profile={false} />
          </Box>
        ) : null}
      </Box>
    </>
  );
}
