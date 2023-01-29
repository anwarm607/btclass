import { useState, useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./screen/About";
import Home from "./screen/Home";
import "./App.css";
import OrderSuccess from "./screen/OrderSuccess";
import NoRoute from "./screen/NoRoute";
import FirstTab from "./screen/FirstTab";
import SecondTab from "./screen/SecondTab";
import ProductItem from "./screen/ProductItem";
import Products from "./screen/Products";
import AdminPage from "./screen/Admin";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route index element={<FirstTab />} />
            <Route path="first-tab" element={<FirstTab />} />
            <Route path="second-tab" element={<SecondTab />} />
          </Route>
          <Route path="products" element={<Products />} />
          <Route path="/products/:id" element={<ProductItem />}/>
          <Route path="/products/admin" element={<AdminPage />}/>
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="*" element={<NoRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
