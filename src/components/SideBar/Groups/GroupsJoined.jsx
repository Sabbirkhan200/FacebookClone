import { ArrowForwardIos } from '@mui/icons-material'
import { Avatar, Card, CardHeader, IconButton } from '@mui/material'
import React from 'react'

const GroupsJoined = () => {
  return (
    <div>
        <Card>
   <CardHeader
        avatar={
          <Avatar variant="rounded" src='/pic/Mabias.jpg'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
       <ArrowForwardIos/>
          </IconButton>
        }
        title="Mabias"
        subheader="Last 1 hours age active"
      />
 
   </Card>
    </div>
  )
}

export default GroupsJoined