import React from 'react';
import Share from '../share/Share';
import PostCard from '../post/Post';
import { posts } from '../../helper/api/posts';
import { Box } from '@mui/system';

export default function Feed() {
  return (
    <Box
      sx={{
        flex: 5.5,
      }}
    >
      <Box p="1.25rem">
        <Share />
        {posts.map((eachPost) => (
          <PostCard
            key={eachPost.id}
            post={eachPost}
          />
        ))}
      </Box>
    </Box>
  );
}
