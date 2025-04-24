import { useState } from 'react'

import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './home/Home';
import Courses from './courses/Courses';
import Singup from './components/Singup';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Courses />} />
        <Route path='/singup' element={<Singup />} />
      </Routes>
    </>
  )
}

export default App
