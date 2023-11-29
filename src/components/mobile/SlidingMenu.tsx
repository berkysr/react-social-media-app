import { Box } from '@mui/material';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@base/store';
import ProfileLink from '@components/shared/ProfileLink';
import Sidebar from '@components/Sidebar';
import { selectOnlineFriends } from '@helpers/selectors/APIRequestSelector';
import { selectIsMobileNavbarActive } from '@helpers/selectors/appSelector';

export default function SlidingMenu() {
  const { t } = useTranslation();
  const isMobileNavbarActive = useAppSelector(selectIsMobileNavbarActive);
  const onlineFriends = useAppSelector(selectOnlineFriends);

  if (isMobileNavbarActive) {
    return (
      <Box
        id="drawer-navigation"
        className={`shadow-card top-[56] left-[250px] z-40 w-64 h-screen transition-transform -translate-x-full bg-white overflow-y-auto absolute`}
        tab-index="-1"
        aria-labelledby="drawer-navigation-label"
        position="fixed"
      >
        <Sidebar />

        <Box
          display="flex"
          flexDirection="column"
          className="w-full"
          p={3}
          pt={0}
          mb={3}
        >
          <h4 className="text-lg font-medium mb-5">{t('components.rightbar.onlineFriends')}</h4>

          <ul>
            {onlineFriends
              ? onlineFriends.map((friend) => (
                  <ProfileLink
                    key={`${friend.picture?.large} ${Math.random().toString()}`}
                    user={friend}
                    isOnline={true}
                  />
                ))
              : null}
          </ul>
        </Box>
      </Box>
    );
  } else {
    return null;
  }
}
