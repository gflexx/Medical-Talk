import React from 'react'
import { Stack } from '@mui/material'
import SideBar from '../components/nav/SideBar'
import Feed from '../components/Feed'
import RightBar from '../components/nav/RightBar'

function HomePage(props) {
    return (
        <div>
            <Stack 
                direction={'row'} 
                spacing={{xs : 0, sm: 0, md: 3}}
                marginTop={1.8} 
                justifyContent={'space-between'}>
                <SideBar/>
                <Feed/>
                <RightBar/>
            </Stack>
        </div>
    )
}

export default HomePage