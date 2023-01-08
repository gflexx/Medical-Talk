import { Typography } from '@mui/material'
import React from 'react'
import MiniBlogCard from './MiniBlogCard'

function TopBlogs(props) {
    return (
        <div style={{marginBottom: '0.9em'}}>
            <Typography variant='h6' fontWeight={300} marginBottom={0.9}>Top Blogs</Typography>
            <MiniBlogCard/>
            <MiniBlogCard/>
            <MiniBlogCard/>
        </div>
    )
}

export default TopBlogs