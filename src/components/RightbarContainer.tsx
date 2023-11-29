import { Box } from '@mui/material';
import React from 'react';
import { isMobile } from 'react-device-detect';
import HomePageRightBar from '@components/HomePageRightBar';
import ProfilePageRightBar from '@components/profile/ProfilePageRightBar';

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
