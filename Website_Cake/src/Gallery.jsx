import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Logo from './assets/logo_final.png'
import Banner from './assets/Final-Banner.png'
import Animal_Cake from './assets/cakes/Animal_Cake.JPG'
import Blue_Cake1 from './assets/cakes/Blue_Cake1.JPG'
import Chocolate_Cake from './assets/cakes/Chocolate_Cake.JPG'
import Construction_Cake from './assets/cakes/Construction_Cake.JPG'
import Flower_Cake from './assets/cakes/Flower_Cake.JPG'
import Pink_Cake from './assets/cakes/Pink_Cake.JPG'
import Frozen_Cake from './assets/cakes/Frozen_Cake.JPG'
import Jurassic_Park_Cake from './assets/cakes/Jurassic_Park_Cake.JPG'
import Letter_Cake from './assets/cakes/Letter_Cake.JPG'
import Blue_Cake_2  from  './assets/cakes/Blue_Cake2.JPG'
import Minnie_Cake from './assets/cakes/Minnie_Cake.JPG'
import Monkey_Cake from './assets/cakes/Monkey_Cake.JPG'
import Pink_Cake_2 from './assets/cakes/Pink_Cake2.JPG'
import Multi_Cake from './assets/cakes/Multi_Cake.JPG'
import Blue_Cake from './assets/cakes/Blue_Cake.JPG'
import Ribbon_Cake from './assets/cakes/Ribbon_Cake.JPG'
import Pink_Cake_3 from './assets/cakes/Pink_Cake3.JPG'
import Spiderman_Cake from './assets/cakes/Spiderman_Cake.JPG'
import Blue_Cake_4  from './assets/cakes/Blue_Cake_4.JPG'
import Sport_Cake from './assets/cakes/Sport_Cake.JPG'
import Pink_Cake_4 from './assets/cakes/Pink_Cake4.JPG'
import Thomas_Cake from './assets/cakes/Thomas_Cake.JPG'
import Frozen_Cake_2 from './assets/cakes/Frozen_Cake1.JPG'
import Pink_Cake_5 from './assets/cakes/Pink_Cake5.JPG'
import Pink_Cake_6 from './assets/cakes/Pink_Cake1.JPG'
import './Gallery.css' 

function Gallery() {

  const items = [
    {
      image: Animal_Cake,
      title: 'Animal Cake',
    },
    {
      image: Blue_Cake1,
      title: 'Blue Cake 1'
    },
    {
      image: Chocolate_Cake,
      title: 'Chocolate Cake',
    },
    {
      image: Construction_Cake,
      title: 'Construction Cake',
    },
    {
      image: Flower_Cake,
      title: 'Flower Cake',
    },
    {
      image: Pink_Cake,
      title: 'Pink Cake 1',
    },
    {
      image: Frozen_Cake,
      title: 'Frozen Cake',
    },
    {
      image: Jurassic_Park_Cake,
      title: 'Jurassic Park Cake',
    },
    {
      image: Pink_Cake_6,
      title: 'Pink Cake 2',
    },
    {
      image: Letter_Cake,
      title: 'Letter Cake',
    },
    {
      image: Blue_Cake_2,
      title: 'Blue Cake 2',
    },
    {
      image: Monkey_Cake,
      title: 'Monkey_Cake',
    },
    {
      image: Pink_Cake_2,
      title: 'Pink Cake 3',
    },
    {
      image: Minnie_Cake,
      title: 'Minnie Cake',
    },
    {
      image: Multi_Cake,
      title: 'Multi Cake',
    },
    {
      image: Blue_Cake,
      title: 'Blue Cake 3',
    },
    {
      image: Ribbon_Cake,
      title: 'Ribbon Cake',
    },
    {
      image: Pink_Cake_3,
      title: 'Pink Cake 4',
    },
    {
      image: Spiderman_Cake,
      title: 'Spiderman Cake',
    },
    {
      image: Sport_Cake,
      title: 'Sport Cake',
    },
    {
      image: Blue_Cake_4,
      title: 'Blue Cake 4',
    },
    {
      image: Pink_Cake_4,
      title: 'Pink Cake 5',
    },
    {
      image: Thomas_Cake,
      title: 'Thomas Cake',
    },
    {
      image: Frozen_Cake_2,
      title: 'Frozen Cake 2',
    },
    {
      image: Pink_Cake_5,
      title: 'Pink Cake 6',
    }


  ]

  return (
    <div className="gallery-grid">
      {items.map((item, index) => (
        <div className="gallery-card" key={index}>
          <img src={item.image} alt={item.title} className="gallery-image" />
          <h3 className="gallery-title">{item.title}</h3>
        </div>
      ))}
    </div>
  )
}

export default Gallery;