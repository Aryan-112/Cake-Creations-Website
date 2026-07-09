import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import Logo from './assets/logo_final.png'
import Home from './Home'
import Gallery from './Gallery'
import Contact from './Contact'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <nav className="nav">
          <img src={Logo} alt="Palvee's Cake Creation logo" className="logo"/>
          <ul className="navul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Analytics />
    </BrowserRouter>
  )
}

export default App