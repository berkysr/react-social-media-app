import React from 'react';
import { RandomUser } from '../shared/reducers/APIRequestReducer';

interface CloseFriendProps {
  user: RandomUser;
}

export default function CloseFriend({ user }: CloseFriendProps) {
  const { picture, name } = user;

  return picture && name ? (
    <li className="flex items-center mb-4 cursor-pointer pr-4">
      <img
        loading="lazy"
        src={picture.thumbnail}
        alt=""
        className="w-9 h-9 rounded-full object-cover mr-2.5"
      />

      <figcaption>{`${name.first} ${name.last}`}</figcaption>
    </li>
  ) : null;
}
