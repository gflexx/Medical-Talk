import { Stack, Typography } from '@mui/material'
import React from 'react'

function BlogCategories(props) {
    return (
        <div>
            <Typography variant='h6' fontWeight={300} marginBottom={0.9}>Blog Categories</Typography>
            <Stack spacing={0.9} marginBottom={3}>
                <Typography component='a'>Corona</Typography>
                <Typography component='a'>Diseases</Typography>
                <Typography component='a'>Excercise</Typography>
                <Typography component='a'>Child Health</Typography>
                <Typography component='a'>Mental Health</Typography>
                <Typography component='a'>Sexually Transmitted Diseases</Typography>
            </Stack>
        </div>
    )
}

export default BlogCategories