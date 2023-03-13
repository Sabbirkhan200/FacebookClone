import { Box, Typography, Switch } from '@mui/material'

import React from 'react'
import ChatFriends from './ChatFriends'

const Rightbar = () => {
  return (
    <Box flex={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="absolute" width={270}>
        <Typography variant="h6" fontWeight={100}>
          <Switch />
          Online Friends
        </Typography>
        <ChatFriends />
        <ChatFriends />
        <ChatFriends />
        <ChatFriends />
        <ChatFriends />
        <ChatFriends />
        <ChatFriends />
        <ChatFriends />
        <ChatFriends />
      </Box>
    </Box>
  )
}

export default Rightbar
