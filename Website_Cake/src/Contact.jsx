import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Logo from './assets/logo_final.png'
import Banner from './assets/Final-Banner.png'
import Eggless from './assets/sticker_eggless_cakes_final.png'
import sticker1 from './assets/sticker_palvees_cake_final.png'


function Contact() {
  return (
    <section id="Contact">
    
      <h2>Order Information</h2>
      <ul className='Offer_List'>
        <li>Custom orders welcome</li>
        <li>Please order 4–5 days in advance</li>
        <li>Pickup available</li>
        <li>Delivery available in selected Sydney suburbs</li>
      </ul>

      <h2 className='price_heading'>Contact</h2>
      <ul className='Offer_List contact_list'>
        <li>Name: Palvee Raheja</li>
        <li>Phone: <a href="tel:0423255325" className='contact_link'>0423 255 325</a></li>
        <li>Email: <a href="mailto:palvee_raheja@yahoo.com" className='contact_link'>palvee_raheja@yahoo.com</a></li>
        <li>Instagram: <a href="https://www.instagram.com/rahejapalvee/" className='contact_link' target="_blank" rel="noopener noreferrer">rahejapalvee</a></li>
        <li>Facebook: <a href="https://www.facebook.com/palveescakecreations" className='contact_link' target="_blank" rel="noopener noreferrer">Palvee's Cake Creations</a></li>
      </ul>

      <h2 className='flavour_heading'>FAQ</h2>
      <div className='faq_item'>
        <p className='faq_question'>Are all your cakes eggless?</p>
        <p className='faq_answer'>Yes.</p>
      </div>
      <div className='faq_item'>
        <p className='faq_question'>Do you make custom cakes?</p>
        <p className='faq_answer'>Yes.</p>
      </div>
      <div className='faq_item'>
        <p className='faq_question'>Do you cater for birthdays and events?</p>
        <p className='faq_answer'>Yes.</p>
      </div>
      <div className='faq_item'>
        <p className='faq_question'>Where are you located?</p>
        <p className='faq_answer'>Zetland, Sydney.</p>
      </div>
    </section>
  )
}

export default Contact;