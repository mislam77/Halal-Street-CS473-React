import { useContext } from 'react';
import { motion } from 'framer-motion';
import CartContext from '../../context/CartContext';

const FloatingCartButton = () => {
  const { getTotalItems, toggleCart } = useContext(CartContext);
  
  return (
    <motion.div
      className="fixed top-20 right-5 z-[1000] cursor-pointer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleCart}
      role="button"
      aria-label="Open shopping cart"
    >
      <div className="bg-green-1 w-[60px] h-[60px] rounded-full flex items-center justify-center shadow-lg">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        
        {/* Item counter badge */}
        <div className="absolute -top-2 -right-2 bg-white text-green-1 rounded-full w-[24px] h-[24px] flex items-center justify-center text-[14px] font-bold border-2 border-green-1">
          {getTotalItems()}
        </div>
      </div>
    </motion.div>
  );
};

export default FloatingCartButton;