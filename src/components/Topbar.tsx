import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';

export default function Topbar() {
  return (
    <div className="topBarContainer h-14 w-full bg-[#1877f2] z-[999] flex items-center sticky top-0">
      <div className="topBarLeft flex-[3]">
        <Link to="/">
          <span className="topBarLogo ml-5 font-bold text-[#f5f5f5] text-2xl cursor-pointer">Social</span>
        </Link>
      </div>
      <div className="topBarCenter flex-[5]">
        <div className="topBarSearchBar w-full h-full rounded-[7.5rem] bg-white flex items-center p-1.5">
          <Search className="searchIcon !text-xl ml-2.5" />
          <input
            placeholder="Search for a friend"
            className="searchInput border-0 w-[70%] focus:outline-none"
          />
        </div>
      </div>
      <div className="topBarRight flex flex-[4] items-center justify-around text-white">
        <div className="topBarLinks">
          <span className="topBarLink mr-2.5 text-sm font-medium cursor-pointer">Homepage</span>
          <span className="topBarLink mr-2.5 text-sm font-medium cursor-pointer">Timeline</span>
        </div>
        <div className="topBarIcons flex">
          <div className="topBarIconItem mr-4 cursor-pointer relative">
            <Person />
            <span className="topBarIconBadge top-[-30%] right-[-30%] w-4 h-4 bg-[#ff0000] rounded-full text-white absolute flex justify-center items-center text-xs">
              1
            </span>
          </div>
          <div className="topBarIconItem mr-4 cursor-pointer relative">
            <Chat />
            <span className="topBarIconBadge top-[-30%] right-[-30%] w-4 h-4 bg-[#ff0000] rounded-full text-white absolute flex justify-center items-center text-xs">
              3
            </span>
          </div>
          <div className="topBarIconItem mr-4 cursor-pointer relative">
            <Notifications />
            <span className="topBarIconBadge top-[-30%] right-[-30%] w-4 h-4 bg-[#ff0000] rounded-full text-white absolute flex justify-center items-center text-xs">
              17
            </span>
          </div>
        </div>
        <Link to="/profile">
          <img
            loading="lazy"
            src="/assets/person/10.jpeg"
            alt=""
            className="topBarImg w-12 h-12 rounded-full object-cover cursor-pointer"
          />
        </Link>
      </div>
    </div>
  );
}
