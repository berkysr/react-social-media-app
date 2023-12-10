import { MoreVert } from '@mui/icons-material';
import { Box } from '@mui/material';
import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@base/store';
import { Languages, Locales } from '@helpers/enums/enums';
import { selectLanguage } from '@helpers/selectors/appSelector';
import { RandomPost } from '@helpers/types/api';

interface PostProps {
  post: RandomPost;
  index: number;
}

export default function PostCard({ post, index }: PostProps) {
  const { t } = useTranslation();
  const { image, likes, text, publishDate, owner } = post;
  const selectedLanguage = useAppSelector(selectLanguage) || Languages.EN;
  const locale = useMemo(() => {
    return selectedLanguage === Languages.EN ? Locales.EN : Locales.TR;
  }, [selectedLanguage]);

  return (
    <Box
      p={3}
      className="w-full rounded-xl shadow-card mx-0 my-8"
    >
      <Box className="flex items-center justify-between cursor-pointer">
        <Box className="flex align-center">
          <img
            loading={`${index === 0 ? 'eager' : 'lazy'}`}
            src={owner.picture}
            referrerPolicy="no-referrer"
            width="100%"
            height="100%"
            aria-label={`${t('a11y.postOwnerImage')}-${owner.firstName} ${owner.lastName}`}
            className="w-9 h-9 rounded-full object-cover"
            alt={`${t('a11y.postOwnerImage')}-${owner.firstName} ${owner.lastName}`}
          />

          <figcaption className="text-base font-bold my-0 mx-2.5 flex items-center">{`${owner.firstName} ${owner.lastName}`}</figcaption>

          <time className="text-zinc-500	text-xs flex items-center">
            {new Date(publishDate).toLocaleString(locale, { timeZone: 'UTC' })}
          </time>
        </Box>

        <MoreVert />
      </Box>

      <Box
        mx={0}
        my={5}
      >
        <figcaption>{text}</figcaption>

        {image ? (
          <img
            loading={`${index === 0 ? 'eager' : 'lazy'}`}
            src={image}
            width="100%"
            height="100%"
            aria-label={t('a11y.postImage')}
            className="mt-5 w-full max-h-[112rem] object-contain"
            alt={t('a11y.postImage')}
          />
        ) : null}
      </Box>

      <Box className="flex items-center justify-between">
        <Box className="flex items-center">
          <img
            loading="lazy"
            className="w-6 h-6 mr-1.5 cursor-pointer"
            width="100%"
            height="100%"
            src="/assets/like.png"
            aria-label={t('a11y.likePost')}
            alt={t('a11y.likePost')}
          />

          <img
            loading="lazy"
            className="w-6 h-6 mr-2.5 cursor-pointer"
            width="100%"
            height="100%"
            src="/assets/heart.png"
            aria-label={t('a11y.favoritePost')}
            alt={t('a11y.favoritePost')}
          />

          <p className="text-sm">
            {likes} <u>{t('components.post.people')}</u> {t('components.post.likeThis')}
          </p>
        </Box>

        <p className="cursor-pointer text-sm">
          {likes} {t('components.post.comments')}
        </p>
      </Box>
    </Box>
  );
}
