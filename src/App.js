import { Stack } from '@mui/material'
import React from 'react'
import Feed from './components/Feed'
import NavBar from './components/NavBar'
import RightBar from './components/RightBar'
import SideBar from './components/SideBar'

function App() {
  return (
    <div>
      <NavBar/>
      <Stack 
        direction={'row'} 
        spacing={{xs : 0, sm: 0, md: 3}}
        marginTop={3} 
        justifyContent={'space-between'}>
        <SideBar/>
        <Feed/>
        <RightBar/>
      </Stack>
    </div>
  )
}

export default App
