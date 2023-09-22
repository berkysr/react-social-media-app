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
} from '@mui/icons-material';
import { SideBarElementInfoTexts } from '../shared/enums/enums';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import NavbarMenuElement from './NavbarMenuElement';
import { useAppSelector } from '../store';
import { selectCloseFriends } from '../shared/selectors/APIRequestSelector';
import CloseFriend from './CloseFriend';

export default function Sidebar() {
  const closeFriends = useAppSelector(selectCloseFriends);
  const { t } = useTranslation();
  const navbarElements = [
    {
      infoText: SideBarElementInfoTexts.FEED,
      child: <RssFeed className="mr-4" />,
    },
    {
      infoText: SideBarElementInfoTexts.CHATS,
      child: <ChatSharp className="mr-4" />,
    },
    {
      infoText: SideBarElementInfoTexts.VIDEOS,
      child: <VideoCameraBack className="mr-4" />,
    },
    {
      infoText: SideBarElementInfoTexts.GROUPS,
      child: <GroupSharp className="mr-4" />,
    },
    {
      infoText: SideBarElementInfoTexts.BOOKMARKS,
      child: <BookmarkSharp className="mr-4" />,
    },
    {
      infoText: SideBarElementInfoTexts.QUESTIONS,
      child: <QuestionAnswerSharp className="mr-4" />,
    },
    {
      infoText: SideBarElementInfoTexts.JOBS,
      child: <CasesSharp className="mr-4" />,
    },
    {
      infoText: SideBarElementInfoTexts.EVENTS,
      child: <EventAvailableSharp className="mr-4" />,
    },
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      p={3}
      className="w-full h-screen sticky top-[56px]"
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

      <ul className="p-0 m-0 list-none overflow-y-auto mb-8">
        {closeFriends
          ? closeFriends.map((friend) => (
              <CloseFriend
                key={friend.picture?.large}
                user={friend}
              />
            ))
          : null}
      </ul>
    </Box>
  );
}
