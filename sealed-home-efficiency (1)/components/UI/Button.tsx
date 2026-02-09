import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  showArrow = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-3 text-sm font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed group";
  
  const variants = {
    primary: "bg-brand-500 text-white hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/30 focus:ring-brand-500",
    secondary: "bg-white text-brand-700 hover:bg-gray-50 hover:shadow-md focus:ring-gray-200 border border-gray-200",
    outline: "bg-transparent border-2 border-brand-500 text-brand-500 hover:bg-brand-50 focus:ring-brand-500",
    white: "bg-white text-brand-900 hover:bg-gray-100 hover:shadow-lg focus:ring-white"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
      {showArrow && (
        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
      )}
    </button>
  );
};

export default Button;