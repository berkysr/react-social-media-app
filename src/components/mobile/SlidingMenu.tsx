import { Box } from '@mui/material';
import React from 'react';
import Sidebar from '../Sidebar';
import { selectIsMobileNavbarActive } from '../../helpers/selectors/appSelector';
import { useAppSelector } from '../../store';

export default function SlidingMenu() {
  const isMobileNavbarActive = useAppSelector(selectIsMobileNavbarActive);

  if (isMobileNavbarActive) {
    return (
      <Box
        id="drawer-navigation"
        className={`fixed shadow-card top-[56] left-[250px] z-40 w-64 h-screen p-4 transition-transform -translate-x-full bg-white overflow-y-auto absolute`}
        tab-index="-1"
        aria-labelledby="drawer-navigation-label"
        position="fixed"
      >
        <Sidebar />
      </Box>
    );
  } else {
    return null;
  }
}
