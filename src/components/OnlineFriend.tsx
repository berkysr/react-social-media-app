import React from 'react';
import { RandomUser } from '../shared/reducers/APIRequestReducer';
import { t } from 'i18next';

interface OnlineFriendProps {
  user: RandomUser;
}
export default function OnlineFriend({ user }: OnlineFriendProps) {
  const { name, picture } = user;

  return picture && name ? (
    <li className="flex items-center mb-4 cursor-pointer">
      <div className="mr-3 relative">
        <img
          loading="lazy"
          className="w-9 h-9 rounded-full object-cover mr-2.5"
          aria-label={`${t('a11y.closeFriendProfilePicture')}-${name.first} ${name.last}`}
          src={picture.thumbnail}
          alt={`${t('a11y.closeFriendProfilePicture')}-${name.first} ${name.last}`}
        />

        <span className="w-2.5 h-2.5 top-0 right-2 absolute bg-green-500 rounded-full"></span>
      </div>

      <figcaption className="font-medium">{`${name.first} ${name.last}`}</figcaption>
    </li>
  ) : null;
}
