import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const GroupsVisit = () => {
  return (
    <Box>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/pic/Mabias2.jpg"
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight:'bold'}}>
           Mabias
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Information Technology Company
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button variant='outlined' size="small" color="primary" >
      Join
        </Button>
      </CardActions>
    </Card>
    </Box>
  )
}

export default GroupsVisit