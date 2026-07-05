import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Logo from './assets/logo_final.png'
import Banner from './assets/Final-Banner.png'
import './App.css' 
import Gallery from './Gallery'


function App() {
  return (
    <div className="container">
      <nav className="nav">
         <img src={Logo} alt="Palvee's Cake Creation logo" className="logo"/>
        <ul className="navul">
          <li><a href="#Home">Home</a></li>
          <li><a href="#Gallery">Gallery</a></li>
          <li><a href="#Contact">Contact</a></li>
        </ul>


        <section id="Home">
        <img src={Banner} alt="Palvee's cakes and cupcakes banner" className="hero-banner" />
        <h2>Welcome to Palvee's Cake Creations!</h2>
        <p className='intro'>Beautiful 100% Eggless Cakes & Cupcakes in Sydney</p>
        <p className ='intro_paragraph_1'>Welcome to Palvee’s Cake Creation, where every cake is handcrafted with love and made 100% eggless.</p>
        <p className ='intro_Offer'>From elegant celebration cakes to delicious cupcakes and sweet treats, each order is freshly baked using quality ingredients and decorated with care. Whether you’re celebrating a birthday, anniversary, baby shower, or another special occasion, we’re here to make your celebration even sweeter.</p>
        <p className ='intro_Offer'>What we offer:</p>
        <ul className ='Offer_List'>

        <li>🎂 Custom Celebration Cakes</li>
        <li>🧁 Eggless Cupcakes</li>
        <li>🍓 Mini Cupcakes</li>
        <li>🍞 Mini Loaf Cakes</li>
        <li>🎉 Cakes for Birthdays, Baby Showers, Weddings, and Special Events</li>
        </ul>
        <p className='Offer_conclusion'>Freshly baked • Beautifully decorated • 100% Eggless</p>
        </section>

        <section id='Cakes'>
        <p className='intro'>Cakes</p>




        </section>
      </nav>
    </div>
  )
}

export default App