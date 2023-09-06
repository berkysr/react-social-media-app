import React from 'react';
import Share from './Share';
import PostCard from './Post';
import { posts } from '../shared/api/posts';
import { Box } from '@mui/system';

export default function Feed() {
  return (
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
  );
}
