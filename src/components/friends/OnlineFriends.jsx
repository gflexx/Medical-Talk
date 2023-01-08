import { Avatar, AvatarGroup, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/logo.png'

function OnlineFriends(props) {
    return (
        <div style={{marginBottom: '0.9em'}}>
            <Typography variant='h6' fontWeight={300} marginBottom={0.9}>Online Friends</Typography>
            <AvatarGroup max={7}>
                <Avatar alt='Remy' src=""/>
                <Avatar alt='Remy Ma' src={logo}/>
                <Avatar alt='J cole' src=""/>
                <Avatar alt='Kendrick' src={logo}/>
                <Avatar alt='Drake' src={logo}/>
                <Avatar alt='Remy' src=""/>
                <Avatar alt='Remy Jean' src={logo}/>
                <Avatar alt='Kemy' src={logo}/>
            </AvatarGroup>
        </div>
    )
}

export default OnlineFriends