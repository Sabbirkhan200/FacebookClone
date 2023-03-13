
import { Box, Stack, Skeleton, Typography, Grid, CardHeader, CardMedia, Button } from '@mui/material'
import React, { useState } from 'react'

const EGMeet = () => {
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
       <Typography
        sx={{textAlign:'center',fontSize:20,backgroundColor:'#bdbdbd'}}>
       EG Meet
       </Typography>
      
      
       <Grid container rowSpacing={0} columns={{ xs: 4, sm: 8, md: 12 }} sx={{mt:5}}>
  <Grid item xs={6}>
  <Typography variant="h4" gutterBottom>
  Premium Video Meeting 
      </Typography>
      <Typography variant="body2" >
      We re-engineered the service we built for secure business meetings, Google Meet, to make it free and available for all.
      </Typography>
      <Stack direction="row" spacing={3} sx={{mt:5}}>
      <Button variant='contained'>New Meeting</Button>
      <Button variant='outlined'>Enter Code </Button>
      </Stack>
  </Grid>

  <Grid item xs={6} >
  <CardMedia
        component="img"
        height="194"
        image="/pic/Meet.jpg"
        alt="Paella dish"
      />
  </Grid>
  </Grid>
      </>
    )}
  </Box>
  )
}

export default EGMeet