import React, { useState } from 'react'
import {Link ,useNavigate}from 'react-router-dom'
import './Login.css'
import { auth } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export const Login = () => {
  
  const navigate = useNavigate()

  const [Email,setEmail] = useState("") 
  const [Password,setPassword] = useState("") 
  const signIn = (e)=>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    if (user){
      navigate('/')
    }
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
  });
  }
  const register = (e) =>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,Email,Password).then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      if (user){
        navigate('/')
      }
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode)
    });
  }
  
  return (
  
    <div className='login'>
      <Link to='/'>
      <img className='login__logo'src="https://www.demandsphere.com/wp-content/uploads/2018/02/Amazon_logo.png" alt="" />
      </Link>

      <div className="login__container">
          <h1>Sign In</h1>
          <form action="" className='login__form'>
          <h5>Email</h5>
          <input value={Email} type="text" onChange={e=>{
            setEmail(e.target.value)
          }} />
          <h5>Password</h5>
          <input type="password" value={Password} onChange={e=>{
            setPassword(e.target.value)
          }}/>
          <button className='login__button' onClick={signIn}>Sign In</button>
          </form>
          <p className='login__terms'>
              By signing in you agree that you
              are going to subscribe to 
              Mann Jadwani on YouTube
          </p>
          <button className='login__createAccountButton' onClick={register}>Create Your Amazon Account</button>
      </div>
    </div>
  )
}
