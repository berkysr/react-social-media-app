import React from 'react';
import { Box } from '@mui/material';
import ProfilePageRightBar from './profile/ProfilePageRightBar';
import HomePageRightBar from './HomePageRightBar';
import { isMobile } from 'react-device-detect';

interface RightbarProps {
  profile?: boolean;
}

export default function RightbarContainer({ profile }: RightbarProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      p={3}
      pb={isMobile ? 0 : 3}
      className="w-full relative"
    >
      {profile ? <ProfilePageRightBar /> : <HomePageRightBar />}
    </Box>
  );
}
