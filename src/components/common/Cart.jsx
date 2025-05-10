import { useContext, useState, useEffect } from 'react';
import { FiX, FiPlus, FiMinus } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import CartContext from '../../context/CartContext';

const Cart = () => {
  const { 
    cart, 
    isCartOpen, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    getTotalPrice, 
    setIsCartOpen 
  } = useContext(CartContext);
  
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  // Close cart when Escape key is pressed
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && isCartOpen) {
        setIsCartOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isCartOpen, setIsCartOpen]);

  // Prevent background scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isCartOpen]);

  // Show feedback when item is added
  const showFeedback = (message) => {
    setFeedbackMessage(message);
    setTimeout(() => {
      setFeedbackMessage(null);
    }, 2000);
  };

  // Show checkout message and close cart
  const handleCheckout = () => {
    alert('Thank you for your order! In a real implementation, you would be redirected to a checkout page.');
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <>
      {/* Cart Overlay - Only visible when cart is open */}
      <AnimatePresence>
        {isCartOpen && (
          <motion.div 
            className="fixed inset-0 bg-black-1 bg-opacity-50 z-[990]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsCartOpen(false)}
          ></motion.div>
        )}
      </AnimatePresence>
      
      {/* Cart Sidebar */}
      <motion.div 
        className="fixed top-0 right-0 w-[350px] max-w-[85%] h-screen bg-white shadow-lg z-[1001] p-5 overflow-y-auto"
        initial={{ x: '100%' }}
        animate={{ x: isCartOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.3 }}
      >
        {/* Cart Header */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-200 mb-5">
          <h2 className="text-[2.4rem] font-semibold text-black-1">Your Cart</h2>
          <button 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>
        
        {/* Cart Items */}
        <div className="mb-5">
          {cart.length === 0 ? (
            <div className="text-center py-10">
              <div className="text-[5rem] text-green-1 mb-5">🛒</div>
              <p className="text-[1.6rem] text-black-2 mb-5">Your cart is empty</p>
            </div>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="flex items-center py-4 border-b border-gray-100">
                {/* Item Image */}
                <div className="w-[70px] h-[70px] rounded-lg overflow-hidden mr-4">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Item Info */}
                <div className="flex-1">
                  <h3 className="text-[1.6rem] font-medium text-black-1 mb-1">{item.title}</h3>
                  <p className="text-[1.4rem] font-semibold text-green-1 mb-1">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center mt-2">
                    <button 
                      className="w-6 h-6 bg-lightGreen-1 flex items-center justify-center rounded transition-colors hover:bg-green-2 hover:text-white"
                      onClick={() => updateQuantity(index, item.quantity - 1)}
                      aria-label="Decrease quantity"
                      disabled={item.quantity <= 1}
                    >
                      <FiMinus className="w-4 h-4" />
                    </button>
                    <span className="mx-3 text-[1.4rem] font-medium text-black-1">{item.quantity}</span>
                    <button 
                      className="w-6 h-6 bg-lightGreen-1 flex items-center justify-center rounded transition-colors hover:bg-green-2 hover:text-white"
                      onClick={() => updateQuantity(index, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      <FiPlus className="w-4 h-4" />
                    </button>
                    <button 
                      className="ml-4 text-[1.4rem] text-red-500 hover:text-red-600 transition-colors"
                      onClick={() => removeFromCart(index)}
                      aria-label="Remove item"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        
        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="mt-5 pt-5 border-t-2 border-gray-100">
            <div className="flex justify-between text-[1.8rem] font-semibold text-black-1 mb-5">
              <span>Total:</span>
              <span className="text-green-1">${getTotalPrice().toFixed(2)}</span>
            </div>
            
            <motion.button 
              className="w-full bg-green-1 text-white border-none rounded-lg py-3 px-5 text-[1.6rem] font-medium cursor-pointer transition-colors hover:bg-green-2 mb-4"
              onClick={handleCheckout}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Checkout
            </motion.button>
            
            <div className="flex justify-between">
              <motion.button 
                className="border border-gray-300 rounded-lg py-2 px-4 text-[1.4rem] text-black-2 cursor-pointer transition-all hover:bg-gray-100"
                onClick={clearCart}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Clear Cart
              </motion.button>
            </div>
          </div>
        )}
      </motion.div>
      
      {/* Feedback Message */}
      <AnimatePresence>
        {feedbackMessage && (
          <motion.div 
            className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-1 text-white py-2 px-5 rounded-md z-[2000] text-[1.4rem]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {feedbackMessage}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Cart;