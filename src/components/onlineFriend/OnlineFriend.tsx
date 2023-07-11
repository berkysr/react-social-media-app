import React from 'react';
import { User } from '../../helper/types/user';

interface OnlineFriendProps {
  user: User;
}

export default function OnlineFriend({ user }: OnlineFriendProp) {
  const { profilePicture, userName } = user;

  return (
    <li className="rightBarFriend flex items-center mb-4 cursor-pointer">
      <div className="rightBarProfileImgContainer mr-3 relative">
        <img
          loading="lazy"
          className="rightBarProfileImg w-9 h-9 rounded-full object-cover mr-2.5"
          src={profilePicture}
          alt=""
        />
        <span className="rightBarOnline w-2.5 h-2.5 top-0 right-0 absolute bg-green-500 rounded-full"></span>
      </div>
      <span className="rightBarUserName font-medium">{userName}</span>
    </li>
  );
}
