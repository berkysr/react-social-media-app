import React, { useEffect, useState } from 'react';
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Box, useTheme } from '@mui/material';
import Icon from './IconComponent';

export default function Share() {
  const { t } = useTranslation();
  const [width, setWidth] = useState(0);
  const windowWidth = window.innerWidth;
  const isOnlyBigScreen = width >= 1200;

  useEffect(() => {
    setWidth(windowWidth);
  }, [windowWidth]);

  const shareIcons = [
    {
      infoText: 'photoVideo',
      child: (
        <PermMedia
          htmlColor="tomato"
          className="mr-1 !text-lg"
        />
      ),
    },
    {
      infoText: 'tag',
      child: (
        <Label
          htmlColor="blue"
          className="mr-1 !text-lg"
        />
      ),
    },
    {
      infoText: 'location',
      child: (
        <Room
          htmlColor="green"
          className="mr-1 !text-lg"
        />
      ),
    },
    {
      infoText: 'feelings',
      child: (
        <EmojiEmotions
          htmlColor="goldenrod"
          className="mr-1 !text-lg"
        />
      ),
    },
  ];

  return (
    <Box
      p={3}
      className="w-full rounded-xl shadow-card"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="start"
      >
        <Box
          display="flex"
          className="w-14 h-14 flex-none"
        >
          <img
            loading="lazy"
            src="/assets/person/1.jpeg"
            className="w-full h-full object-cover rounded-[50%]"
            alt=""
          />
        </Box>

        <Box
          display="flex"
          ml={2}
        >
          <textarea
            placeholder={t('components.share.status')}
            className="resize-none w-full focus:outline-none"
          />
        </Box>
      </Box>

      <hr className="mb-2 mt-5" />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        ml={isOnlyBigScreen ? 3 : 0}
      >
        {shareIcons.map((icon) => (
          <Icon
            key={icon.infoText}
            infoText={isOnlyBigScreen ? t(`components.share.${icon.infoText}`) : ''}
            isOnlyBigScreen={isOnlyBigScreen}
          >
            {icon.child}
          </Icon>
        ))}

        <button className="border-0 p-2 rounded-md font-medium lg:mr-5 cursor-pointer text-white bg-green-500">
          {t('components.share.share')}
        </button>
      </Box>
    </Box>
  );
}
