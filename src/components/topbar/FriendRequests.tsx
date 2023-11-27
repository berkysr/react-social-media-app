import React from 'react';
import { Box } from '@mui/system';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import { t } from 'i18next';
import { useAppSelector } from '../../store';
import { selectFriendRequests } from '../../helpers/selectors/APIRequestSelector';

export default function FriendRequest() {
  const friendRequests = useAppSelector(selectFriendRequests);

  return (
    <Box
      display="block"
      flexDirection="column"
      className="bg-white w-[300px] rounded-tl-2xl rounded-b-2xl"
    >
      <svg
        className="absolute text-white h-6 right-0 ml-3 bottom-full rotate-180"
        x="0px"
        y="0px"
        viewBox="0 0 255 255"
        xmlSpace="preserve"
      >
        <polygon
          className="fill-current shadow-card"
          points="0,0 127.5,127.5 255,0"
        />
      </svg>
      <Box
        display="flex"
        flexDirection="column"
      >
        {friendRequests.length > 0 ? (
          friendRequests.map((friend) => {
            const mutualFriendCount = Math.floor(Math.random() * 13);
            return (
              <Box
                display="flex"
                alignItems="center"
                className="cursor-pointer hover:bg-[#3333331c] p-2 rounded-lg"
                gap={2}
                pt={1}
                width="100%"
                key={`${friend.picture?.large} ${Math.random().toString()}`}
              >
                <div className="flex-shrink-0">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={friend.picture ? friend.picture.thumbnail : ''}
                    width="100%"
                    height="100%"
                    alt={friend.name ? friend.name.first : ''}
                  ></img>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-black truncate">{friend.name ? `${friend.name.first} ${friend.name.last}` : ''}</p>
                  <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                    {mutualFriendCount <= 0
                      ? t('components.topbar.popover.noMutualFriend')
                      : `${mutualFriendCount} ${t('components.topbar.popover.mutualFriend')}`}
                  </p>
                </div>
                <Box
                  display="flex"
                  flexDirection="row"
                  className="group/a"
                  gap={2}
                >
                  <CheckIcon
                    style={{ fill: 'green' }}
                    className="text-black group/a-active:bg-red"
                  ></CheckIcon>
                  <ClearIcon
                    style={{ fill: 'red' }}
                    className="text-black"
                  ></ClearIcon>
                </Box>
              </Box>
            );
          })
        ) : (
          <h3>{t('components.topbar.popover.noFriendRequest')}</h3>
        )}
      </Box>
    </Box>
  );
}
