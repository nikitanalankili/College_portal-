import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Togglebutton from './components/Togglebutton'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Attendance from './components/Attendance'

function App() {
  return(
    <>
    <Router>
            <Header />
            <Routes>
                <Route path="/attendance" element={<Attendance></Attendance>} />
                <Route path="/" element={<Togglebutton></Togglebutton>} />
            </Routes>
        </Router>
   
    </>
  )
}

export default App
