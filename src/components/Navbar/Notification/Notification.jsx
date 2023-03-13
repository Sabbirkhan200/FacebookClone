import {     Notifications,  ThumbUpOffAltOutlined } from '@mui/icons-material'
import { Avatar, Badge,  Button,    CardActions,  CardContent,  CardHeader,   ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, Typography } from '@mui/material'
import React, { useState } from 'react'

const Notification = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
            <Badge badgeContent={3} color="error">
            <Notifications  onClick={(e) => setOpen(true)}/>
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
      <Typography sx={{textAlign:'center',fontSize:20}}>Notification</Typography>
{/* // */}
     
      <CardContent>
      <CardHeader
        avatar={
         
          <Avatar alt="jim khan" src="pic/bitul.jpg" sizes='large'  sx={{ width: 56, height: 56 }}/>
        
        }
      
        title="Bitul Boisnob "
        subheader="1 hours ago"
      />
     
    
        <Typography variant="h6">
        sent a friends request
        
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant='contained'>Accept</Button> 
      <Button variant='outlined'>Delete</Button>
      </CardActions>

{/* ....... */}
<CardContent>
      <CardHeader
        avatar={
         
          <Avatar alt="jim khan" src="pic/jim.jpg" sizes='large'  sx={{ width: 56, height: 56 }}/>
        
        }
      
        title="Maherab khan jim"
        subheader="just now"
      />
     
    
        <Typography sx={{fontSize:12}}>
        <ThumbUpOffAltOutlined/>
         likes your post : my frist video
        
        </Typography>
      </CardContent>

        <ListItem disablePadding>
      <ListItemButton component="a" href="#simple-list">
        <ListItemIcon>
        <Badge color="success" overlap="circular" badgeContent=" " variant="dot">
          <Avatar alt="Remy Sharp" src="pic/sokot.jfif" />
          </Badge>
        </ListItemIcon>
        <div >
        <ListItemText primary="Arafin Islam Shaikat" />
        <Typography sx={{fontSize:12}}>
        tagged a post a few minute ago
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
       Share a post 
      </Typography>
        </div>
      </ListItemButton>
    </ListItem>   
    </Menu>
    </div>
  )
}

export default Notification
