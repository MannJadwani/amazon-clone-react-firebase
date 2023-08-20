import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
const Product = () => {
  return (
    <div className='product'>
        <div className='product__info'>
            <p>the lean startup</p>
            <p className='product__price'>
                <small>$</small>
                <strong>19.99</strong>
            </p>
            <div className='product__rating'>
                <p><StarIcon/></p>
                <p><StarIcon/></p>
                <p><StarIcon/></p>
                <p><StarIcon/></p>
            </div>
        </div>
        <img src='https://placeit-assets1.s3-accelerate.amazonaws.com/custom-pages/ebook-cover-mockup-templates/three-ebook-cover-designs-1024x906.png'/>
           <button>Add To Basket</button> 
    </div>
  )
}

export default Product