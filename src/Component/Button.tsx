import React from "react";

interface ButtonProps {
  onClick: () => void;
  content: string;
  className?: string;
}

function Button({ onClick, content, className = "" }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-white hover:bg-gray-200 text-black px-8 py-3 rounded-full transition-all hover:scale-105 text-sm font-medium tracking-wider ${className}`}
    >
      {content}
    </button>
  );
}

export default Button;
