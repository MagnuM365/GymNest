import React, { useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setNavbar(false); 
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Profile", id: "profile" },

    // { name: "Home", id: "home" },


    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Plan", id: "plan" },
    { name: "Products", id: "products" }, 
    { name: "Contact", id: "contact" },
  ];

  const isLoggedIn = localStorage.getItem('token');
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate('/login');
  };

  const goToProfilePage = () => {
    navigate('/profile');
  };

  const handleLogout = () => { localStorage.removeItem('token'); navigate('/') }

  return (
    <nav className="w-full h-auto bg-[#1d1d1d] shadow-none lg:px-24 md:px-16 sm:px-6 px-4 py-3">
      <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
        {/* Navbar logo & toggle button section */}
        <div>
          <div className="flex items-center justify-between py-1 md:py-1 md:block">
            {/* Logo section */}
            <Link to="/" className="text-3xl text-indigo-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative">
              G<span className="text-xl font-bold text-gray-300">Y</span>M
              <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-[46%] translate-x-[-50%]" />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <X className="text-gray-400 cursor-pointer" size={24} /> : <Menu className="text-gray-400 cursor-pointer" size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Navbar menu items section */}
        <div className={`flex justify-between items-center md:block ${navbar ? "block" : "hidden"}`}>
          <ul className="list-none lg:flex md:flex sm:block block items-center gap-x-5 gap-y-16">
            {navItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-500 text-lg font-medium hover:text-indigo-600 ease-out duration-700"
                >
                  {item.name}
                </button>
              </li>
            ))}
             {isLoggedIn ? (
              <>
                <button onClick={goToProfilePage} className="bg-indigo-600 text-white px-4 py-2 rounded-md">Profile</button>
                <button onClick={handleLogout} className="bg-indigo-600 text-white px-4 py-2 rounded-md">Logout</button>
              </>

            ) : (
              <button onClick={goToLoginPage} className="bg-indigo-600 text-white px-4 py-2 rounded-md">Login</button>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
