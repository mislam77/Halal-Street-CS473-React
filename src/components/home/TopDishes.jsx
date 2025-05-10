import { motion } from 'framer-motion';
import DishItem from '../common/DishItem';

const topDishes = [
  {
    img: '/images/food-1.png',
    title: 'Vegan Salad bowl',
    price: 12
  },
  {
    img: '/images/food-2.png',
    title: 'Vegan Pesto Zoodles',
    price: 12
  },
  {
    img: '/images/food-7.png',
    title: 'Hot Green Bowl',
    price: 12
  }
];

const TopDishes = () => {
  return (
    <section id="dishGrid" className="py-16 bg-lightGreen-1/30">
      <div className="container">
        <motion.h2 
          className="text-[2.2rem] md:text-[2.8rem] font-semibold text-black-1 mb-8 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-[3px] after:w-[60%] after:bg-green-1">
            Top Dishes
          </span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {topDishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <DishItem dish={dish} className="h-full shadow-md hover:shadow-lg transition-shadow duration-300" />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="/menu" 
            className="inline-block bg-green-1 text-white py-3 px-8 text-[1.6rem] font-medium rounded-lg hover:bg-green-2 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Dishes
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default TopDishes;