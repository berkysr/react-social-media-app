import React from 'react';
import Share from '@components/feed/Share';
import PostCard from '@components/feed/Post';
import { Box } from '@mui/system';
import { selectRandomPosts } from '@helpers/selectors/APIRequestSelector';
import { useAppSelector } from '@base/store';

export default function Feed() {
  const posts = useAppSelector(selectRandomPosts);

  return posts ? (
    <Box
      display="flex"
      flexDirection="column"
      p={3}
      className="w-full"
    >
      <Share />

      {posts.map((post, index) => (
        <PostCard
          key={post.id}
          post={post}
          index={index}
        />
      ))}
    </Box>
  ) : null;
}
