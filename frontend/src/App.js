import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import {LoginPage,  Home, ActivationPage, SignUpPage,CreateProduct,MyProducts,Cart,ProductDetails} from "./Routess.js";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path="/sign-up" element={<SignUpPage/>} />
      <Route path="/activation/:activation_token" element={<ActivationPage />} />
      <Route path='/create-product' element={<CreateProduct/>}/>
      <Route path="/create-product/:id" element={<CreateProduct />} />
      <Route path="/my-products" element={<MyProducts/>} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
    </BrowserRouter>
    
  )
}

export default App