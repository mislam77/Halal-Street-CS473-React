import { motion } from 'framer-motion';
import DishItem from '../common/DishItem';

const DishGrid = ({ title, dishes }) => {
  return (
    <section id="dishGrid" className="py-12">
      <div className="container">
        <motion.h2 
          className="text-[1.8rem] md:text-[2.4rem] font-semibold text-black-1 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <DishItem dish={dish} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DishGrid;