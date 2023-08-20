import React from 'react'
import './Product.css'
import StarIcon from '@mui/icons-material/Star';
import { useStateValue } from './StateProvider';
const Product = ({id,title, image, price, rating}) => {

  

  const [{basket},dispatch]= useStateValue();
  console.log("this is in the basket >> ",basket)
  const addToBasket = ()=>{
    // add item to basket
    dispatch({
      type:'ADD_TO_BASKET',
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating,
      }
    })
  }
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map((_,i)=>(
                  <StarIcon/>
                ))}
            </div>
        </div>
        <img src={image}/>
           <button onClick={addToBasket}>Add To Basket</button> 
    </div>
  )
}

export default Product