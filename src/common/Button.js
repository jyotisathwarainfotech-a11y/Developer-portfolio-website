"use client";
import React from "react";

const Button = ({
  children,
  variant = "filled", // filled | outline
  className = "",
  ...props
}) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out";

  const variants = {
    filled:
      "bg-secondary text-primary hover:bg-secondary/90 active:scale-95",
    outline:
      "border-2 border-secondary text-secondary hover:bg-secondary hover:text-primary active:scale-95",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;