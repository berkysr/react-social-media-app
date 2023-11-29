import { Box } from '@mui/system';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@base/store';
import { Languages } from '@helpers/enums/enums';
import { setSelectedLanguage } from '@helpers/reducers/appReducer';
import { selectLanguage } from '@helpers/selectors/appSelector';
import { flagEN, flagTR } from '@helpers/utils/SVG';

export default function LanguageSelectorPopover() {
  const dispatch = useAppDispatch();
  const selectedLanguage = useAppSelector(selectLanguage) || Languages.EN;

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={0.5}
    >
      <button
        className={`cursor-pointer hover:bg-[#3333331c] p-2 rounded-lg ${selectedLanguage === Languages.TR ? 'bg-[#0000000D]' : ''}`}
        onClick={() => dispatch(setSelectedLanguage(Languages.TR))}
      >
        <Box
          display="flex"
          flexDirection="row"
          gap={1}
        >
          {flagTR} Turkish
        </Box>
      </button>
      <button
        className={`cursor-pointer hover:bg-[#3333331c] p-2 rounded-lg ${selectedLanguage === Languages.EN ? 'bg-[#0000000D]' : ''}`}
        onClick={() => dispatch(setSelectedLanguage(Languages.EN))}
      >
        <Box
          display="flex"
          flexDirection="row"
          gap={1}
        >
          {flagEN} English
        </Box>
      </button>
    </Box>
  );
}
