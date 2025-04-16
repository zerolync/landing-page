import React from "react";

function Logo() {
  return (
    <div className="flex items-center space-x-3">
      <div className="relative">
        <div className="w-12 h-10 rounded-[100px] border-2 border-white flex items-center justify-center logo-container">
          <div className="absolute inset-0 logo-circle"></div>
          <div className="logo-bolt">
            <svg
              className="w-6 h-6 text-white relative z-10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M13 3L4 14h7l-2 7 9-11h-7l2-7z" />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-2xl font-light tracking-wider">
        <span className="text-white">ZERO</span>
        <span className="text-white">LYNC</span>
      </div>
    </div>
  );
}

export default Logo;
