import React from 'react';
import { RandomUser } from '../shared/reducers/APIRequestReducer';
import { t } from 'i18next';

interface CloseFriendProps {
  user: RandomUser;
}

export default function CloseFriend({ user }: CloseFriendProps) {
  const { picture, name } = user;

  return picture && name ? (
    <li className="flex items-center mb-4 cursor-pointer pr-4">
      <img
        loading="lazy"
        aria-label={`${t('a11y.closeFriendProfilePicture')}-${name.first} ${name.last}`}
        src={picture.thumbnail}
        alt={`${t('a11y.closeFriendProfilePicture')}-${name.first} ${name.last}`}
        className="w-9 h-9 rounded-full object-cover mr-2.5"
      />

      <figcaption>{`${name.first} ${name.last}`}</figcaption>
    </li>
  ) : null;
}
