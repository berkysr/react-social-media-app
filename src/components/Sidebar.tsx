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

export default function Sidebar() {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      flexDirection="column"
      p={3}
      className="w-full sticky overflow-y-scroll"
    >
      <ul className="p-0 m-0 list-none">
        <li className="flex items-center mb-5">
          <RssFeed className="mr-4" />
          <span>{t('components.sidebar.feed')}</span>
        </li>

        <li className="flex items-center mb-5">
          <ChatSharp className="mr-4" />
          <span>{t('components.sidebar.chats')}</span>
        </li>

        <li className="flex items-center mb-5">
          <VideoCameraBack className="mr-4" />
          <span>{t('components.sidebar.videos')}</span>
        </li>

        <li className="flex items-center mb-5">
          <GroupSharp className="mr-4" />
          <span>{t('components.sidebar.groups')}</span>
        </li>

        <li className="flex items-center mb-5">
          <BookmarkSharp className="mr-4" />
          <span>{t('components.sidebar.bookmarks')}</span>
        </li>

        <li className="flex items-center mb-5">
          <QuestionAnswerSharp className="mr-4" />
          <span>{t('components.sidebar.questions')}</span>
        </li>

        <li className="flex items-center mb-5">
          <CasesSharp className="mr-4" />
          <span>{t('components.sidebar.jobs')}</span>
        </li>

        <li className="flex items-center mb-5">
          <EventAvailableSharp className="mr-4" />
          <span>{t('components.sidebar.events')}</span>
        </li>

        <li className="flex items-center mb-5">
          <CastForEducation className="mr-4" />
          <span>{t('components.sidebar.courses')}</span>
        </li>
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
