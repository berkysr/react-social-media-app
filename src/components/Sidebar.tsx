import React from 'react';
import {
  RssFeed,
  ChatSharp,
  VideoCameraBack,
  GroupSharp,
  BookmarkSharp,
  QuestionAnswerSharp,
  CasesSharp,
  EventAvailableSharp,
  CastForEducation,
} from '@mui/icons-material';
import CloseFriend from './CloseFriend';
import { users } from '../helper/api/users';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import NavbarMenuElement from './NavbarMenuElement';

export default function Sidebar() {
  const { t } = useTranslation();
  const navbarElements = [
    {
      infoText: 'feed',
      child: <RssFeed className="mr-4" />,
    },
    {
      infoText: 'chats',
      child: <ChatSharp className="mr-4" />,
    },
    {
      infoText: 'videos',
      child: <VideoCameraBack className="mr-4" />,
    },
    {
      infoText: 'groups',
      child: <GroupSharp className="mr-4" />,
    },
    {
      infoText: 'bookmarks',
      child: <BookmarkSharp className="mr-4" />,
    },
    {
      infoText: 'questions',
      child: <QuestionAnswerSharp className="mr-4" />,
    },
    {
      infoText: 'jobs',
      child: <CasesSharp className="mr-4" />,
    },
    {
      infoText: 'events',
      child: <EventAvailableSharp className="mr-4" />,
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      p={3}
      className="w-full h-fit sticky top-[56px]"
    >
      <ul className="p-0 m-0 list-none">
        {navbarElements.map((element) => (
          <NavbarMenuElement
            key={element.infoText}
            infoText={element.infoText}
          >
            {element.child}
          </NavbarMenuElement>
        ))}
      </ul>

      <button className="bg-green-500 text-white w-36 !border-0 p-2.5 rounded-md font-medium">{t('button.showMore')}</button>

      <hr className="my-5 mx-0" />

      <h4 className="font-medium mb-4">{t('components.sidebar.closeFriends')}</h4>

      <ul className="p-0 m-0 list-none">
        {users.map((user) => {
          return user.closeFriend ? (
            <CloseFriend
              key={user.id}
              user={user}
            />
          ) : null;
        })}
      </ul>
    </Box>
  );
}
