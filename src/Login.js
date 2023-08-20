import React from 'react'
import {Link }from 'react-router-dom'
import './Login.css'

export const Login = () => {
  return (
    <div className='login'>
      <Link to='/'>
      <img className='login__logo'src="https://www.demandsphere.com/wp-content/uploads/2018/02/Amazon_logo.png" alt="" />
      </Link>

      <div className="login__container">
          <h1>Sign In</h1>
          <form action="" className='login__form'>
          <h5>Email</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button className='login__button' >Sign In</button>
          </form>
          <p className='login__terms'>
              By signing in you agree that you
              are going to subscribe to 
              Mann Jadwani on YouTube
          </p>
          <button className='login__createAccountButton'>Create Your Amazon Account</button>
      </div>
    </div>
  )
}
