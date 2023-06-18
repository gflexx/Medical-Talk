import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import usersServices from '../../services/UsersServices'

function UsersTab(props) {
    const [users, setUsers] = useState([])
    useEffect(() => {
        usersServices.getUsers().then(
            res => {
                setUsers(res.data)
            },
            err => {
                console.log(err);
            }
        )
    }, [])
    return (
        <Box
            flex={6}
            padding={2}
        >
            <Typography variant='h6' fontWeight={400} marginBottom={0.9}>Users tab</Typography>
            <TableContainer>
                <Table aria-label="Users Table">
                    <TableHead>
                        <TableRow>
                            <TableCell>No.</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Username</TableCell>
                            <TableCell>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{idx + 1} .</TableCell>
                                <TableCell>{user?.name}</TableCell>
                                <TableCell>{user?.username}</TableCell>
                                <TableCell>{user?.email}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                
            </TableContainer>
        </Box>
    )
}

export default UsersTab