import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login"; // Import the Login component
import Home from "./pages/Home/Home";
import Products from "./pages/Products";
import Cart from "./pages/Home/Cart";
import ProductNavbar from "./components/ProductNavbar/ProductNavbar";

function App() {
  function Navigation() {
    const location = useLocation();
    if(location.pathname === "/") {
      return <Navbar/>
    } else if (location.pathname === "/Products") {return <ProductNavbar/>}
  }
  return (
    <Router>
      <div className="w-full min-h-screen h-auto bg-[#171717]">
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

