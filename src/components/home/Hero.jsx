import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="py-6 md:py-12">
      <div className="container flex items-center justify-center">
        <div className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden rounded-3xl shadow-lg flex items-center justify-center">
          {/* Dark overlay to improve text readability */}
          <motion.div 
            className="absolute inset-0 bg-black/40 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          
          {/* Background image */}
          <motion.img 
            src="/images/halal-street-banner.png" 
            alt="Halal Street Banner" 
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          
          {/* Text content box - Centered using flex in parent container */}
          <motion.div 
            className="relative z-20 bg-white/90 p-6 md:p-8 rounded-lg shadow-lg w-[85%] max-w-md md:max-w-lg mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="text-center">
              <h1 className="text-[2.6rem] md:text-[3.5rem] lg:text-[4.2rem] font-poppins font-semibold mb-4 text-green-1 leading-tight">
                Halal Street
              </h1>
              <p className="text-[1.5rem] md:text-[1.7rem] font-poppins mb-6 text-black-2 leading-relaxed">
                We are a multi-cuisine restaurant offering a wide variety of food experience in both casual and fine dining environment.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/menu" 
                  className="inline-block bg-green-1 text-white py-3 px-8 text-[1.5rem] md:text-[1.6rem] font-medium rounded-lg shadow-md hover:bg-green-2 transition-colors duration-300"
                >
                  Explore Menu
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;