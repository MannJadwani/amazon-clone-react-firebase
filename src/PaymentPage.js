import React, { useEffect, useState } from 'react'
import './PaymentPage.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import { Link, useNavigate } from 'react-router-dom'
import {CardElement,useElements,useStripe} from '@stripe/react-stripe-js'
import { Card } from '@mui/material'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from './reducer'
import axios from './axios'



export const PaymentPage = () => {
    
    const [{basket,user},dispatch] = useStateValue()

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded,setSucceeded] = useState();
    const [processing,setProcessing] = useState();

    const [error,setError]= useState(null);
    const [disabled,setDisabled]= useState(true);
    const [clientSecret,setClientSecret]= useState(true);
    const navigate=useNavigate(); 

    useEffect(()=>{
        const getClientSecret = async () =>{
            const response = await axios({
                method : 'post',
                url : `/payment/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret()
    },[basket])

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setProcessing(true)

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements?.getElement(CardElement),
            }
        }).then(({paymentIntent})=>{
            setSucceeded(true);
            setError(null);
            setProcessing(false);
            navigate.apply('/orders')
        })
    }
    const handleChange = (e)=>{
        setDisabled(e.empty)
        setError(e.error ? e.error.message:"")
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
                        <div className="payment__priceContainer">
                        <div className='payment_priceContainer'>
                            <CurrencyFormat
                            renderText={(value) =>(
                            <>
                            <h3>Order Total: {value}</h3>
                            </>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)} 
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p>:'Buy Now'}</span>
                            </button>
                            </div>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
