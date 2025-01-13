"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

 useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);
    return() => window.removeEventListener("scroll", handleScroll);
   }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`${isScrolled ? "bg-[#030516] bg-opacity-10 backdrop-blur-md" : "bg-[#030516]"} text-white fixed top-0 left-0 right-0 z-20 h-20`}>
      <div className="flex justify-between items-center px-6 py-4 lg:px-28 lg:py-4">
      <div className="flex flex-row items-center gap-14">
        {/* Logo */}
        <a href="#" className="flex-shrink-0">
          <Image src="/images/forcythe logo.svg" alt="logo" width={120} height={80} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-row items-center gap-6">
          <ul className="flex flex-row items-center gap-6">
            <li className="text-[16px]  cursor-pointer">About</li>
            <li className="text-[16px]  cursor-pointer">Service</li>
            <li className="text-[16px] cursor-pointer">Portfolio</li>
            <li className="text-[16px]  cursor-pointer">Studio</li>
            <li className="text-[16px] cursor-pointer">Foundation</li>
          </ul>
        </nav>
        </div>

        {/* Call-to-Action Button */}
        <button className="hidden md:block bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-[#60a6e7] hover:text-white">
          Book a Call
        </button>

        {/* Hamburger Menu */}
        <button
          className=" text-white text-2xl md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars className="bg-white bg-opacity-10"  style={{ color: "white", backgroundColor: "rgba(255,255,255,0.1)" }} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[rgb(3,5,22)] text-white flex gap-5 items-start absolute top-16 left-40 w-[15 rem] p-4 rounded-lg">
          <ul className="flex flex-col gap-10">
            <li className="text-[16px]  cursor-pointer">About</li>
            <li className="text-[16px]  cursor-pointer">Service</li>
            <li className="text-[16px]  cursor-pointer">Portfolio</li>
            <li className="text-[16px]  cursor-pointer">Studio</li>
            <li className="text-[16px]  cursor-pointer">Foundation</li>
            <li className="text-[16px]  cursor-pointer">Careers</li>
            <li className="text-[16px]  cursor-pointer">Blogs</li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
