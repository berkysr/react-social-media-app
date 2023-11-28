import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { Box } from '@mui/material';
import React from 'react';

interface IconProps {
  children: ReactJSXElement;
  infoText: string;
  isOnlyBigScreen: boolean;
}

export default function Icon({ children, infoText, isOnlyBigScreen }: IconProps) {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mr={isOnlyBigScreen ? 4 : 0}
      className="cursor-pointer"
      aria-label={infoText}
    >
      {children}

      <p className="text-sm font-medium">{infoText}</p>
    </Box>
  );
}
