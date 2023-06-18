import React, { useEffect } from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import BookIcon from '@mui/icons-material/Book';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import CoronavirusIcon from '@mui/icons-material/Coronavirus';

function AdminSideBar(props) {
    const activeTab = props.activeTab
    useEffect(() => {}, [activeTab])
    return (
        <Box
            sx={{display: {xs: "none", sm: "block"}}}
            flex={1}
            padding={2} 
        >
            <Box position="fixed">
                <List>
                    <ListItem 
                        selected={activeTab === 0 ? true : false}
                        onClick={() => props.changeTab(0)}
                        disablePadding>
                        <ListItemButton component='a'>
                            <ListItemIcon>
                                <PeopleAltIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Users'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem 
                        selected={activeTab === 1 ? true : false}
                        onClick={() => props.changeTab(1)}
                        disablePadding>
                        <ListItemButton component='a'>
                            <ListItemIcon>
                                <VaccinesIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Doctors'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem 
                        selected={activeTab === 2 ? true : false}
                        onClick={() => props.changeTab(2)}
                        disablePadding>
                        <ListItemButton component='a'>
                            <ListItemIcon>
                                <LocalHospitalIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Hospitals'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem 
                        selected={activeTab === 3 ? true : false}
                        onClick={() => props.changeTab(3)}
                        disablePadding>
                        <ListItemButton component='a'>
                            <ListItemIcon>
                                <CoronavirusIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Diseases'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem 
                        selected={activeTab === 4 ? true : false}
                        onClick={() => props.changeTab(4)}
                        disablePadding>
                        <ListItemButton component='a'>
                            <ListItemIcon>
                                <BookIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Blogs'/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component='a'>
                            <ListItemIcon>
                                <FitnessCenterIcon/>
                            </ListItemIcon>
                            <ListItemText primary='Fitness'/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default AdminSideBar