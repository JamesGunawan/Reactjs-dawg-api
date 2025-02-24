import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import About from './components/pages/About';
import MainDawg from './components/pages/DisplayDawg';

function App() {

  return (
    <>
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MainDawg/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
