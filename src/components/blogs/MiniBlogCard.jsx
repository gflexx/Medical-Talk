import { Box, Card, CardMedia, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/logo.png'

function MiniBlogCard(props) {
  return (
    <Card 
        sx={{display: "flex", marginBottom: 0.9, padding: 1}}
    >
        <CardMedia
            component="img"
            alt='Blog title'
            image={logo}
            sx={{height: 54, width: 54}}
        />
        <Box>
            <Typography component='h6' p={1} fontWeight={500}>Blog Title</Typography>
        </Box>
    </Card>
  )
}

export default MiniBlogCard