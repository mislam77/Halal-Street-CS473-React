import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  primary = true, 
  to = null, 
  type = 'button',
  onClick = null,
  className = '',
  disabled = false,
  fullWidth = false,
  ...props 
}) => {
  // Base button styles
  const baseStyles = `
    text-[1.4rem] md:text-[2rem] 
    font-poppins font-medium 
    rounded-lg py-3 px-6 md:py-4 md:px-8
    transition-all duration-300
    ${fullWidth ? 'w-full' : ''}
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;
  
  // Primary/secondary button styles
  const buttonStyles = primary
    ? `bg-green-1 text-white-1 hover:bg-green-2 ${baseStyles}`
    : `bg-transparent text-green-1 border border-green-1 hover:bg-green-1 hover:text-white-1 ${baseStyles}`;

  // Animation properties
  const buttonMotion = {
    whileHover: disabled ? {} : { scale: 1.05 },
    whileTap: disabled ? {} : { scale: 0.95 },
    transition: { duration: 0.2 }
  };

  // If "to" prop is provided, render as Link component
  if (to) {
    return (
      <motion.div {...buttonMotion}>
        <Link 
          to={to} 
          className={buttonStyles}
          {...props}
        >
          {children}
        </Link>
      </motion.div>
    );
  }

  // Otherwise render as button element
  return (
    <motion.button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      {...buttonMotion}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;