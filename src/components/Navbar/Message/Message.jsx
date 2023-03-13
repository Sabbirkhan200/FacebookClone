import {  Mail } from '@mui/icons-material'
import { Avatar, Badge,  ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, Typography } from '@mui/material'
import React, { useState } from 'react'

const Message = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
            <Badge badgeContent={3} color="error">
            <Mail  onClick={(e) => setOpen(true)}/>
          </Badge>
          <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
          
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
     
      >
      <Typography sx={{textAlign:'center'}}>Inbox</Typography>
      <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
          <Avatar alt="Remy Sharp" src="pic/bitul.jpg" />
          </Badge>
        </ListItemIcon>
        <div >
        <ListItemText primary="Bitul Boisnob" />
        <Typography sx={{fontSize:12}}>
      Hi,bondhu Kamon asho?
      </Typography>
        </div>
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
          <Avatar alt="Remy Sharp" src="pic/jim.jpg" />
          </Badge>
        </ListItemIcon>
        <div >
        <ListItemText primary="Maherab khan jim" />
        <Typography sx={{fontSize:12}}>
      ki re Koi Tue?
      </Typography>
        </div>
      </ListItemButton>
    </ListItem>     <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
          <Avatar alt="Remy Sharp" src="pic/sokot.jfif" />
          </Badge>
        </ListItemIcon>
        <div >
        <ListItemText primary="Arafin Islam Shaikat" />
        <Typography sx={{fontSize:12}}>
      audio call from Arafin Islam Shaikat
      </Typography>
        </div>
      </ListItemButton>
    </ListItem>     <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
          <Avatar alt="Remy Sharp" src="pic/rakib.jpg" />
          </Badge>
        </ListItemIcon>
        <div >
        <ListItemText primary="Md Rakibul Islam" />
        <Typography sx={{fontSize:12}}>
        You:ki koros
      </Typography>
        </div>
      </ListItemButton>
    </ListItem>     <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
          <Avatar alt="Remy Sharp" src="pic/rafsan.jpg" />
          </Badge>
        </ListItemIcon>
        <div >
        <ListItemText primary="kamran rafsan" />
        <Typography sx={{fontSize:12}}>
     You:vai Tk lagbe
      </Typography>
        </div>
      </ListItemButton>
    </ListItem>     <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
          <Avatar alt="Remy Sharp" src="pic/Sabbir-1.jpg" />
          </Badge>
        </ListItemIcon>
        <div >
        <ListItemText primary="Md Sabbir Khan" />
        <Typography sx={{fontSize:12}}>
        Heading
      </Typography>
        </div>
      </ListItemButton>
    </ListItem>     <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
          <Avatar alt="Remy Sharp" src="pic/Sabbir-1.jpg" />
          </Badge>
        </ListItemIcon>
        <div >
        <ListItemText primary="Md Sabbir Khan" />
        <Typography sx={{fontSize:12}}>
        Heading
      </Typography>
        </div>
      </ListItemButton>
    </ListItem>     <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
          <Avatar alt="Remy Sharp" src="pic/Sabbir-1.jpg" />
          </Badge>
        </ListItemIcon>
        <div >
        <ListItemText primary="Md Sabbir Khan" />
        <Typography sx={{fontSize:12}}>
        Heading
      </Typography>
        </div>
      </ListItemButton>
    </ListItem>     <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
          <Avatar alt="Remy Sharp" src="pic/Sabbir-1.jpg" />
          </Badge>
        </ListItemIcon>
        <div >
        <ListItemText primary="Md Sabbir Khan" />
        <Typography sx={{fontSize:12}}>
        Heading
      </Typography>
        </div>
      </ListItemButton>
    </ListItem>
    </Menu>
    </div>
  )
}

export default Message
