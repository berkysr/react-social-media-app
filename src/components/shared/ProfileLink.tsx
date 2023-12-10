import { t } from 'i18next';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '@base/store';
import { PageURLs } from '@helpers/enums/enums';
import { setSelectedUser } from '@helpers/reducers/APIRequestReducer';
import { RandomUser } from '@helpers/types/api';
import { formatTextValue } from '@helpers/utils/commonFunctions';

interface ProfileLinkProps {
  user: RandomUser;
  isOnline?: boolean;
  isLoggedInUser?: boolean;
}

export default function ProfileLink({ user, isOnline = false, isLoggedInUser = false }: ProfileLinkProps) {
  const dispatch = useAppDispatch();
  const { name, picture } = user;

  const handleOnClick = (user: RandomUser) => {
    dispatch(setSelectedUser(user));
  };

  const handleOnClickLoggedInUser = () => dispatch(setSelectedUser({}));

  return picture && name ? (
    isLoggedInUser ? (
      <Link
        className="w-full flex row gap-[10px] hover:bg-[#3333331c] p-2 rounded-lg"
        aria-label={t('a11y.currentUserPicture')}
        to={`${PageURLs.PROFILE}/${formatTextValue(name.first)}-${formatTextValue(name.last)}`}
        onClick={() => handleOnClickLoggedInUser()}
      >
        <img
          loading="lazy"
          width="100%"
          height="100%"
          src={picture.thumbnail}
          referrerPolicy="no-referrer"
          aria-label={t('a11y.currentUserPicture')}
          alt={t('a11y.currentUserPicture')}
          className="w-[25px] h-[25px] rounded-full object-cover cursor-pointer"
        />
        <figcaption>{`${name?.first} ${name?.last}`}</figcaption>
      </Link>
    ) : (
      <li className="flex items-center mb-4 cursor-pointer">
        <Link
          className="flex"
          to={`${PageURLs.PROFILE}/${formatTextValue(name.first)}-${formatTextValue(name.last)}`}
          onClick={() => handleOnClick(user)}
        >
          <div className="mr-3 relative">
            <img
              loading="lazy"
              width="100%"
              height="100%"
              className="w-9 h-9 rounded-full object-cover mr-2.5"
              aria-label={`${t('a11y.closeFriendProfilePicture')}-${name.first} ${name.last}`}
              src={picture.thumbnail}
              alt={`${t('a11y.closeFriendProfilePicture')}-${name.first} ${name.last}`}
            />

            {isOnline ? <span className="w-2.5 h-2.5 top-0 right-2 absolute bg-green-500 rounded-full"></span> : null}
          </div>

          <figcaption className="font-medium">{`${name.first} ${name.last}`}</figcaption>
        </Link>
      </li>
    )
  ) : null;
}
