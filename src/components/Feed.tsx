import React from 'react';
import PostCard from '@components/Post';
import { posts } from '@helper/api/posts';
import { Box } from '@mui/system';
import Share from '@components/Share';

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
      ü
    </Box>
  );
}
