import React, { useState } from 'react'
import './PaymentPage.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link } from 'react-router-dom'
import {CardElement,useElements,useStripe} from '@stripe/react-stripe-js'
import { Card } from '@mui/material'

export const PaymentPage = () => {
    
    const [{basket,user},dispatch] = useStateValue()

    const stripe = useStripe();
    const elements = useElements();

    const [error,setError]= useState();
    const [disabled,setDisabled]= useState();


    const handleSubmit = (e)=>{

    }
    const handleChange = (e)=>{
    }
  return (
    <div className='payment'>
        <div className='payment__container'> 
            <h1>
                Checkout (<Link to = '/checkout'>
                {basket?.length} items
                </Link>)
            </h1>
            <div className="payment_section">
                <div className="payment__title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment__add">
                    <p>{user?.email}</p> 
                    <p>123 React Lane</p>
                    <p>Mumbai,Maharastra,</p>
                    <p>India</p>
                </div>
            </div>
            <div className="payment_section">
                <div className="payment__title">
                    <h3>Review items & delivery</h3>
                </div>
                <div className="payment__item">
                    {basket.map(item=>{
                        return <CheckoutProduct
                        id = {item.id}
                        title = {item.title}
                        image = {item.image}
                        price ={item.price}
                        rating ={item.rating}
                        />
                    })}
                </div>
            </div>
            <div className="payment_section">
                <div className="payment__title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
