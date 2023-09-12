import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Checkout } from './Checkout';
import { Login } from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { PaymentPage } from './PaymentPage';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51NpW2kSH364fmD4DcsJh2W7gQGVdSt1ydoRbrMQd6INjMCiRtPhCtTNysdgbNBOrcfEbbrfMHo1hh8DShprghn6m00HRcMDTBg'
)

function App() {

  const[{},dispatch] = useStateValue()
  

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('The User is >>',authUser)
      if (authUser){
          dispatch({type:'SET_USER',user:authUser})
      }else{
        dispatch({type:'SET_USER',user:authUser})
      }
    })
  },[])

  return (
    
    <div className="App">
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<><Header /><Home /></>}></Route>
        <Route path="/checkout" element={<><Header /><Checkout /></>}></Route>
        <Route path="/Login" element={<Login />}></Route>
          <Route path="/payment" element={<Elements stripe={promise}><Header /><PaymentPage /></Elements>}></Route>


      </Routes>
    </BrowserRouter>
    </div>  
    
  );
}

export default App;
