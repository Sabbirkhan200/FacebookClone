
import { Box, Stack, Skeleton, Typography } from '@mui/material'
import React, { useState } from 'react'
import VideoPost from '../../FeedsNews/VideoPost'

const Video = () => {
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
        <Typography sx={{textAlign:'center',backgroundColor:'#e0e0e0',height:40,fontFamily:'sans-serif',fontSize:25}}>All Video</Typography>
       <VideoPost/>
       <VideoPost/>
       <VideoPost/>
       <VideoPost/>
       <VideoPost/>
       <VideoPost/>
       <VideoPost/>
       <VideoPost/>
      
      </>
    )}
  </Box>
  )
}

export default Video