import { useContext } from 'react';
import { motion } from 'framer-motion';
import CartContext from '../../context/CartContext';

const DishItem = ({ dish, className = '' }) => {
  const { addToCart } = useContext(CartContext);
  
  const handleAddToCart = () => {
    addToCart({
      title: dish.title,
      price: dish.price,
      img: dish.img,
      quantity: 1
    });
  };
  
  return (
    <motion.div 
      className={`bg-lightGreen-1 rounded-lg p-4 md:p-6 flex flex-col sm:flex-row gap-4 h-full ${className}`}
      whileHover={{ y: -5, transition: { duration: 0.3 } }}
    >
      <div className="sm:w-2/5 h-[150px] sm:h-auto">
        <img 
          src={dish.img} 
          alt={dish.title} 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="text-[1.4rem] md:text-[2rem] font-medium text-black-1 mb-2 leading-tight">
          {dish.title}
        </h3>
        
        <h4 className="text-[1.4rem] md:text-[1.8rem] font-semibold text-green-1 mb-2">
          ${parseFloat(dish.price).toFixed(2)}
        </h4>
        
        <div className="mb-2 max-h-[15px] w-max">
          <img src="/images/3star.png" alt="3 stars" />
        </div>
        
        {dish.description && (
          <p className="text-[1.4rem] text-black-2 font-medium mb-4 line-clamp-3">
            {dish.description}
          </p>
        )}
        
        <motion.button 
          className="mt-auto bg-green-1 text-white border-none rounded-md py-2 px-3 text-[1.4rem] cursor-pointer transition-colors hover:bg-green-2 w-max"
          onClick={handleAddToCart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add to Cart
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DishItem;