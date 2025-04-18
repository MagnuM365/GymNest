import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Products from "./pages/Products";

const AppLayout = () => {
  const location = useLocation();
  const showNavbar = location.pathname === "/"; // Show Navbar only on Home page

  return (
    <div className="w-full min-h-screen h-auto bg-[#171717]">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

function App() {
  const[data, setData] = useState(null)
  useEffect(() => {
    fetch('http://localhost:8081/api')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
  })
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;

