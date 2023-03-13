import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Badge, Typography } from '@mui/material';



export default function RecipeReviewCard() {
 


  return (
    <Card sx={{ Width: 345 ,m:5}}>
      <CardHeader
        avatar={
            <Badge color="success" overlap="circular" badgeContent=" " >
 

          <Avatar
  alt="Remy Sharp"
  src="/pic/bitul.jpg"
  sx={{ width: 56, height: 56 }}
/></Badge>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Bitul Boisnob"
        subheader="Entrepreneur"
      />
   <Typography sx={{fontSize:15}}>Connected 2 month ago</Typography>

 
 
    </Card>
  );
}