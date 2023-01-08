import { Stack } from '@mui/material'
import React from 'react'
import Feed from './components/Feed'
import NavBar from './components/nav/NavBar'
import RightBar from './components/nav/RightBar'
import SideBar from './components/nav/SideBar'

function App() {
  return (
    <div>
      <NavBar/>
      <Stack 
        direction={'row'} 
        spacing={{xs : 0, sm: 0, md: 3}}
        marginTop={1.8} 
        justifyContent={'space-between'}>
        <SideBar/>
        <Feed/>
        <RightBar/>
      </Stack>
    </div>
  )
}

export default App
