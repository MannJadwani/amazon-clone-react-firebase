import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider';

function CheckoutProduct({id,image,title,price,rating}) {

    const[{basket},dispatch]=useStateValue()

    const removeFromBasket=()=>{
    dispatch({
        type: "REMOVE_FROM_BASKET",
        id:id,
    })
    }
  return (
    <div className='checkoutProduct'>
        <img src={image} alt="" className='checkoutProduct__image'/>
        <div className="checkoutProduct__info">
            <p className="checkoutProduct__title">{title}</p>
            <p className="checkooutProduct__price">
                <strong>{price}</strong>
            </p>
            <div className="checkoutProduct__rating">
                {Array(rating).fill().map(()=>(
                    <p><StarIcon/></p>
                ))}
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
        </div>
    </div>
  )
}

export default CheckoutProduct