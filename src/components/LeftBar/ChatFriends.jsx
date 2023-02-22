import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Avatar,
} from '@mui/material'

import React from 'react'

const ChatFriends = () => {
  return (
    <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
          <Avatar alt="Remy Sharp" src="pic/Sabbir-1.jpg" />
        </ListItemIcon>
        <ListItemText primary="Md Sabbir Khan" />
      </ListItemButton>
    </ListItem>
  )
}

export default ChatFriends
