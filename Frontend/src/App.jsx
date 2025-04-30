import { useState } from 'react'

import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';
import Home from './home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import { useAuth } from './context/AuthProvider';


function App() {
  let [authUser, setAuthUser] = useAuth()
  console.log(authUser)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={authUser? <Courses /> : <Navigate to='/signup' />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App
