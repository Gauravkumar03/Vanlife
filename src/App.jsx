import { useState } from 'react'
import Home from './pages/Home'
import Other from './pages/Other'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <Link className="site-logo" to="/">#VanLife</Link>
          <nav>
            <Link to="/about">About</Link>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Other />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
