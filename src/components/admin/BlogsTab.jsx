import { Box, Typography } from '@mui/material'
import React from 'react'

function BlogsTab(props) {
    return (
        <Box
            flex={6}
            padding={2}
        >
            <Typography variant='h6' fontWeight={500} marginBottom={0.9}>Blogs tab</Typography>
        </Box>
    )
}

export default BlogsTab