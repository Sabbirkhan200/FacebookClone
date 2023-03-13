import {      ShoppingCart,  ThumbUpOffAltOutlined } from '@mui/icons-material'
import { Avatar, Badge,  Button,    CardActions,  CardContent,  CardHeader,   ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, Typography } from '@mui/material'
import React, { useState } from 'react'

const Marketplace = () => {
    const [open, setOpen] = useState(false)
  return (
    <div>
           
            <ShoppingCart  onClick={(e) => setOpen(true)}/>
      
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
      <Typography sx={{textAlign:'center',fontSize:20}}>ShoppingCart</Typography>
{/* // */}
     
      <CardContent>
      <CardHeader
        avatar={
         
          <Avatar alt="jim khan" src="pic/bitul.jpg" sizes='large'  sx={{ width: 56, height: 56 }}/>
        
        }
      
        title="Bitul Boisnob "
        subheader="1 hours ago"
      />
     
    
        <Typography >
      Add a product to mabias
        
        </Typography>
      </CardContent>
      <CardActions>
 
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
     
    
        <Typography >
Add a Product to mabias
        
        </Typography>
      </CardContent>

     
    </Menu>
    </div>
  )
}

export default Marketplace
