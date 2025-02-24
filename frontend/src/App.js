import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,  Home, ActivationPage, SignupPage,CreateProduct,MyProducts} from "./Routess.js";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path="/sign-up" element={<SignupPage/>} />
      <Route path="/activation/:activation_token" element={<ActivationPage />} />
      <Route path='/create-product' element={<CreateProduct/>}/>
      <Route path="/create-product/:id" element={<CreateProduct />} />
      <Route path="/my-products" element={<MyProducts/>} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App