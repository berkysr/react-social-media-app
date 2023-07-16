import React from 'react';
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export default function Share() {
  const { t } = useTranslation();

  return (
    <div className="w-full rounded-xl shadow-card h-[17vh]">
      <div className="p-2.5">
        <div className="flex items-center">
          <img
            loading="lazy"
            src="/assets/person/1.jpeg"
            className="w-14 h-14 rounded-full object-cover mr-2.5"
            alt=""
          />
          <textarea
            placeholder="What is in your mind"
            className="resize-none w-full focus:outline-none"
          />
        </div>
        <hr className="m-5" />
        <div className="flex items-center justify-between">
          <div className="ml-5 flex">
            <div className="flex items-center mr-4 justify-between cursor-pointer">
              <PermMedia
                htmlColor="tomato"
                className="mr-1 !text-lg"
              />
              <span className="text-sm font-medium">{t('components.share.photoVideo')}</span>
            </div>
            <div className="flex items-center mr-4 justify-between cursor-pointer">
              <Label
                htmlColor="blue"
                className="mr-1 !text-lg"
              />
              <span className="text-sm font-medium">{t('components.share.tag')}</span>
            </div>
            <div className="flex items-center mr-4 justify-between cursor-pointer">
              <Room
                htmlColor="green"
                className="mr-1 !text-lg"
              />
              <span className="text-sm font-medium">{t('components.share.location')}</span>
            </div>
            <div className="flex items-center mr-4 justify-between cursor-pointer">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="mr-1 !text-lg"
              />
              <span className="text-sm font-medium">{t('components.share.feelings')}</span>
            </div>
          </div>
          <button className="border-0 p-2 rounded-md font-medium mr-5 cursor-pointer text-white bg-green-500">Share</button>
        </div>
      </div>
    </div>
  );
}
