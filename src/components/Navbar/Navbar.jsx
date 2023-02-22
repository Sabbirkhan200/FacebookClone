import {
  Home,
  Logout,
  Mail,
  Notifications,
  People,
  PersonAdd,
  Settings,
  ShoppingCart,
} from '@mui/icons-material'
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Divider,
  InputBase,
  ListItemIcon,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: 'white',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width: '40%',
}))

const Icons = styled(Box)(({ theme }) => ({
  display: 'none',
  alignItems: 'center',
  gap: '20px',
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}))

const UserBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}))
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky" style={{ backgroundColor: 'black' }}>
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: 'none', sm: 'block' } }}>
          <img src="pic/logo _2-05.png" />
        </Typography>

        <Typography sx={{ display: { xs: 'block', sm: 'none' } }}>
          <img src="pic/logo _2-05.png" />
        </Typography>

        <Search>
          <InputBase placeholder="search..." />
        </Search>

        <Icons>
          <Home />

          <People />

          <ShoppingCart />

          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Badge badgeContent={3} color="error">
            <Mail />
          </Badge>

          <Avatar
            sx={{ width: 30, height: 30 }}
            src="pic/Sabbir-1.jpg"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar sx={{ width: 30, height: 30 }} src="pic/Sabbir-1.jpg" />
          <Typography variant="span">Sabbir khan</Typography>
        </UserBox>
      </StyledToolbar>
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
        <MenuItem>
          <Avatar src="pic/Sabbir-1.jpg" /> Profile
        </MenuItem>
        <MenuItem>
          <Avatar src="pic/Sabbir-1.jpg" /> My account
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
