import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Checkout } from './Checkout';
import { Login } from './Login';



function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<><Header /><Home /></>}></Route>
        <Route path="/checkout" element={<><Header /><Checkout /></>}></Route>
        <Route path="/Login" element={<Login />}></Route>

      </Routes>
    </BrowserRouter>
    </div>  
    
  );
}

export default App;
