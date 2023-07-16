import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

export default function Topbar() {
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="start"
    >
      <div className="h-14 w-full bg-[#1877f2] z-[999] flex items-center sticky top-0">
        <div className="flex-[3]">
          <Link to="/">
            <span className="ml-5 font-bold text-[#f5f5f5] text-2xl cursor-pointer">{t('logo.social')}</span>
          </Link>
        </div>
        <div className="flex-[5]">
          <div className="w-full h-full rounded-[7.5rem] bg-white flex items-center p-1.5">
            <Search className="!text-xl ml-2.5" />
            <input
              placeholder="Search for a friend"
              className="border-0 w-[70%] focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-[4] items-center justify-around text-white">
          <div>
            <span className="mr-2.5 text-sm font-medium cursor-pointer">{t('components.topbar.homePage')}</span>
            <span className="mr-2.5 text-sm font-medium cursor-pointer">{t('components.topbar.timeLine')}</span>
          </div>
          <div className="flex">
            <div className="mr-4 cursor-pointer relative">
              <Person />
              <span className="top-[-30%] right-[-30%] w-4 h-4 bg-[#ff0000] rounded-full text-white absolute flex justify-center items-center text-xs">
                1
              </span>
            </div>
            <div className="mr-4 cursor-pointer relative">
              <Chat />
              <span className="top-[-30%] right-[-30%] w-4 h-4 bg-[#ff0000] rounded-full text-white absolute flex justify-center items-center text-xs">
                3
              </span>
            </div>
            <div className="mr-4 cursor-pointer relative">
              <Notifications />
              <span className="top-[-30%] right-[-30%] w-4 h-4 bg-[#ff0000] rounded-full text-white absolute flex justify-center items-center text-xs">
                17
              </span>
            </div>
          </div>
          <Link to="/profile">
            <img
              loading="lazy"
              src="/assets/person/10.jpeg"
              alt=""
              className="w-12 h-12 rounded-full object-cover cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </Box>
  );
}
