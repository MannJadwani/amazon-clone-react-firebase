import React from 'react'
import "./Checkout.css"
import { Subtotal } from './Subtotal'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'

export const Checkout = () => {
  
  const[{basket},dispatch]=useStateValue()



  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img className='checkout__ad' src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_Approved._TTW_.jpg" alt="" />
            <div className="checkout__title">
                Shopping cart
            </div>
            {basket.map(item=>(
                  <CheckoutProduct
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  />
                ))}
                
            
        </div>
        <div className="checkout__right">
            <Subtotal/>
            
        </div>
    </div>
  )
}
