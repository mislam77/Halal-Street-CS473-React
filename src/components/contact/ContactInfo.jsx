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

const ContactInfo = () => {
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
          className="flex flex-wrap justify-center gap-4 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {storeItems.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-lightGreen-1 py-5 px-8 md:py-10 md:px-0 rounded-xl text-center min-w-[150px] md:min-w-[200px]"
              variants={itemVariants}
            >
              <div className="w-[30px] md:w-[47px] h-auto mx-auto mb-6 md:mb-10">
                <img src={item.icon} alt={`${item.text} icon`} className="w-full h-full" />
              </div>
              <h3 className="text-[1.4rem] md:text-[1.8rem] font-poppins font-medium text-black-1 mb-2 md:mb-4">
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

export default ContactInfo;