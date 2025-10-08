import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
};

const variantClasses: Record<string, string> = {
  primary: "bg-[#f78da0] hover:bg-[#f78da0]/90 text-gray-100 shadow-lg shadow-[#f78da0]/30",
  secondary: "bg-gray-600 text-white hover:bg-gray-700",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-100",
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-lg shadow-lg transition-shadow flex items-center cursor-pointer justify-center overflow-hidden h-10 px-5 text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
