import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./landingpage/home/HomePage";
import Signup from "./landingpage/signup/Signup";
import ProductPage from "./landingpage/products/ProductPage";
import PricingPage from "./landingpage/pricing/Hero";
import SupportPage from "./landingpage/support/SupportPage";
import AboutPage from "./landingpage/about/AboutPage";
import Navbar from "./landingpage/Navbar";
import Footer from "./landingpage/Footer";
import Login from "./landingpage/login/Login";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element ={<AboutPage/>}/>
      <Route path="/product" element={<ProductPage/>} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/support" element={<SupportPage/>}/>
     
      
    </Routes>
    <Footer />
  </BrowserRouter>
);
