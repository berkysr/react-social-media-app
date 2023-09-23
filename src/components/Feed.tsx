import React from 'react';
import Share from './Share';
import PostCard from './Post';
import { Box } from '@mui/system';
import { selectRandomPosts } from '../shared/selectors/APIRequestSelector';
import { useAppSelector } from '../store';

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

      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </Box>
  ) : null;
}
