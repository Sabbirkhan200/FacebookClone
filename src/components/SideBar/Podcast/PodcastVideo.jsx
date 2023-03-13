import { Box, CardMedia, Grid } from '@mui/material'
import React from 'react'

const PodcastVideo = () => {
  return (
    <div>
         <Box sx={{ flexGrow: 1,mt:2 }}>
      <Grid container spacing={3} rowSpacing={0} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4}>
        <CardMedia
          component="img"
          height="140"
          image="/pic/Podcast1.jpg"
          sx={{borderRadius:3}}
        />
        </Grid>
        <Grid item xs={4} >
        <CardMedia
          component="img"
          height="140"
          image="/pic/Podcast3.jpg"
          sx={{borderRadius:3}}
        />
        </Grid>
        <Grid item xs={4}>
        <CardMedia
          component="img"
          height="140"
          image="/pic/Podcast2.jpg"
          sx={{borderRadius:3}}
        />
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default PodcastVideo