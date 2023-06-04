import React from 'react'
import NavBar from './components/nav/NavBar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AdminPanelPage from './pages/auth/AdminPanelPage'

function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/admin' element={<AdminPanelPage/>}/>
      </Routes>
    </div>
  )
}

export default App
