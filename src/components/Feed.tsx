import React from 'react';
import Share from './Share';
import PostCard from './Post';
import { posts } from '../helper/api/posts';
import { Box } from '@mui/system';

export default function Feed() {
  return (
    <Box p={3}>
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
