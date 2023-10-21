import { Box } from '@mui/material';
import React from 'react';
import { flagEN, flagTR } from '../helper/utils/SVG';
import { Languages } from '../shared/enums/enums';

interface SelectLanguageProps {
  currentLang: Languages.EN | Languages.TR;
}

export default function SelectLanguage({ currentLang }: SelectLanguageProps) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="end"
      className="text-l font-bold w-full flex row gap-[10px] hover:bg-[#3333331c] p-2 rounded-lg cursor-pointer"
      gap={0.5}
    >
      {currentLang.toUpperCase()}

      {currentLang === Languages.EN ? flagEN : flagTR}
    </Box>
  );
}
