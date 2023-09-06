import React from 'react';
import { User } from '../shared/types/user';

interface OnlineFriendProps {
  user: User;
}

export default function OnlineFriend({ user }: OnlineFriendProps) {
  const { profilePicture, userName } = user;

  return (
    <li className="flex items-center mb-4 cursor-pointer">
      <div className="mr-3 relative">
        <img
          loading="lazy"
          className="w-9 h-9 rounded-full object-cover mr-2.5"
          src={profilePicture}
          alt=""
        />

        <span className="w-2.5 h-2.5 top-0 right-2 absolute bg-green-500 rounded-full"></span>
      </div>

      <figcaption className="font-medium">{userName}</figcaption>
    </li>
  );
}
