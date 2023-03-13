import {
  AddToPhotos,
  Comment,

  EmojiEmotions,

  ForwardToInboxOutlined,
  GroupAddOutlined,
  HideImage,
  Image,
  MoreVert,
  Newspaper,
  Redo,
  ReportProblem,
  SaveAltOutlined,
  Send,
  Share,
  ShareOutlined,
  ThumbUp,
  ThumbUpOffAlt,
  VideoCameraBack,
} from '@mui/icons-material'
import {
  Avatar,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material'

import { Box } from '@mui/system'
import { useState } from 'react'

const SytledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const UserBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '20px',
})

const Post = () => {
  const [open, setOpen] = useState(false)
  const [openn, setOpenn] = useState(false)
  const [opennn, setOpennn] = useState(false)
  return (
    <Card sx={{ margin: 5, borderRadius: 5 }}>
      <CardHeader
        avatar={<Avatar alt="Cindy Baker" src="/pic/Sabbir-1.jpg" />}
        action={

          <IconButton >

            <MoreVert  onClick={(e) => setOpennn(true)}/>
            <SytledModal
        open={opennn}
        onClose={(e) => setOpennn(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={200}
          height={200}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={5}
        >
       
     
       
          <Stack direction="row" >
          <List>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <SaveAltOutlined />
              </ListItemIcon>
              <ListItemText primary="Save Post" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <HideImage />
              </ListItemIcon>
              <ListItemText primary="Hide Post" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <AddToPhotos />
              </ListItemIcon>
              <ListItemText primary="Unfollow" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <ReportProblem />
              </ListItemIcon>
              <ListItemText primary="Report post" />
            </ListItemButton>
          </ListItem>
          </List>
          
          </Stack>
       
        </Box>
      </SytledModal>
          </IconButton>

        }
        title="Sabbir Khan"
        subheader="September 14, 2022"
      />
      <CardContent>
        <Typography variant="body2">
      Kamon Hoise Bondhu ra 
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="20%"
        src="/pic/sabbr-2.jpg"
        alt="Paella dish"
      />

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<ThumbUpOffAlt />}
            checkedIcon={<ThumbUp sx={{ color: 'red' }} />}
          />
          <Typography>Like</Typography>
          
        </IconButton>
        {/* Comment...................... */}
        <IconButton >
        <Typography onClick={(e) => setOpen(true)} sx={{display:'flex'}}>
          <Comment  />
          <Typography>Comment</Typography>
             </Typography>
          <SytledModal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
           Comment
          </Typography>
          <UserBox>
            <Avatar
              src="pic/Sabbir-1.jpg"
              sx={{ width: 30, height: 30 }}
            />
            <Typography fontWeight={500} variant="span">
              Sabbir khan
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: '100%' }}
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="What's on your mind?"
            variant="standard"
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
          
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Comment</Button>
          
          </ButtonGroup>
        </Box>
      </SytledModal>
        </IconButton>

        {/* share.................... */}

        <IconButton aria-label="share">
          <Share />
          <Typography onClick={(e) => setOpenn(true)}>Share</Typography>

          <SytledModal
        open={openn}
        onClose={(e) => setOpenn(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={300}
          height={300}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={5}
        >
          <Typography variant="h6" color="gray" textAlign="center">
         Share Now
          </Typography>
     
       
          <Stack direction="row" gap={1} mt={2} mb={3}>
          <List>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Redo />
              </ListItemIcon>
              <ListItemText primary="Share Now (Public)" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Newspaper />
              </ListItemIcon>
              <ListItemText primary="Share To Feed" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <ForwardToInboxOutlined />
              </ListItemIcon>
              <ListItemText primary="Share to Message" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <GroupAddOutlined />
              </ListItemIcon>
              <ListItemText primary="Share To Groups" />
            </ListItemButton>
          </ListItem>
          </List>
          
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button>Share</Button>
         
          </ButtonGroup>
        </Box>
      </SytledModal>
        </IconButton>

{/* Inbox............ */}
    
      </CardActions>
    </Card>
  )
}

export default Post
