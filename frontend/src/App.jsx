import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import JoinUsPage from './pages/Joinus'
import ProfilePage from './pages/Profile'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Login' element={<LoginPage />}></Route>
      <Route path='/Joinus' element={<JoinUsPage />}></Route>
      <Route path='/profile' element={<ProfilePage />}></Route>


    </Routes>
    </>
  )
}

export default App