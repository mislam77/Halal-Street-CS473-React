import { useContext } from 'react';
import { motion } from 'framer-motion';
import CartContext from '../../context/CartContext';

const specialDishes = [
  {
    img: '/images/food-3.png',
    title: 'Sweet Potato Fries Bowl',
    price: 18,
    description: 'These Sweet Potato Fries bowl are a glorious, messy plate of goodness. Crispy sweet potato fries loaded with lots of fresh summer vegetables and a lime ranch.'
  },
  {
    img: '/images/food-1.png',
    title: 'Vegan Salad bowl',
    price: 18,
    description: 'Vegan salad bowl are immensely satisfying with any combination of whole grains, pulses, noodles, raw or cooked fruits, and veggies all topped off with a delicious sauce or dressing.'
  }
];

const OurSpecials = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = (dish) => {
    addToCart({
      title: dish.title,
      price: dish.price,
      img: dish.img,
      quantity: 1
    });
  };

  return (
    <section id="ourSpecials" className="py-16 bg-[#FBF1E1]">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left Side - Special Items */}
          <motion.div 
            className="flex flex-1 gap-8 w-full"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {specialDishes.map((dish, index) => (
              <motion.div 
                key={index}
                className="relative bg-white rounded-xl p-6 flex-1 shadow-md max-w-[280px]"
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
              >
                {/* Dish Image - In a contained box with fixed dimensions */}
                <div className="mb-2 rounded-lg overflow-hidden w-full h-[180px]">
                  <img 
                    src={dish.img} 
                    alt={dish.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Rating Stars - Positioned below the image */}
                <div className="h-[15px] w-max mb-3">
                  <img src="/images/3star.png" alt="3 stars" className="h-full" />
                </div>
                
                {/* Dish Info */}
                <h3 className="text-[1.4rem] md:text-[1.6rem] font-semibold text-black-1 mb-2 leading-tight">
                  {dish.title}
                </h3>
                
                <p className="text-[1.4rem] font-semibold text-green-1 mb-3">
                  ${dish.price}
                </p>
                
                <p className="text-[1.3rem] text-black-2 font-medium mb-4 line-clamp-3 h-[60px]">
                  {dish.description}
                </p>
                
                <div className="flex justify-center mt-auto">
                  <motion.button 
                    className="bg-green-1 text-white border-none rounded-md py-2 px-4 text-[1.4rem] cursor-pointer transition-colors hover:bg-green-2"
                    onClick={() => handleAddToCart(dish)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Right Side - Text */}
          <motion.div 
            className="flex-1 md:max-w-[40%] mt-6 md:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[2.4rem] md:text-[3.6rem] text-black-1 font-semibold mb-6">
              Our Specials
            </h2>
            <p className="text-[1.6rem] md:text-[1.8rem] text-black-2 mb-6 leading-relaxed">
              All of our food is prepared daily at our restaurants to ensure the highest quality, freshest meals are
              delivered to our customers
            </p>
            <p className="text-[1.6rem] md:text-[1.8rem] text-black-2 leading-relaxed">
              We use only the finest ingredients, sourced locally whenever possible, to create our delicious dishes that keep our customers coming back for more.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurSpecials;