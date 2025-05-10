import { motion } from 'framer-motion';

const OurGoals = () => {
  return (
    <section id="ourGoals" className="py-16">
      <div className="container">
        {/* Text Content */}
        <motion.div 
          className="text-left md:text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-[1.8rem] md:text-[3.6rem] font-semibold text-black-1 mb-6">
            Our Goals
          </h3>
          <p className="text-[1.4rem] md:text-[1.8rem] text-black-2 leading-relaxed max-w-3xl mx-auto">
            We shall sell delicious and remarkable food and beverages that meet the highest quality, freshness, and
            seasonality criteria while combining modern-creative and classic cooking traditions. By showcasing warmth,
            graciousness, efficiency, skill, professionalism, and integrity in our work, we will continually serve our
            consumers with exceptional service. To have every customer who comes through our doors leave impressed by
            their experience at Halal Street and excited to come back again.
          </p>
        </motion.div>
        
        {/* Images Grid */}
        <motion.div 
          className="max-w-3xl mx-auto grid grid-cols-2 gap-4 md:gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="row-span-2">
            <img 
              src="/images/ourGoals_img1.png" 
              alt="kitchen" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div>
            <img 
              src="/images/ourGoals_img2.png" 
              alt="kitchen" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div>
            <img 
              src="/images/ourGoals_img3.png" 
              alt="kitchen" 
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurGoals;