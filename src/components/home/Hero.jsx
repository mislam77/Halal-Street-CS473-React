import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="py-10 md:py-16">
      <div className="container">
        <div className="relative w-full h-[80vh] overflow-hidden rounded-3xl">
          <motion.img 
            src="/images/halal-street-banner.png" 
            alt="Halal Street Banner" 
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          
          <motion.div 
            className="absolute top-1/2 left-[5%] right-[5%] transform -translate-y-3/4 bg-white/70 p-5 md:p-10 rounded-lg text-black-1 max-w-xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h1 className="text-[3.6rem] md:text-[4.8rem] font-poppins font-semibold mb-4">Halal Street</h1>
            <p className="text-[1.8rem] md:text-[2.4rem] font-poppins mb-6">
              We are a multi-cuisine restaurant offering a wide variety of food experience in both casual and fine dining environment.
            </p>
            <div>
              <Link 
                to="/menu" 
                className="btn primary-btn transition-colors hover:bg-green-2"
              >
                Explore Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;