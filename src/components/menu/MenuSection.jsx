import { useContext } from 'react';
import { motion } from 'framer-motion';
import CartContext from '../../context/CartContext';

const MenuSection = ({ title, specialItems }) => {
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
    <section id="ourSpecials" className="py-12">
      <div className="container">
        <motion.h3 
          className="text-[1.8rem] md:text-[2.4rem] font-semibold text-black-1 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h3>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-6 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {specialItems.map((item, index) => (
            <motion.div 
              key={index}
              className="flex-1 flex gap-8 bg-lightGreen-1 p-6 md:p-12 rounded-xl"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + (index * 0.1) }}
              viewport={{ once: true }}
            >
              <div className="flex-1 md:flex-4 rounded-xl overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 md:flex-3 flex flex-col">
                <h3 className="text-[2.4rem] md:text-[3rem] font-medium text-black-1 mb-6 leading-tight">
                  {item.title}
                </h3>
                <h4 className="text-[1.8rem] md:text-[2.4rem] font-semibold text-green-1 mb-6">
                  ${item.price}
                </h4>
                <div className="mb-6">
                  <img src="/images/3star.png" alt="3 stars" className="h-[15px] w-auto" />
                </div>
                
                <motion.button 
                  className="mt-auto bg-green-1 text-white border-none rounded-md py-3 px-6 text-[1.6rem] cursor-pointer transition-colors hover:bg-green-2 w-max"
                  onClick={() => handleAddToCart(item)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MenuSection;