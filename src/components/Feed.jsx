import { Box } from '@mui/material'
import React from 'react'
import BlogItem from './blogs/BlogItem'

function Feed() {
  return (
    <Box flex={4} p={4} gap={1}>
      <BlogItem/>
      <BlogItem/>
      <BlogItem/>
      <BlogItem/>
      <BlogItem/>
    </Box>
  )
}

export default Feed