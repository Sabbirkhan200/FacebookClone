import { Box, Typography, Switch } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed" width={400}>
        <Typography variant="h6" fontWeight={100}>
          <Switch />
          Online Friends
        </Typography>
      </Box>
    </Box>
  )
}

export default Rightbar
