import React from 'react';
import OnlineFriend from './OnlineFriend';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { selectOnlineFriends } from '../shared/selectors/APIRequestSelector';
import { useAppSelector } from '../store';

export default function HomePageRightBar() {
  const { t } = useTranslation();
  const onlineFriends = useAppSelector(selectOnlineFriends);

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
      className="h-fit sticky top-[80px]"
    >
      <Box display="flex">
        <Box
          display="flex"
          className="w-12 h-12 flex-none"
          mr={2}
        >
          <img
            loading="lazy"
            className="flex-none w-full "
            src="/assets/gift.png"
            alt=""
          />
        </Box>

        <p className="flex-1 font-light text-base text-sm">
          <b>Anthony Davis</b> {t('components.rightbar.and')} <b>3 {t('components.rightbar.others')}</b>
          {` ${t('components.rightbar.birthdayMessage')}`}
        </p>
      </Box>

      <img
        loading="lazy"
        className="w-full rounded-xl"
        src="/assets/ad.png"
        alt=""
      />

      <Box
        display="flex"
        flexDirection="column"
        className="w-full"
      >
        <h4 className="text-lg font-medium mb-5">{t('components.rightbar.onlineFriends')}</h4>

        <ul>
          {onlineFriends
            ? onlineFriends.map((friend) => (
                <OnlineFriend
                  key={`${friend.picture?.large} ${Math.random().toString()}`}
                  user={friend}
                />
              ))
            : null}
        </ul>
      </Box>
    </Box>
  );
}
