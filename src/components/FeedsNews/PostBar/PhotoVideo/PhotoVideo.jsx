import {  EmojiEmotions, Image, VideoCameraBack,CloseFullscreen } from '@mui/icons-material'
import { Avatar,  Button, ButtonGroup, Card,  CardHeader, CardMedia, IconButton, ListItemAvatar, Modal, Stack, styled, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import BasicSelect from './SelectPublic'

const SytledModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  })
  

const PhotoVideo = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
          <IconButton >
        <Typography onClick={(e) => setOpen(true)} sx={{display:'flex'}}>
        
          <Button variant=''>Photo/Video</Button>
             </Typography>
          <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={450}
          height={450}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={1}
        >
          <Typography variant="h6" color="gray" textAlign="center">
       Create Post
          </Typography>
          <CardHeader
        avatar={
            <Avatar  src="/pic/Sabbir-1.jpg" />
        }
      
        title="Sabbir khan"
        subheader={<BasicSelect/>}
      />
          <TextField
            sx={{ width: '100%' }}
            id="standard-multiline-static"
        
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />

<Card sx={{ maxWidth: 450 }}>
<CardHeader
     
        action={
          <IconButton aria-label="settings">
           
          </IconButton>
        }
    
      />
      <CardMedia
        component="img"
        height="154"
        image="/pic/Sabbir-1.jpg"
     sx={{borderRadius:1}}
      />
   
        
    
 
    </Card>
          <Stack direction="row" gap={1} mt={2} mb={3} sx={{textAlign:'center'}}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
          
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Post</Button>
          
          </ButtonGroup>
        </Box>
      </SytledModal>
        </IconButton>
    </div>
  )
}

export default PhotoVideo
