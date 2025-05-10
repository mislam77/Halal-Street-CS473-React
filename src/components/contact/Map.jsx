import { motion } from 'framer-motion';

const Map = () => {
  return (
    <section id="googleMap" className="py-10">
      <div className="container">
        <motion.h3 
          className="text-[1.8rem] md:text-[2.4rem] font-semibold text-black-1 mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Find Us Here
        </motion.h3>
        
        <motion.div 
          className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193529.40945076506!2d-74.03178784541565!3d40.72028338157988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260570ee7ed95%3A0xb30b57a9bbef86ec!2sHalal%20Munchies!5e0!3m2!1sen!2sus!4v1741731760608!5m2!1sen!2sus"
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="Halal Street Location"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Map;