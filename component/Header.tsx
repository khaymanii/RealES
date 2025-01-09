"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar flex flex-row items-center justify-between px-6 py-4 bg-light lg:px-16 lg:py-5">
      {/* Logo and Toggle */}
      <div className="flex items-center justify-between w-full lg:w-auto">
        <a href="#" className="text-2xl font-bold text-blue-800">
          MILLOW
        </a>
        <button
          className="text-3xl text-blue-800 lg:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Navigation and Button */}
      <div
        className={`flex-col lg:flex-row lg:items-center lg:flex lg:gap-10 lg:static ${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-16 left-0 w-full bg-light lg:top-auto lg:w-auto lg:bg-transparent`}
      >
        {/* Menu Links */}
        <ul className="flex flex-col items-center gap-4 text-xl lg:flex-row lg:gap-10">
          <li className="cursor-pointer">Buy</li>
          <li className="cursor-pointer">Rent</li>
          <li className="cursor-pointer">Sell</li>
        </ul>

        {/* Connect Button */}
        <div className="flex justify-center mt-4 lg:mt-0">
          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-2 rounded-md"
          >
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
