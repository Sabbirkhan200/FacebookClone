import { Avatar, Box,  Grid, Stack } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import MoodIcon from '@mui/icons-material/Mood'

import InputAdornment from '@mui/material/InputAdornment'
import SearchRounded from '@mui/icons-material/SearchRounded'

import LiveVideo from './LiveVideo/LiveVideo'

import FeelingActivat from './FeelingActivate/FeelingActivat'
import PhotoVideo from './PhotoVideo/PhotoVideo'
const PostBar = () => {
  return (
    <Box
      Container
      sx={{
     

        margin: 5,
      }}
    >
      <Grid
        Container
        sx={{
          display: 'flex',

          '&:hovor': {
            backgroundColor: 'primary.light',
          },
          width: '12',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <Avatar
          alt="Remy Sharp"
          variant="square"
          src="pic/Sabbir-1.jpg"
          sx={{ width: 60, height: 60 }}
        />

        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="What's your mind? "
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchRounded sx={{ my: 0.5 }} />
              </InputAdornment>
              
            ),
            
          }}
          sx={{
            width: '80%',
            borderRadius: 1,
            border: 'white',
            '& .MuiInputBase-input': {
              height: '29px',
            },
          }}
          
          
        />
        <Button variant="outlined" style={{ height: '60px', width: 80 }}>
          Post
        </Button>
      </Grid>
      <Stack direction="row" spacing={8}>
        <Button variant="" startIcon={<PhotoLibraryIcon />}>
          <PhotoVideo/>
        </Button>
        <Button variant="" startIcon={<MoodIcon />}>
        <FeelingActivat/>
        </Button>
    
         <LiveVideo/>
      
      </Stack>
    </Box>
  )
}

export default PostBar
