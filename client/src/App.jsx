import React from 'react'
import Home from './pages/Home'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import SignIn from './pages/SignIn'
import Profile from './pages/Profile'
import Signup from './pages/SignUp'
import About from './pages/About'
import Header from './components/Header'
function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
