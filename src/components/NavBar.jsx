import { AppBar, Box, InputBase, styled, Toolbar, Typography, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import React, { useState } from 'react'
import { Mail, Notifications } from '@mui/icons-material';
import logo from '../assets/logo.png'

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
})

const SearchBar = styled("div")(({theme}) => ({
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    background: "white",
    color: "black",
    width: "45%"
}))

const Icons = styled(Box)(({theme}) => ({
    display: "none",
    gap: "18px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "flex"
    }
}))

const SmallIcons = styled(Box)(({theme}) => ({
    display: "flex",
    gap: "12.6px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))

function NavBar() {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StyledToolBar>
                <Typography variant='h6' sx={{display: {xs: "none", sm: "block"}}}>G</Typography>
                <RocketLaunchIcon sx={{display: {xs: "block", sm: "none"}}}/>
                <SearchBar>
                    <InputBase placeholder='Search...'/>
                </SearchBar>
                <Icons>
                    <Badge color="error" badgeContent={4}>
                        <Mail/>
                    </Badge>
                    <Badge color="error" badgeContent={4}>
                        <Notifications/>
                    </Badge>
                    <Avatar
                        onClick={e => setOpen(true)} 
                        src={logo}/>
                </Icons>
                <SmallIcons>
                    <Avatar src={logo}/>
                    <Typography>Glen</Typography>
                </SmallIcons>
                <Menu
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    open={open}
                    onClose={e => setOpen(false)}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                >
                    <MenuItem >Profile</MenuItem>
                    <MenuItem>My account</MenuItem>
                    <MenuItem>Logout</MenuItem>
                </Menu>
            </StyledToolBar>
        </AppBar>
    )
}

export default NavBar