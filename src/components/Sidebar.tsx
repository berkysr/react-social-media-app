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

export default function Sidebar() {
  const { t } = useTranslation();

  return (
    <div className="sideBar flex-[3] h-[calc(100vh-3.5rem)] top-14 sticky overflow-y-scroll">
      <div className="sideBarWrapper p-5">
        <ul className="sideBarList p-0 m-0 list-none">
          <li className="sideBarListItem flex items-center mb-5">
            <RssFeed className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">{t('components.sideBar.feed')}</span>
          </li>
          <li className="sideBarListItem flex items-center mb-5">
            <ChatSharp className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">{t('components.sideBar.chats')}</span>
          </li>
          <li className="sideBarListItem flex items-center mb-5">
            <VideoCameraBack className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">{t('components.sideBar.videos')}</span>
          </li>
          <li className="sideBarListItem flex items-center mb-5">
            <GroupSharp className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">{t('components.sideBar.groups')}</span>
          </li>
          <li className="sideBarListItem flex items-center mb-5">
            <BookmarkSharp className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">{t('components.sideBar.bookmarks')}</span>
          </li>
          <li className="sideBarListItem flex items-center mb-5">
            <QuestionAnswerSharp className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">{t('components.sideBar.questions')}</span>
          </li>
          <li className="sideBarListItem flex items-center mb-5">
            <CasesSharp className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">{t('components.sideBar.jobs')}</span>
          </li>
          <li className="sideBarListItem flex items-center mb-5">
            <EventAvailableSharp className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">{t('components.sideBar.events')}</span>
          </li>
          <li className="sideBarListItem flex items-center mb-5">
            <CastForEducation className="sideBarIcon mr-4" />
            <span className="sideBarListItemText">{t('components.sideBar.courses')}</span>
          </li>
        </ul>
        <button className="sideBarButton bg-green-500 text-white w-36 !border-0 p-2.5 rounded-md font-medium">
          {t('button.showMore')}
        </button>
        <hr className="sideBarHr my-5 mx-0" />
        <h4 className="sideBarCloseFriendList font-medium mb-4">{t('components.sideBar.closeFriends')}</h4>
        <ul className="sideBarFriendList p-0 m-0 list-none">
          {users.map((eachUser) => {
            return eachUser.closeFriend ? (
              <CloseFriend
                key={eachUser.id}
                user={eachUser}
              />
            ) : null;
          })}
        </ul>
      </div>
    </div>
  );
}
