import React from 'react';
import { loadingSVG } from '../../helpers/utils/SVG';
import { Box } from '@mui/system';

export default function Loading() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      zIndex="100000"
      className="overscroll-none backdrop-blur-sm bg-gray-500 bg-opacity-30 dark:bg-gray-500 dark:bg-opacity-20 w-screen h-screen"
    >
      {loadingSVG}
    </Box>
  );
}
