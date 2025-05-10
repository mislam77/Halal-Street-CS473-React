import { useState, useEffect } from 'react';

/**
 * Custom hook for managing shopping cart functionality
 * @param {string} storageKey - Key to use for localStorage (default: 'halalStreetCart')
 * @returns {Object} Cart state and methods
 */
const useCart = (storageKey = 'halalStreetCart') => {
  // Cart items state
  const [cart, setCart] = useState([]);
  
  // Cart UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Feedback message state
  const [feedbackMessage, setFeedbackMessage] = useState(null);

  // Load cart from localStorage on component mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(storageKey);
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      // Initialize with empty cart on error
      setCart([]);
    }
  }, [storageKey]);

  // Save cart to localStorage when it changes
  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(cart));
    } catch (error) {
      console.error('Error saving cart to localStorage:', error);
    }
  }, [cart, storageKey]);

  // Prevent scrolling when cart is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Cleanup
    };
  }, [isCartOpen]);

  /**
   * Add item to cart
   * @param {Object} product - Product to add to cart
   */
  const addToCart = (product) => {
    if (!product || !product.title || typeof product.price !== 'number') {
      console.error('Invalid product data:', product);
      return;
    }

    setCart(prevCart => {
      // Check if product already exists in cart
      const existingProductIndex = prevCart.findIndex(item => item.title === product.title);
      
      if (existingProductIndex !== -1) {
        // Increase quantity if product already exists
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += product.quantity || 1;
        return updatedCart;
      } else {
        // Add new product to cart with quantity (default to 1)
        return [...prevCart, { ...product, quantity: product.quantity || 1 }];
      }
    });
    
    // Show feedback
    showFeedback('Item added to cart!');
    
    // Optionally open cart
    // setIsCartOpen(true);
  };

  /**
   * Remove item from cart
   * @param {number} index - Index of item to remove
   */
  const removeFromCart = (index) => {
    setCart(prevCart => {
      const updatedCart = [...prevCart];
      updatedCart.splice(index, 1);
      return updatedCart;
    });
    
    showFeedback('Item removed from cart');
  };

  /**
   * Update item quantity
   * @param {number} index - Index of item to update
   * @param {number} newQuantity - New quantity value
   */
  const updateQuantity = (index, newQuantity) => {
    // Ensure quantity is at least 1
    if (newQuantity < 1) newQuantity = 1;
    
    setCart(prevCart => {
      const updatedCart = [...prevCart];
      updatedCart[index].quantity = newQuantity;
      return updatedCart;
    });
  };

  /**
   * Clear entire cart
   */
  const clearCart = () => {
    setCart([]);
    showFeedback('Cart cleared');
  };

  /**
   * Show feedback message
   * @param {string} message - Message to display
   * @param {number} duration - Duration in ms (default: 2000)
   */
  const showFeedback = (message, duration = 2000) => {
    setFeedbackMessage(message);
    
    // Clear feedback after duration
    setTimeout(() => {
      setFeedbackMessage(null);
    }, duration);
  };

  /**
   * Get total number of items in cart
   * @returns {number} Total items
   */
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  /**
   * Get total price of items in cart
   * @returns {number} Total price
   */
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  /**
   * Toggle cart open/closed
   */
  const toggleCart = () => {
    setIsCartOpen(prevState => !prevState);
  };

  /**
   * Process checkout
   * @param {Object} checkoutData - Additional checkout data
   * @returns {Object} Order information
   */
  const checkout = (checkoutData = {}) => {
    if (cart.length === 0) {
      showFeedback('Your cart is empty');
      return null;
    }
    
    // Here you would typically send cart data to your backend
    // For now, we'll just simulate a successful checkout
    
    const orderInfo = {
      items: [...cart],
      totalItems: getTotalItems(),
      totalPrice: getTotalPrice(),
      orderDate: new Date().toISOString(),
      ...checkoutData
    };
    
    // Clear cart after successful checkout
    clearCart();
    showFeedback('Order placed successfully!');
    setIsCartOpen(false);
    
    return orderInfo;
  };

  return {
    cart,
    isCartOpen,
    feedbackMessage,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    toggleCart,
    setIsCartOpen,
    checkout,
    showFeedback
  };
};

export default useCart;