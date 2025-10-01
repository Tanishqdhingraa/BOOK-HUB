import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { motion } from "motion/react"
import Home from './home/Home'
import Course from './components/Course'
import Courses from './courses/Courses'
import Login1  from './assets/login/Login1'
import Signup from './components/Signup'
import Chats from './assets/Chats'
import About from './components/about'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<Courses/>} />
        <Route path="Login1" element={<Login1/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Chats" element={<Chats />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
