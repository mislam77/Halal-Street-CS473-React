import { motion } from 'framer-motion';

const whyUsItems = [
  {
    icon: '/images/whyUs-icon1.svg',
    text: 'Quality Food'
  },
  {
    icon: '/images/whyUs-icon2.svg',
    text: 'Classical taste'
  },
  {
    icon: '/images/whyUs-icon3.svg',
    text: 'Skilled chef'
  },
  {
    icon: '/images/whyUs-icon4.svg',
    text: 'Best service'
  }
];

const WhyUs = () => {
  return (
    <section id="whyUs" className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 max-w-5xl mx-auto">
          {/* Left Text */}
          <motion.div 
            className="text-center md:text-left flex-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[2.4rem] md:text-[3.6rem] text-black-1 font-semibold mb-4 md:mb-8 relative inline-block">
              Why Choose Our Food
              <span className="absolute left-0 bottom-[-8px] h-[3px] w-[60%] bg-green-1"></span>
            </h2>
            <p className="text-[1.6rem] md:text-[1.8rem] text-black-2 leading-relaxed max-w-lg">
              Quality of Service, Food, Ambiance, and Value of Money are the primary elements for choosing a restaurant.
              Halal Street is one of the most exquisite fine-dining restaurants in New York city, with perfect ambiance and scrumptious food.
            </p>
          </motion.div>
          
          {/* Right Grid */}
          <motion.div 
            className="text-center flex-1"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {whyUsItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-lightGreen-1 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="max-w-[56px] md:max-w-[65px] mx-auto mb-4 md:mb-6">
                    <img 
                      src={item.icon} 
                      alt={item.text} 
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="font-poppins text-[1.4rem] md:text-[1.6rem] font-medium text-black-1">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;