import React from 'react'
import './Home.css'

import Product from './Product'
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
           <img  className='home__image' src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Unrec/TallHero_3000X1200_Unrec._CB593464763_.jpg'/>
          <div className='home__row'>

          </div>
          <div className='home__row'>
            <Product id='12481294' title='Redmi A2 (Aqua Blue, 2GB RAM, 32GB Storage) | Powerful Octa Core G36 Processor | Upto 7GB RAM | Large 16.5 cm HD+ Display with Massive 5000mAh Battery | 2 Years Warranty [Limited time Offer]' rating={3} price={19.99} image='https://m.media-amazon.com/images/I/81RR0TAz+5L._SX679_.jpg'/>
            <Product/>
          </div>
          <div className='home__row'>
          <Product/>
          <Product/>
          <Product/>
          </div>
          <div className='home__row'>
          <Product/>
          </div>
        </div>
    </div>
  )
}

export default Home