import { useState } from 'react'
import Home from './pages/Home'
import Other from './pages/Other'
import Vans from './pages/Vans'
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
            <Link to="/vans">Vans</Link>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Other />} />
          <Route path='/vans' element={<Vans />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
