import React from "react";

function Header() {
  return (
    <>
      <div className="flex items-center space-x-8">
        <a
          href="#features"
          className="hover:text-gray-300 transition-colors text-sm tracking-wider"
        >
          Features
        </a>
        <a
          href="#about"
          className="hover:text-gray-300 transition-colors text-sm tracking-wider"
        >
          About
        </a>
        <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full text-sm transition-all hover:scale-105 tracking-wider">
          Get Started
        </button>
      </div>
    </>
  );
}

export default Header;
