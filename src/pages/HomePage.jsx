import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/home/Hero';
import StoreInfo from '../components/home/StoreInfo';
import OurSpecials from '../components/home/OurSpecials';
import TopDishes from '../components/home/TopDishes';
import Discount from '../components/home/Discount';
import WhyUs from '../components/home/WhyUs';
import Newsletter from '../components/home/Newsletter';

const HomePage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set document title
    document.title = 'Halal Street | Home';
  }, []);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <StoreInfo />
      <OurSpecials />
      <TopDishes />
      <Discount />
      <WhyUs />
      <Newsletter />
      
      {/* Quick reservation button - fixed position */}
      <div className="fixed bottom-5 right-5 z-50">
        <motion.a
          href="/contact"
          className="bg-green-1 text-white text-[1.6rem] px-6 py-3 rounded-full shadow-lg flex items-center justify-center hover:bg-green-2 transition-colors duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Reserve Now
        </motion.a>
      </div>
    </motion.div>
  );
};

export default HomePage;