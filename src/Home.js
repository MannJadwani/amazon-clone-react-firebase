import React from 'react'
import './Home.css'

import Product from './Product'
function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
           <img  className='home__image' src='https://images.bauerhosting.com/legacy/media/5ecd/034a/d192/6f65/c245/afbd/PrimeDay-Empire-Banner.png?format=jpg&quality=80&width=960&height=540&ratio=16-9&resize=aspectfill'/>
          <div className='home__row'>

          </div>
          <div className='home__row'>
            <Product/>
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