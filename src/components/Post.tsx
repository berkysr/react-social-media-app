import React from 'react';
import { MoreVert } from '@mui/icons-material';
import { users } from '../helper/api/users';
import { useState } from 'react';
import { Post } from '../helper/types/post';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';

interface PostProps {
  post: Post;
}

export default function PostCard({ post }: PostProps) {
  const { t } = useTranslation();
  const { comment, date, desc, like, photo, userId } = post;
  const { profilePicture, userName } = users.filter((user) => user.id === userId)[0];
  const [addedLike, setLike] = useState(like || 0);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? addedLike - 1 : addedLike + 1);
    setIsLiked(!isLiked);
  };

  return (
    <Box
      p={3}
      className="w-full rounded-xl shadow-card mx-0 my-8"
    >
      <Box className="flex items-center justify-between cursor-pointer">
        <Box className="flex align-center">
          <img
            loading="lazy"
            src={profilePicture}
            className="w-9 h-9 rounded-full object-cover"
            alt=""
          />

          <figcaption className="text-base font-bold my-0 mx-2.5 flex items-center">{userName}</figcaption>

          <time className="text-zinc-500	text-xs flex items-center">{date}</time>
        </Box>

        <MoreVert />
      </Box>

      <Box
        mx={0}
        my={5}
      >
        <figcaption>{desc}</figcaption>

        <img
          loading="lazy"
          src={photo}
          className="mt-5 w-full max-h-[112rem] object-contain"
          alt=""
        />
      </Box>

      <Box className="flex items-center justify-between">
        <Box className="flex items-center">
          <img
            loading="lazy"
            className="w-6 h-6 mr-1.5 cursor-pointer"
            src="/assets/like.png"
            onClick={likeHandler}
            alt=""
          />

          <img
            loading="lazy"
            className="w-6 h-6 mr-2.5 cursor-pointer"
            src="/assets/heart.png"
            onClick={likeHandler}
            alt=""
          />

          <p className="text-sm">
            {addedLike} <u>{t('components.post.people')}</u> {t('components.post.likeThis')}
          </p>
        </Box>

        <p className="cursor-pointer text-sm">
          {comment} {t('components.post.comments')}
        </p>
      </Box>
    </Box>
  );
}
