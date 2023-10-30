import React from 'react'
import Home from './pages/Home'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import SignIn from './pages/Signin'
import Profile from './pages/Profile'
import Signup from './pages/SignUp'
import About from './pages/About'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/sign-up" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
