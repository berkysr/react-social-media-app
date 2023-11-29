import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box } from '@mui/material';
import React, { MouseEventHandler } from 'react';

interface IconProps {
  children: ReactJSXElement;
  infoText: string;
  isOnlyBigScreen: boolean;
  onClick?: MouseEventHandler;
}

export default function Icon({ children, infoText, isOnlyBigScreen, onClick }: IconProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mr={isOnlyBigScreen ? 4 : 0}
      className="cursor-pointer"
      aria-label={infoText}
      onClick={onClick}
    >
      {children}

      <p className="text-sm font-medium">{infoText}</p>
    </Box>
  );
}
