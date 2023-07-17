import React from 'react';
import { Box } from '@mui/material';
import ProfilePageRightBar from './ProfilePageRightBar';
import HomePageRightBar from './HomePageRightBar';

interface RightbarProps {
  profile?: boolean;
}

export default function RightbarContainer({ profile }: RightbarProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      p={3}
      className="w-full sticky overflow-y-scroll"
    >
      {profile ? <ProfilePageRightBar /> : <HomePageRightBar />}
    </Box>
  );
}
