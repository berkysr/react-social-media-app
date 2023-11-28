import React, { useEffect, useState } from 'react';
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { Box, Button, LinearProgress } from '@mui/material';
import Icon from '../shared/Icon';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectCurrentUser, selectGoogleInfo, selectRandomPosts } from '../../helpers/selectors/APIRequestSelector';
import { setRandomPosts } from '../../helpers/reducers/APIRequestReducer';
import { RandomPost } from '../../helpers/types/api';
import { isMobile } from 'react-device-detect';

export default function Share() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectRandomPosts);
  const { t } = useTranslation();
  const currentUser = useAppSelector(selectCurrentUser);
  const currentProfileImage = useAppSelector(selectGoogleInfo).picture;
  const currentUserPicture = currentProfileImage || ((currentUser || {}).picture || {})?.medium || '';
  const [isCurrentUserLoaded, setIsCurrentUserLoaded] = useState(false);
  const [shareText, setShareText] = useState('');
  const [uploadImageInput, setUploadImageInput] = useState(false);
  const [uploadedImageSource, setUploadedImageSource] = useState('');
  const [showUploadImageLoader, setShowUploadImageLoader] = useState(false);
  const [uploadedImage, setUploadedImage] = useState('');

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
      image: uploadedImage,
      likes: 0,
      tags: [''],
      text: shareText,
      publishDate: new Date().toISOString(),
      owner: {
        id: currentUser.login?.md5 || '',
        title: currentUser.name?.title || '',
        firstName: currentUser.name?.first || '',
        lastName: currentUser.name?.last || '',
        picture: currentUserPicture || '',
      },
    };

    const newPosts = [newPost, ...posts];

    dispatch(setRandomPosts(newPosts));
    setShareText('');
    setUploadedImage('');
    setUploadImageInput(false);
    setShowUploadImageLoader(false);
  };

  const handleChange = (event: React.ChangeEvent) => {
    setShareText((event.target as HTMLInputElement).value);
  };

  const handleUploadClick = () => {
    setUploadImageInput(!uploadImageInput);
    setShowUploadImageLoader(false);
  };

  const handleUploadImageSourceClick = () => {
    setShowUploadImageLoader(true);

    setTimeout(() => {
      setShowUploadImageLoader(false);

      if (!validateImageResolution()) {
        return;
      }
    }, 550);

    setUploadedImage(uploadedImageSource);
    setUploadedImageSource('');
  };

  const handleImageSourceChange = (event: React.ChangeEvent) => {
    setUploadedImageSource((event.target as HTMLInputElement).value);
  };

  const validateImageResolution = () => {
    const img = new Image();
    img.src = uploadedImageSource;

    if (img.height === 0 || img.width === 0) {
      alert(`Uploaded image is not valid.`);

      setUploadedImageSource('');
      setUploadedImage('');

      return false;
    }

    if (img.height > 1920) {
      alert(
        `Uploaded image height is more than 1920px's, please upload lower an image with lower height. Current image height ${img.height}px's`,
      );

      setUploadedImageSource('');
      setUploadedImage('');

      return false;
    }

    if (img.width > 1080) {
      alert(
        `Uploaded image width is more than 1080px's, please upload lower an image with lower width. Current image width ${img.width}px's`,
      );

      setUploadedImageSource('');
      setUploadedImage('');

      return false;
    }

    return true;
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
          width="100%"
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

      {uploadImageInput ? (
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          width="100%"
          height="25px"
          fontSize="12px"
          mt={3}
        >
          <input
            placeholder="Use image source to upload"
            className="w-[85%] p-[5px] outline-none border-solid border-2 border-sky-500"
            type="text"
            onChange={(event) => handleImageSourceChange(event)}
            value={uploadedImageSource}
          ></input>
          <Button onClick={() => handleUploadImageSourceClick()}>{uploadedImage === '' ? 'Upload' : 'Remove'}</Button>

          {uploadedImage !== '' ? (
            <img
              width="15%"
              height="15%"
              src={uploadedImage}
            ></img>
          ) : null}
        </Box>
      ) : null}
      {showUploadImageLoader ? <LinearProgress className="w-full mt-[20px]" /> : null}
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
            onClick={icon.infoText === 'photoVideo' ? handleUploadClick : () => {}}
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
