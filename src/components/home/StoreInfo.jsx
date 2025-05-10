import { motion } from 'framer-motion';

const storeItems = [
  {
    icon: '/images/wall-clock-icon.svg',
    title: '10 AM - 7 PM',
    text: 'Opening Hour'
  },
  {
    icon: '/images/address-icon.svg',
    title: 'New York',
    text: 'Address'
  },
  {
    icon: '/images/phone-icon.svg',
    title: '+1234567890',
    text: 'Call Now'
  }
];

const StoreInfo = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="storeInfo" className="py-16">
      <div className="container">
        <motion.div 
          className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {storeItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-lightGreen-1 py-6 px-10 rounded-xl text-center flex-1 min-w-[280px] max-w-[350px] shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="w-[40px] md:w-[50px] h-auto mx-auto mb-6">
                <img src={item.icon} alt={`${item.text} icon`} className="w-full h-full" />
              </div>
              <h3 className="text-[1.6rem] md:text-[1.8rem] font-poppins font-medium text-black-1 mb-2">
                {item.title}
              </h3>
              <p className="text-[1.4rem] md:text-[1.6rem] font-raleway text-black-2">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StoreInfo;