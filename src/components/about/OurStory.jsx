import { motion } from 'framer-motion';

const OurStory = () => {
  return (
    <section id="ourStory" className="py-16">
      <div className="container">
        <motion.div 
          className="flex flex-col md:flex-row gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Image */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img 
              src="/images/ourStoryImg.png" 
              alt="Halal Street" 
              className="w-full h-auto rounded-xl"
            />
          </motion.div>
          
          {/* Content */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-[1.8rem] md:text-[3.6rem] font-semibold text-black-1 mb-4">
              Our Story
            </h3>
            <p className="text-[1.4rem] md:text-[1.8rem] font-semibold text-black-1 mb-8">
              It's all started since 1998
            </p>
            <p className="text-[1.4rem] md:text-[1.8rem] text-black-2 leading-relaxed mb-6">
              Welcome to Halal Street. We take pride in delivering warm, friendly service and creating mouth-watering
              culinary delights for all. Using only the freshest locally sourced ingredients, we'll ensure you have a dining
              experience to remember.
            </p>
            <p className="text-[1.4rem] md:text-[1.8rem] text-black-2 leading-relaxed">
              Since 1998, we are the perfect place for a romantic meal for two, a catch-up with friends, family parties,
              business meetings, and bringing loved ones together. With comfortable surroundings, affordable prices, and
              seating for up to 65 guests, we can cater for all occasions.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStory;