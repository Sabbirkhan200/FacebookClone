import { Box, Stack, Skeleton } from '@mui/material'
import React, { useState } from 'react'
import Post from './Post'
import MultiActionAreaCard from './PostBar/PostBar'
import StoryBar from './StoryBar/StoryBar'
import VideoPost from './VideoPost'

const Feed = () => {
  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, [300])

  return (
    <Box flex={6} p={{ xs: 0, md: 2 }}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="text" height={20} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
          <>
            <StoryBar/>
          <MultiActionAreaCard />
          <Post />
          <VideoPost />
          <Post />
          <VideoPost />

          <Post />
          <Post />
          <Post />
          <VideoPost />

          <Post />
          <VideoPost />

          <Post />
          <VideoPost />
        </>
      )}
    </Box>
  )
}

export default Feed
