import { Home } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import ChatIcon from '@mui/icons-material/Chat';
import BookIcon from '@mui/icons-material/Book';
import PersonIcon from '@mui/icons-material/Person';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SettingsIcon from '@mui/icons-material/Settings';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import MedicationIcon from '@mui/icons-material/Medication';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import React from 'react'

function SideBar(props) {
  return (
    <Box 
        sx={{display: {xs: "none", sm: "block"}}}
        flex={1}
        padding={2}
    >
        <Box position="fixed">
            <List>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='/'>
                        <ListItemIcon>
                            <Home/>
                        </ListItemIcon>
                        <ListItemText primary='Home'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon>
                            <BookIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Blogs'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon>
                            <MedicationIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Doctors'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon>
                            <FitnessCenterIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Fitness'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon>
                            <ChatIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Chats'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon>
                            <Diversity3Icon/>
                        </ListItemIcon>
                        <ListItemText primary='Groups'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon>
                            <PersonIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Profile'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='/admin'>
                        <ListItemIcon>
                            <AdminPanelSettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Admin'/>
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href='#'>
                        <ListItemIcon>
                            <SettingsIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Settings'/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </Box>
  )
}

export default SideBar