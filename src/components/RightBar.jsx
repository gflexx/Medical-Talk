import { Box } from '@mui/material'
import React from 'react'

function RightBar() {
  return (
    <Box 
        sx={{display: {xs: "none", sm: "block"}}}
        flex={2} 
        bgcolor='cyan' 
        p={2}
    >RightBar</Box>
  )
}

export default RightBar