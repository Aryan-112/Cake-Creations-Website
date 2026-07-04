import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div className="container">
      <nav className="nav">
        <h1>Palvee's Cake Creations</h1>
        <ul className="navul">
          <li><a href="#Home">Home</a></li>
          <li><a href="#Cakes">Cakes</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default App