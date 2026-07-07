import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Logo from './assets/logo_final.png'
import Banner from './assets/Final-Banner.png'
import Eggless from './assets/sticker_eggless_cakes_final.png'
import sticker1 from './assets/sticker_palvees_cake_final.png'
import './App.css' 
import Gallery from './Gallery'


function Home() {
    const sizes = [
    { size: '5 inch', serves: '6–8 people', price: '$70' },
    { size: '6 inch', serves: '10–12 people', price: '$80' },
    { size: '7 inch', serves: '15–18 people', price: '$100' },
    { size: '8 inch', serves: '20–25 people', price: '$120' },
    { size: '9 inch', serves: '28–32 people', price: '$150' },
    { size: '10 inch', serves: '35–40 people', price: '$180' },
    { size: '12 inch', serves: '50–60 people', price: 'From $250' },
  ]

  return (
    <div className="container">
        <section id="Home">
        <img src={Banner} alt="Palvee's cakes and cupcakes banner" className="hero-banner" />
        <h2 className='flavour_heading'>Welcome to Palvee's Cake Creations!</h2>
        <p className='intro'>Beautiful 100% Eggless Cakes & Cupcakes in Sydney</p>
        <p className ='intro_paragraph_1'>Welcome to Palvee’s Cake Creation, where every cake is handcrafted with love and made 100% eggless.</p>
        <p className ='intro_Offer'>From elegant celebration cakes to delicious cupcakes and sweet treats, each order is freshly baked using quality ingredients and decorated with care. Whether you’re celebrating a birthday, anniversary, baby shower, or another special occasion, we’re here to make your celebration even sweeter.</p>
        <p className ='intro_Offer'>What we offer:</p>
        <ul className ='Offer_List'>

        <li>🎂 Custom Celebration Cakes</li>
        <li>🧁 Eggless Cupcakes</li>
        <li>🍓 Mini Cupcakes</li>
        <li>🍞 Mini & Large Loaf Cakes</li>
        <li>🎉 Cakes for Birthdays, Baby Showers, and Special Events</li>
        </ul>
        <p className='Offer_conclusion'>Freshly baked • Beautifully decorated • 100% Eggless</p>
        </section>

      <div className="sticker-row">
      <img src={sticker1} alt="Palvee's Cake Creation sticker" className="sticker1"/>
      <img src={Eggless} alt="Eggless cake" className="eggless_sticker"/>
      </div>
      
      <section id='Cakes'>
      <h2 className='flavour_heading'>Our Cake Flavours</h2>

      <p className='intro_paragraph_1'>At Palvee's Cake Creation, every cake is freshly baked to order and 100% eggless.</p>

      <h3 className='flavour_heading'>Classic Flavours</h3>
      
      <ul className='Offer_List'>
        <li>Vanilla</li>
        <li>Chocolate</li>
        <li>Red Velvet</li>
        <li>Coffee Chocolate</li>
        <li>Oreo</li>
        <li>Biscoff</li>
        <li>Strawberry</li>
        <li>Blueberry</li>
        <li>Caramel</li>
        <li>Rasberry</li>
        <li>Orange & Chocolate</li>
      </ul>

      <h3 className='flavour_heading'>Signature Indian Fusion Flavours</h3>
      <ul className='Offer_List'>
        <li>Rasmalai Cake</li>
        <li>Gulab Jamun Cake</li>
        <li>Mawa Cake</li>
        <li>Rose Pistachio Cake</li>
      </ul>

      <h3 className='flavour_heading'>Cupcakes</h3>
      <p className='intro_paragraph_1'>Available in most of our cake flavours, including:</p>
      <ul className='Offer_List'>
        <li>Vanilla</li>
        <li>Chocolate</li>
        <li>Red Velvet</li>
        <li>Oreo</li>
        <li>Biscoff</li>
        <li>Coffee Chocolate</li>
        <li>Strawberry</li>
        <li>Blueberry</li>
        <li>Caramel</li>
        <li>Raspberry</li>
        <li>Orange & Chocolate</li>
        <li>Banana</li>
        <li>Rasmalai (seasonal)</li>
        <li>Gulab Jamun (seasonal)</li>
      </ul>

      <h3 className='flavour_heading'>Custom Cakes</h3>
      <p className='intro_paragraph_1'>Looking for something unique? We love creating custom cakes for birthdays, baby showers, anniversaries, corporate events, and other special occasions.</p>
      <p className='Offer_conclusion'>100% Eggless • Freshly Baked • Made with Love</p>

      <h2 className='flavour_heading'>Price List</h2>

      
      <table className="cake-size-table">
      <thead>
        <tr>
          <th>Cake Size</th>
          <th>Serves</th>
          <th>Starting Price</th>
        </tr>
      </thead>
      <tbody>
        {sizes.map((row, index) => (
          <tr key={index}>
            <td>{row.size}</td>
            <td>{row.serves}</td>
            <td className="price-cell">{row.price}</td>
          </tr>
        ))}
      </tbody>
    </table>

      <h3 className='price_heading'>Cupcakes</h3>
      <ul className='Offer_List'>
        <li>Box of 6 Cupcakes – $30</li>
        <li>Box of 12 Cupcakes – $55</li>
      </ul>
      <p className='intro_paragraph_1'>Premium Flavours (Rasmalai, Gulab Jamun, Rose Pistachio, Mawa, Biscoff): +$5 per box</p>

      <h3 className='price_heading'>Mini Cupcakes</h3>
      <ul className='Offer_List'>
        <li>Box of 12 – $30</li>
        <li>Box of 24 – $55</li>
      </ul>

      <h3 className='price_heading'>Cakes</h3>
      <h4 className='cake_size_heading'>6-inch Cake (Serves 8–10)</h4>
      <ul className='Offer_List'>
        <li>Classic Flavours – From $65</li>
        <li>Premium Flavours – From $75</li>
      </ul>

      <h4 className='cake_size_heading'>8-inch Cake (Serves 15–20)</h4>
      <ul className='Offer_List'>
        <li>Classic Flavours – From $95</li>
        <li>Premium Flavours – From $110</li>
      </ul>

      <h3 className='price_heading'>Available Flavours</h3>
      <h4 className='cake_size_heading'>Classic</h4>
      <ul className='Offer_List'>
        <li>Vanilla</li>
        <li>Chocolate</li>
        <li>Red Velvet</li>
        <li>Strawberry</li>
        <li>Coffee Chocolate</li>
        <li>Oreo</li>
      </ul>

      <h4 className='cake_size_heading'>Premium</h4>
      <ul className='Offer_List'>
        <li>Rasmalai</li>
        <li>Gulab Jamun</li>
        <li>Mawa</li>
        <li>Rose Pistachio</li>
        <li>Biscoff</li>
      </ul>


      <h3 className='price_heading'>Extras</h3>
      <ul className='Offer_List'>
        <li>Fondant Decorations: From $20-$80+</li>
        <li>Fresh flowers: From $20</li>
        <li>Custom cake Topper: From $15</li>
        <li>Edible Image: From $15</li>
        <li>Cupcake Matching Set: From $4 each</li>
      </ul>

      <p className='Offer_conclusion'>All products are 100% eggless and freshly baked to order.</p>
        </section>
    </div>
  )
}

export default Home;