import React from 'react';
import { MoreVert } from '@mui/icons-material';
import { users } from '@helper/api/users';
import { useState } from 'react';
import { Post } from '@helper/types/post';

interface PostProps {
  post: Post;
}

export default function PostCard({ post }: PostProps) {
  const { comment, date, desc, like, photo, userId } = post;
  const { profilePicture, userName } = users.filter((user) => user.id === userId)[0];
  const [addedLike, setLike] = useState(like || 0);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? addedLike - 1 : addedLike + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post w-full rounded-xl shadow-card mx-0 my-8">
      <div className="postWrapper p-3.5">
        <div className="postTop flex items-center justify-between cursor-pointer">
          <div className="postTopLeft flex align-center">
            <img
              loading="lazy"
              src={profilePicture}
              className="postProfileImg w-9 h-9 rounded-full object-cover"
              alt=""
            />
            <span className="postUserName text-base font-bold my-0 mx-2.5 flex items-center">{userName}</span>
            <span className="postDate text-zinc-500	text-xs flex items-center">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter mx-0 my-5">
          <span className="postText">{desc}</span>
          <img
            loading="lazy"
            src={photo}
            className="postImg mt-5 w-full max-h-[112rem] object-contain"
            alt=""
          />
        </div>
        <div className="postBottom flex items-center justify-between">
          <div className="postBottomLeft flex items-center">
            <img
              loading="lazy"
              className="likeIcon w-6 h-6 mr-1.5 cursor-pointer"
              src="/assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              loading="lazy"
              className="likeIcon w-6 h-6 mr-2.5 cursor-pointer"
              src="/assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="postLikeCounter text-sm">
              {addedLike} <u>people</u> like this!
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText cursor-pointer text-sm">{comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
