
import { PodcastsOutlined } from '@mui/icons-material'
import { Box, Stack, Skeleton, Typography, Grid } from '@mui/material'
import React, { useState } from 'react'
import PodcastVideo from './PodcastVideo'

const Podcast = () => {
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
    
       <Typography sx={{backgroundColor:'#e0e0e0'}}><PodcastsOutlined/>Podcast</Typography>
      <PodcastVideo/>
      <PodcastVideo/>
      <PodcastVideo/>
      <PodcastVideo/>
      <PodcastVideo/>
      <PodcastVideo/>

      </>
    )}
  </Box>
  )
}

export default Podcast