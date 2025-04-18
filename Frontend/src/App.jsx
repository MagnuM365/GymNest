import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login"; // Import the Login component
import Home from "./pages/Home/Home";
import Products from "./pages/Products";

function App(){
  return (
    <Router>
      <div className="w-full min-h-screen h-auto bg-[#171717]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

