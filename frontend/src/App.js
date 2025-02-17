import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  LoginPage,
  Home,
  SignupPage,
  ActivationPage,
  CreateProduct,
} from "./Routess.js"; // Import fixed

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/activation/:activation_token"
          element={<ActivationPage />}
        />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
