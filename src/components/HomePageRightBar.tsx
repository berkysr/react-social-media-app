import React from 'react';
import OnlineFriend from './OnlineFriend';
import { users } from '../helper/api/users';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

export default function HomePageRightBar() {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <Box
        display="flex"
        flexDirection="row"
        className="w-full"
      >
        <img
          loading="lazy"
          className="flex-none w-12 mr-3"
          src="/assets/gift.png"
          alt=""
        />

        <span className="flex-1 font-light text-base">
          <b>Anthony Davis</b> {t('components.rightbar.and')} <b>3 {t('components.rightbar.others')}</b>
          {` ${t('components.rightbar.birthdayMessage')}`}
        </span>
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
          {users.map((user) => {
            return user.online ? (
              <OnlineFriend
                key={user.id}
                user={user}
              />
            ) : null;
          })}
        </ul>
      </Box>
    </Box>
  );
}
