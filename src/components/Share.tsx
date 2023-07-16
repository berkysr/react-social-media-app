import React from 'react';
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export default function Share() {
  const { t } = useTranslation();

  return (
    <div className="share w-full rounded-xl shadow-card h-[17vh]">
      <div className="shareWrapper p-2.5">
        <div className="shareTop flex items-center">
          <img
            loading="lazy"
            src="/assets/person/1.jpeg"
            className="shareProfileImg w-14 h-14 rounded-full object-cover mr-2.5"
            alt=""
          />
          <textarea
            placeholder="What is in your mind"
            className="shareInput resize-none w-full focus:outline-none"
          />
        </div>
        <hr className="shareHr m-5" />
        <div className="shareBottom flex items-center justify-between">
          <div className="shareOptions ml-5 flex">
            <div className="shareOption flex items-center mr-4 justify-between cursor-pointer">
              <PermMedia
                htmlColor="tomato"
                className="shareIcon mr-1 !text-lg"
              />
              <span className="shareOptionText text-sm font-medium">{t('components.share.photoVideo')}</span>
            </div>
            <div className="shareOption flex items-center mr-4 justify-between cursor-pointer">
              <Label
                htmlColor="blue"
                className="shareIcon mr-1 !text-lg"
              />
              <span className="shareOptionText text-sm font-medium">{t('components.share.tag')}</span>
            </div>
            <div className="shareOption flex items-center mr-4 justify-between cursor-pointer">
              <Room
                htmlColor="green"
                className="shareIcon mr-1 !text-lg"
              />
              <span className="shareOptionText text-sm font-medium">{t('components.share.location')}</span>
            </div>
            <div className="shareOption flex items-center mr-4 justify-between cursor-pointer">
              <EmojiEmotions
                htmlColor="goldenrod"
                className="shareIcon mr-1 !text-lg"
              />
              <span className="shareOptionText text-sm font-medium">{t('components.share.feelings')}</span>
            </div>
          </div>
          <button className="shareButton border-0 p-2 rounded-md font-medium mr-5 cursor-pointer text-white bg-green-500">Share</button>
        </div>
      </div>
    </div>
  );
}
