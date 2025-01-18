"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar flex flex-row items-center justify-between px-6 py-4 bg-light lg:px-16 lg:py-2 relative z-20">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <a href="#" className="text-2xl font-bold text-blue-800">
          RealES
        </a>
        <button
          className="text-3xl text-blue-800 lg:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <div
        className={`flex-col items-start justify-start px-5 lg:flex-row lg:items-center lg:flex lg:gap-10 lg:static ${
          isMenuOpen ? "flex" : "hidden"
        } absolute top-full left-0 w-full bg-white lg:top-auto lg:w-auto lg:bg-transparent`}
      >
        <ul className="flex flex-col items-center gap-4 lg:flex-row lg:gap-10 lg:pt-0 pt-4 cursor-pointer">
          <li>Buy</li>
          <li>Rent</li>
          <li>Sell</li>
        </ul>
        <div className="flex justify-center mt-4 lg:mt-0 mb-4">
          <button
            type="button"
            className="bg-blue-600 text-white px-6 py-2 lg:mt-2 rounded-md"
          >
            Connect
          </button>
        </div>
      </div>
    </nav>
  );
}
