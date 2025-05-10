import { useContext } from 'react';
import { motion } from 'framer-motion';
import CartContext from '../../context/CartContext';

const discountItem = {
  title: 'Demo Dish For Discount',
  oldPrice: 45,
  newPrice: 35,
  img1: '/images/food-5.png',
  img2: '/images/food-4.png',
  img3: '/images/food-3.png'
};

const Discount = () => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart({
      title: discountItem.title,
      price: discountItem.newPrice,
      img: discountItem.img1,
      quantity: 1
    });
  };

  return (
    <section id="discount" className="py-16 bg-white">
      <div className="container">
        <motion.div 
          className="bg-lightGreen-1 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-8 md:gap-12 relative overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Decorations */}
          <div className="absolute -bottom-10 -right-10 w-[150px] h-[150px] opacity-10 rotate-45">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#DC3C24" d="M45.7,-76.5C58.9,-69.2,69.1,-56.2,76.3,-42.1C83.4,-28,87.5,-13.9,85.5,-1.1C83.5,11.7,75.3,23.3,68.1,36.2C60.9,49.1,54.6,63.2,43.9,72.5C33.2,81.8,16.6,86.4,0.7,85.3C-15.2,84.2,-30.5,77.5,-44.3,69C-58.1,60.4,-70.4,50,-76.1,37C-81.7,24.1,-80.8,8.6,-78.3,-6.1C-75.8,-20.8,-71.7,-34.7,-63.2,-45C-54.8,-55.4,-41.9,-62.3,-28.9,-69.8C-15.9,-77.3,-1.9,-85.3,12.2,-85.5C26.4,-85.6,32.5,-83.8,45.7,-76.5Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="absolute -top-10 -left-10 w-[100px] h-[100px] opacity-10 rotate-12">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#DC3C24" d="M45.7,-76.5C58.9,-69.2,69.1,-56.2,76.3,-42.1C83.4,-28,87.5,-13.9,85.5,-1.1C83.5,11.7,75.3,23.3,68.1,36.2C60.9,49.1,54.6,63.2,43.9,72.5C33.2,81.8,16.6,86.4,0.7,85.3C-15.2,84.2,-30.5,77.5,-44.3,69C-58.1,60.4,-70.4,50,-76.1,37C-81.7,24.1,-80.8,8.6,-78.3,-6.1C-75.8,-20.8,-71.7,-34.7,-63.2,-45C-54.8,-55.4,-41.9,-62.3,-28.9,-69.8C-15.9,-77.3,-1.9,-85.3,12.2,-85.5C26.4,-85.6,32.5,-83.8,45.7,-76.5Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          {/* Images */}
          <div className="flex gap-4 md:gap-6 flex-1 md:flex-5 relative z-10">
            <motion.div 
              className="flex-2 h-[200px] md:h-[280px] rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img 
                src={discountItem.img1} 
                alt="Discount food" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="flex-3 h-[200px] md:h-[280px] rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <img 
                src={discountItem.img2} 
                alt="Discount food" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div 
              className="hidden md:block flex-2 h-[280px] rounded-xl overflow-hidden shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src={discountItem.img3} 
                alt="Discount food" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
          {/* Discount Info */}
          <div className="flex-1 md:flex-3 relative z-10">
            <motion.div
              className="inline-block bg-green-1 text-white font-bold py-2 px-4 rounded-lg mb-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="text-[1.6rem] md:text-[2rem]">20% OFF</span>
            </motion.div>
            
            <motion.h2 
              className="text-[2rem] md:text-[3rem] font-semibold text-black-1 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {discountItem.title}
            </motion.h2>
            
            <motion.div 
              className="flex gap-4 text-[1.8rem] md:text-[2.2rem] font-semibold mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <span className="text-black-2 line-through">${discountItem.oldPrice}</span>
              <span className="text-green-1">${discountItem.newPrice}</span>
            </motion.div>
            
            <div className="h-[15px] md:h-[20px] w-max mb-6">
              <img src="/images/3star.png" alt="3 stars" />
            </div>
            
            <motion.button 
              className="bg-green-1 text-white border-none rounded-md py-3 px-6 text-[1.6rem] cursor-pointer transition-colors hover:bg-green-2 shadow-md"
              onClick={handleAddToCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Add to Cart
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Discount;