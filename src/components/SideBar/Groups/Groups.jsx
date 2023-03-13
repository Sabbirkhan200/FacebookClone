
import { ArrowForwardIos } from '@mui/icons-material'
import { Box, Stack, Skeleton, Typography, Grid, Card, CardHeader, Avatar, IconButton, CardMedia } from '@mui/material'
import React, { useState } from 'react'
import GroupsJoined from './GroupsJoined'
import GroupsVisit from './GroupsVisit'

const Groups = () => {
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
       <Typography variant='h5' sx={{textAlign:'center',backgroundColor:'#e0e0e0'}}>Groups</Typography>
       
       <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
   <Typography>Groups you manage</Typography>
   <GroupsJoined/>
   <GroupsJoined/>
   <GroupsJoined/>
   <GroupsJoined/>
   <GroupsJoined/>
   <GroupsJoined/>
   <GroupsJoined/>
   <GroupsJoined/>
   <GroupsJoined/>
   <GroupsJoined/>
   <GroupsJoined/>
   <GroupsJoined/>
  </Grid>

  <Grid item xs={6}>
    <GroupsVisit/>
  </Grid>
  </Grid>
      </>
    )}
  </Box>
  )
}

export default Groups