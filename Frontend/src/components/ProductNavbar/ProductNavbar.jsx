import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ShoppingCart } from 'lucide-react';

const ProductNavbar = () => {
  return (
    <nav className="w-full h-auto bg-[#1d1d1d] shadow-none lg:px-24 md:px-16 sm:px-6 px-4 py-3">
      <div className="flex justify-between items-center mx-auto">
        <Link to="/" className="text-3xl text-indigo-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative">
          G<span className="text-xl font-bold text-gray-300">Y</span>M
          <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-[46%] translate-x-[-50%]" />
        </Link>
        <ul className="flex items-center gap-x-5">
          <li>
            <Link to="/" className="text-gray-500 text-lg font-medium hover:text-indigo-600 ease-out duration-700">Home</Link>
          </li>
          <li>
            <Link to="/cart" className="text-gray-500 text-lg font-medium hover:text-indigo-600 ease-out duration-700 flex items-center">
              <ShoppingCart className="mr-2" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default ProductNavbar;