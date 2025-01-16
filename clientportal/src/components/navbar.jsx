import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
      fixed top-0 left-0 right-0 
      flex items-center justify-between px-6 py-4
      transition-all duration-300 border-b shadow-md
      ${isScrolled ? "bg-gray-50 shadow-sm" : "bg-transparent"}
    `}
    >
      <div className="flex items-center">
        <img src="/door.png" alt="ClientPortal" className="h-8" />
        <p className="font-bold">Client Portal</p>
      </div>

      <button
        className="lg:hidden z-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <div className="hidden lg:flex items-center gap-8">
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Features
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Pricing
        </a>
        <a href="#" className="text-gray-700 hover:text-gray-900">
          Contact
        </a>
        <button className="bg-[#E31B54] text-white px-6 py-2 rounded-full hover:bg-opacity-90">
          Buy Now!
        </button>
      </div>

      <div
        className={`
        lg:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Features
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Pricing
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Contact
          </a>
          <button className="bg-[#2D2F45] text-white px-6 py-2 rounded-full hover:bg-opacity-90">
            Buy Now!
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
