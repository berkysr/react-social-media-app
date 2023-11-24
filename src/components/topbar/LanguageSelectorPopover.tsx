import { Box } from '@mui/system';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { setSelectedLanguage } from '../../helpers/reducers/appReducer';
import { Languages } from '../../helpers/enums/enums';
import { flagEN, flagTR } from '../../helpers/utils/SVG';
import { selectLanguage } from '../../helpers/selectors/appSelector';

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
