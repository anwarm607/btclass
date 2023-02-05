import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar";
import Cart from "../screens/cart";
import Home from "../screens/home";
import LoginPage from "../screens/login";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
