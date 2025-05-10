import { useContext } from 'react';
import { motion } from 'framer-motion';
import CartContext from '../../context/CartContext';

const specialDishes = [
  {
    img: '/images/food-3.png',
    title: 'Sweet Potato Fries Bowl',
    price: 18,
    description: 'These Sweet Potato Fries bowl are a glorious, messy plate of goodness. Crispy sweet potato fries loaded with lots of fresh summer vegetables and a lime ranch. By adding a seasoning blend with chipotle powder, garlic, and onion, these spicy sweet potato fries are full of flavor.'
  },
  {
    img: '/images/food-1.png',
    title: 'Vegan Salad bowl',
    price: 18,
    description: 'Vegan salad bowl are immensely satisfying with any combination of whole grains, pulses, noodles, raw or cooked fruits, and veggies all topped off with a delicious sauce or dressing – each bite is an explosion of flavors and textures.'
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
    <section id="ourSpecials" className="pt-40 pb-20">
      <div className="container max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Side - Special Items */}
          <motion.div 
            className="flex flex-1 md:flex-[4] gap-4 md:gap-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {specialDishes.map((dish, index) => (
              <div 
                key={index}
                className="relative bg-lightGreen-1 rounded-xl p-5 pt-20 md:p-8 md:pt-20 w-[45%] mx-auto"
              >
                {/* Dish Image */}
                <div className="absolute left-0 right-0 -top-1/2 mb-8 rounded-xl h-[150px] overflow-hidden">
                  <img 
                    src={dish.img} 
                    alt={dish.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Dish Info */}
                <h3 className="text-[1.4rem] md:text-[2.4rem] font-semibold text-black-1 mb-4 leading-tight">
                  {dish.title}
                </h3>
                <p className="text-[1.4rem] md:text-[1.8rem] font-semibold text-green-1 mb-4">
                  ${dish.price}
                </p>
                <div className="h-[15px] w-max mb-4">
                  <img src="/images/3star.png" alt="3 stars" />
                </div>
                <p className="text-[1.4rem] md:text-[1.6rem] text-black-2 font-medium mb-4">
                  {dish.description}
                </p>
                
                <button 
                  className="bg-green-1 text-white border-none rounded-md py-2 px-3 text-[1.4rem] cursor-pointer transition-colors hover:bg-green-2"
                  onClick={() => handleAddToCart(dish)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </motion.div>
          
          {/* Right Side - Text */}
          <motion.div 
            className="flex-1 md:flex-[2]"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[1.8rem] md:text-[3.6rem] text-black-1 font-semibold mb-6">
              Our Specials
            </h2>
            <p className="text-[1.4rem] md:text-[1.8rem] text-black-2 mb-6">
              All of our food is prepared daily at our restaurants to ensure the highest quality, freshest meals are
              delivered to our customers
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurSpecials;