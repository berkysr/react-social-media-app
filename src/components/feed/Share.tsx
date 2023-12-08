import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@base/store';
import Icon from '@components/shared/Icon';
import { setRandomPosts } from '@helpers/reducers/APIRequestReducer';
import { selectCurrentUser, selectGoogleInfo, selectRandomPosts } from '@helpers/selectors/APIRequestSelector';
import { RandomPost } from '@helpers/types/api';

export default function Share() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectRandomPosts);
  const { t } = useTranslation();
  const currentUser = useAppSelector(selectCurrentUser);
  const currentProfileImage = useAppSelector(selectGoogleInfo).picture;
  const currentUserGoogleInfo = useAppSelector(selectGoogleInfo);
  const currentUserPicture = currentProfileImage || ((currentUser || {}).picture || {})?.medium || '';
  const [isCurrentUserLoaded, setIsCurrentUserLoaded] = useState(false);
  const [shareText, setShareText] = useState('');

  useEffect(() => {
    if (currentUser) {
      setIsCurrentUserLoaded(true);
    }
  }, [currentUser]);

  const handleShareClick = () => {
    if (!shareText) {
      return;
    }

    const newPost: RandomPost = {
      id: Math.random().toString(),
      image: '',
      likes: 0,
      tags: [''],
      text: shareText,
      publishDate: new Date().toISOString(),
      owner: {
        id: currentUser.login?.md5 || '',
        title: currentUserGoogleInfo.iss ? '' : currentUser.name?.title || '',
        firstName: currentUserGoogleInfo.iss ? currentUserGoogleInfo.given_name : currentUser.name?.first || '',
        lastName: currentUserGoogleInfo.iss ? currentUserGoogleInfo.family_name : currentUser.name?.last || '',
        picture: currentUserPicture || '',
      },
    };

    const newPosts = [newPost, ...posts];

    dispatch(setRandomPosts(newPosts));
    setShareText('');
  };

  const handleChange = (event: React.ChangeEvent) => {
    setShareText((event.target as HTMLInputElement).value);
  };

  const shareIcons = [
    {
      infoText: 'photoVideo',
      child: (
        <PermMedia
          htmlColor="tomato"
          className="mr-1 !text-lg"
        />
      ),
    },
    {
      infoText: 'tag',
      child: (
        <Label
          htmlColor="blue"
          className="mr-1 !text-lg"
        />
      ),
    },
    {
      infoText: 'location',
      child: (
        <Room
          htmlColor="green"
          className="mr-1 !text-lg"
        />
      ),
    },
    {
      infoText: 'feelings',
      child: (
        <EmojiEmotions
          htmlColor="goldenrod"
          className="mr-1 !text-lg"
        />
      ),
    },
  ];

  return isCurrentUserLoaded ? (
    <Box
      p={3}
      className="w-full rounded-xl shadow-card"
    >
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="start"
      >
        <Box
          display="flex"
          className="w-14 h-14 flex-none"
        >
          <img
            loading="lazy"
            referrerPolicy="no-referrer"
            src={currentUserPicture}
            width="100%"
            height="100%"
            aria-label={t('a11y.currentUserPicture')}
            className="w-full h-full object-cover rounded-[50%]"
            alt={t('a11y.currentUserPicture')}
          />
        </Box>

        <Box
          display="flex"
          ml={2}
        >
          <textarea
            placeholder={t('components.share.status')}
            className="resize-none w-full focus:outline-none"
            onChange={(event) => handleChange(event)}
            value={shareText}
          />
        </Box>
      </Box>

      <hr className="mb-2 mt-5" />

      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        ml={isMobile ? 3 : 0}
      >
        {shareIcons.map((icon) => (
          <Icon
            key={icon.infoText}
            infoText={isMobile ? '' : t(`components.share.${icon.infoText}`)}
            isOnlyBigScreen={!isMobile}
          >
            {icon.child}
          </Icon>
        ))}

        <button
          className="border-0 p-2 rounded-md font-medium lg:mr-5 cursor-pointer text-white bg-[#1877f2]"
          aria-label={t('components.share.share')}
          onClick={() => handleShareClick()}
        >
          {t('components.share.share')}
        </button>
      </Box>
    </Box>
  ) : null;
}
