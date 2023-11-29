import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material';
import { Box, Button, LinearProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '@base/store';
import Icon from '@components/shared/Icon';
import { Dimensions } from '@helpers/enums/enums';
import { setAlertMessage, setRandomPosts } from '@helpers/reducers/APIRequestReducer';
import { selectCurrentUser, selectGoogleInfo, selectRandomPosts } from '@helpers/selectors/APIRequestSelector';
import { RandomPost } from '@helpers/types/api';
import { generateErrorMessage } from '@helpers/utils/commonFunctions';

export default function Share() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectRandomPosts);
  const { t } = useTranslation();
  const currentUser = useAppSelector(selectCurrentUser);
  const currentUserGoogleInfo = useAppSelector(selectGoogleInfo);
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
        title: currentUserGoogleInfo.iss ? '' : currentUser.name?.title || '',
        firstName: currentUserGoogleInfo.iss ? currentUserGoogleInfo.given_name : currentUser.name?.first || '',
        lastName: currentUserGoogleInfo.iss ? currentUserGoogleInfo.family_name : currentUser.name?.last || '',
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

      if (uploadedImage === '' && !validateImageResolution()) {
        return;
      }
    }, 550);

    setUploadedImageSource('');
  };

  const handleImageSourceChange = (event: React.ChangeEvent) => {
    setUploadedImageSource((event.target as HTMLInputElement).value);
  };

  const validateImageResolution = () => {
    let resolution;
    let maxResolution;
    let currentResolution;
    const img = new Image();
    img.src = uploadedImageSource;

    if (img.height === 0 || img.width === 0) {
      setUploadedImageSource('');
      setUploadedImage('');
      dispatch(setAlertMessage(generateErrorMessage(t('error:error.validation.share.invalidImage'))));

      return false;
    }

    if (img.height > 1920) {
      resolution = Dimensions.HEIGHT;
      maxResolution = '1920px';
      currentResolution = img.height;

      t('error:error.validation.password.minCharacter', {});

      setUploadedImageSource('');
      setUploadedImage('');
      dispatch(
        setAlertMessage(
          generateErrorMessage(t('error:error.validation.share.invalidResolution', { resolution, maxResolution, currentResolution })),
        ),
      );

      return false;
    }

    if (img.width > 1080) {
      resolution = Dimensions.WIDTH;
      maxResolution = '1080px';
      currentResolution = img.width;

      dispatch(
        setAlertMessage(
          generateErrorMessage(t('error:error.validation.share.invalidResolution', { resolution, maxResolution, currentResolution })),
        ),
      );

      setUploadedImageSource('');
      setUploadedImage('');

      return false;
    }

    setUploadedImage(uploadedImageSource);

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
            placeholder={t('placeHolder.mediaUrl')}
            className="w-[85%] p-[5px] outline-none border-solid border-2 border-sky-500"
            type="text"
            onChange={(event) => handleImageSourceChange(event)}
            value={uploadedImageSource}
          ></input>
          <Button onClick={() => handleUploadImageSourceClick()}>{uploadedImage === '' ? t('button.share') : t('button.remove')}</Button>

          {uploadedImage !== '' ? (
            <img
              width={isMobile ? '15%' : '5%'}
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
