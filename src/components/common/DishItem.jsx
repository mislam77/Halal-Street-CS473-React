import { useContext } from 'react';
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
    <div className={`bg-lightGreen-1 rounded-lg p-2 md:p-6 flex flex-col sm:flex-row gap-2 md:gap-4 ${className}`}>
      <div className="flex-1 h-[150px] sm:h-auto">
        <img 
          src={dish.img} 
          alt={dish.title} 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      
      <div className="flex-1 flex flex-col">
        <h3 className="text-[1.4rem] md:text-[2.4rem] font-medium text-black-1 mb-2 md:mb-4 leading-tight">
          {dish.title}
        </h3>
        
        <h4 className="text-[1.4rem] md:text-[2rem] font-semibold text-green-1 mb-2 md:mb-4">
          ${dish.price}
        </h4>
        
        <div className="mb-2 md:mb-4 max-h-[15px] w-max">
          <img src="/images/3star.png" alt="3 stars" />
        </div>
        
        {dish.description && (
          <p className="text-[1.4rem] md:text-[1.6rem] text-black-2 font-medium mb-4">
            {dish.description}
          </p>
        )}
        
        <button 
          className="mt-auto bg-green-1 text-white border-none rounded-md py-2 px-3 text-[1.4rem] cursor-pointer transition-colors hover:bg-green-2 w-max"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default DishItem;