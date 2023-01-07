import { Box } from '@mui/material'
import React from 'react'
import BlogCategories from '../blogs/BlogCategories'
import TopBlogs from '../blogs/TopBlogs'
import OnlineFriends from '../friends/OnlineFriends'

function RightBar() {
  return (
    <Box 
        sx={{display: {xs: "none", sm: "block"}}}
        flex={2} 
        p={2}
    >
        <Box position='fixed'>
            <OnlineFriends/>
            <TopBlogs/>
            <BlogCategories/>
        </Box>
    </Box>
  )
}

export default RightBar