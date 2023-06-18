import { Box, Typography } from '@mui/material'
import React from 'react'

function UsersTab(props) {
    return (
        <Box
            flex={6}
            padding={2}
        >
            <Typography variant='h6' fontWeight={400} marginBottom={0.9}>Users tab</Typography>
        </Box>
    )
}

export default UsersTab