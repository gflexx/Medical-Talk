import { Home } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

function SideBar() {
  return (
    <Box 
        sx={{display: {xs: "none", sm: "block"}}}
        flex={1}
        p={2}
    >
        <List>
            <ListItem disablePadding>
                <ListItemButton component='a' href='#'>
                    <ListItemIcon>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary='Home'/>
                </ListItemButton>
            </ListItem>
        </List>
    </Box>
  )
}

export default SideBar