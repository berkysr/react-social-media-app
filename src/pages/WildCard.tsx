import React from 'react';
import { wildCardSVG } from '../helper/utils/SVG';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { PageURLs, ErrorCode } from '../shared/enums/enums';
import { useTranslation } from 'react-i18next';

export default function WildCard() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(PageURLs.HOME);
  };

  return (
    <>
      <Box
        display="flex"
        className="w-full h-screen flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0"
      >
        <Box className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
          <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-gray-300">{ErrorCode.WILD_CARD}</p>

          <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">{t('pages.wildCard.header')}</p>

          <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">{t('pages.wildCard.message')}</p>

          <button
            onClick={handleClick}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded transition duration-150"
            title={t('pages.wildCard.buttonMessage')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>

            <p>{t('pages.wildCard.buttonMessage')}</p>
          </button>
        </Box>

        <Box className="w-1/2 lg:h-full flex lg:items-end justify-center p-4">{wildCardSVG}</Box>
      </Box>
    </>
  );
}
