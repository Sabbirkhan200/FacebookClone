import {     Notifications,  People,  ThumbUpOffAltOutlined } from '@mui/icons-material'
import { Avatar, Badge,  Button,    CardActions,  CardContent,  CardHeader,   ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, Typography } from '@mui/material'
import React, { useState } from 'react'

const PeoplePost = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
         
            <People  onClick={(e) => setOpen(true)}/>
         
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
      <Typography sx={{textAlign:'center',fontSize:20}}>People</Typography>
{/* // */}
     
      <CardContent>
      <CardHeader
        avatar={
         
          <Avatar alt="jim khan" src="pic/bitul.jpg" sizes='large'  sx={{ width: 56, height: 56 }}/>
        
        }
      
        title="Bitul Boisnob "
        subheader="Entrepreneur"
   
      />
     <Typography sx={{fontSize:12}} >
        Connected 2 month ago
        
        </Typography>
      </CardContent>
 


      <CardContent>
      <CardHeader
        avatar={
         
          <Avatar alt="jim khan" src="pic/bitul.jpg" sizes='large'  sx={{ width: 56, height: 56 }}/>
        
        }
      
        title="Bitul Boisnob "
        subheader="Entrepreneur"
   
      />
     <Typography sx={{fontSize:12}} >
        Connected 2 month ago
        
        </Typography>
      </CardContent>
      <CardContent>
      <CardHeader
        avatar={
         
          <Avatar alt="jim khan" src="pic/bitul.jpg" sizes='large'  sx={{ width: 56, height: 56 }}/>
        
        }
      
        title="Bitul Boisnob "
        subheader="Entrepreneur"
   
      />
     <Typography sx={{fontSize:12}} >
        Connected 2 month ago
        
        </Typography>
      </CardContent>
      <CardContent>
      <CardHeader
        avatar={
         
          <Avatar alt="jim khan" src="pic/bitul.jpg" sizes='large'  sx={{ width: 56, height: 56 }}/>
        
        }
      
        title="Bitul Boisnob "
        subheader="Entrepreneur"
   
      />
     <Typography sx={{fontSize:12}} >
        Connected 2 month ago
        
        </Typography>
      </CardContent>
    </Menu>
    </div>
  )
}

export default PeoplePost
