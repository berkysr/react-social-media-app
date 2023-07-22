import React from 'react';
import { User } from '../helper/types/user';

interface CloseFriendProps {
  user: User;
}

export default function CloseFriend({ user }: CloseFriendProps) {
  const { profilePicture, userName } = user;

  return profilePicture && userName ? (
    <li className="flex items-center mb-4 cursor-pointer">
      <img
        loading="lazy"
        src={profilePicture}
        alt=""
        className="w-9 h-9 rounded-full object-cover mr-2.5"
      />

      <figcaption>{userName}</figcaption>
    </li>
  ) : null;
}
