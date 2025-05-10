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
    <section id="discount" className="py-16">
      <div className="container">
        <motion.div 
          className="bg-lightGreen-1 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{
            backgroundImage: "url('/images/discount-illustration.png')",
            backgroundPosition: "bottom right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100px"
          }}
        >
          {/* Images */}
          <div className="flex gap-4 md:gap-8 flex-1 md:flex-5">
            <div className="flex-2 h-[200px] md:h-[350px] rounded-xl overflow-hidden">
              <img 
                src={discountItem.img1} 
                alt="Discount food" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-3 h-[200px] md:h-[350px] rounded-xl overflow-hidden">
              <img 
                src={discountItem.img2} 
                alt="Discount food" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block flex-1 h-[350px] rounded-xl overflow-hidden">
              <img 
                src={discountItem.img3} 
                alt="Discount food" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Discount Info */}
          <div className="flex-1 md:flex-3">
            <motion.h3 
              className="text-[1.4rem] md:text-[2.4rem] font-bold text-green-1 mb-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              20% OFF
            </motion.h3>
            
            <motion.h2 
              className="text-[1.8rem] md:text-[3.6rem] font-semibold text-black-1 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {discountItem.title}
            </motion.h2>
            
            <motion.div 
              className="flex gap-4 text-[1.4rem] md:text-[2.4rem] font-semibold mb-4"
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
              className="bg-green-1 text-white border-none rounded-md py-3 px-6 text-[1.6rem] cursor-pointer transition-colors hover:bg-green-2"
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