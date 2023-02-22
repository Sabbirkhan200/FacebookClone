import { Avatar, Box, Card, Grid, Stack } from '@mui/material'
import React from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary'
import MoodIcon from '@mui/icons-material/Mood'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import InputAdornment from '@mui/material/InputAdornment'
import SearchRounded from '@mui/icons-material/SearchRounded'
const PostBar = () => {
  return (
    <Box
      Container
      sx={{
        // backgroundColor: '#131313',

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
          placeholder="Search "
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
      <Stack direction="row" spacing={6}>
        <Button variant="" startIcon={<PhotoLibraryIcon />}>
          Photo
        </Button>
        <Button variant="" startIcon={<MoodIcon />}>
          Feeling/Activity
        </Button>{' '}
        <Button variant="" startIcon={<LocalOfferIcon />}>
          Tag
        </Button>
      </Stack>
    </Box>
  )
}

export default PostBar
