import React from 'react';
import Sidebar from '../components/Sidebar';
import Rightbar from '../components/Rightbar';
import Feed from '../components/Feed';
import { Box } from '@mui/material';

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
          className="flex-[3]"
        >
          <Sidebar />
        </Box>

        <Box
          display="flex"
          className="flex-[6]"
        >
          <Feed />
        </Box>

        <Box
          display="flex"
          className="flex-[3]"
        >
          <Rightbar profile={false} />
        </Box>
      </Box>
    </>
  );
}
