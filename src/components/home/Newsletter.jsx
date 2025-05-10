import { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError('Please enter your email address');
      return;
    }
    
    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }
    
    // In a real app, you would send this to your backend
    console.log('Subscribing email:', email);
    
    // Show success message
    setSubmitted(true);
    
    // Reset form
    setEmail('');
    
    // Hide success message after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };
  
  return (
    <section id="newsletter" className="py-16">
      <div className="container">
        <motion.div 
          className="bg-lightGreen-1 rounded-lg px-6 py-12 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-lg relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-[150px] h-[150px] opacity-10">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#DC3C24" d="M45.7,-76.5C58.9,-69.2,69.1,-56.2,76.3,-42.1C83.4,-28,87.5,-13.9,85.5,-1.1C83.5,11.7,75.3,23.3,68.1,36.2C60.9,49.1,54.6,63.2,43.9,72.5C33.2,81.8,16.6,86.4,0.7,85.3C-15.2,84.2,-30.5,77.5,-44.3,69C-58.1,60.4,-70.4,50,-76.1,37C-81.7,24.1,-80.8,8.6,-78.3,-6.1C-75.8,-20.8,-71.7,-34.7,-63.2,-45C-54.8,-55.4,-41.9,-62.3,-28.9,-69.8C-15.9,-77.3,-1.9,-85.3,12.2,-85.5C26.4,-85.6,32.5,-83.8,45.7,-76.5Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          {/* Newsletter Info */}
          <motion.div 
            className="flex-1 relative z-10"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[2.4rem] md:text-[3.2rem] font-semibold text-black-1 mb-4">
              Join Our Newsletter
            </h3>
            <p className="text-[1.6rem] md:text-[1.8rem] text-black-2 max-w-md">
              Get notified with the latest news, special promotions and exclusive offers from "Halal Street" restaurant.
            </p>
          </motion.div>
          
          {/* Newsletter Form */}
          <motion.div 
            className="flex-1 w-full max-w-lg relative z-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <form 
              onSubmit={handleSubmit}
              className="w-full relative flex flex-col sm:flex-row gap-2"
            >
              <div className="flex-grow relative">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="w-full text-[1.6rem] py-4 px-6 rounded-lg border-2 border-gray-300 focus:border-green-1 outline-none shadow-sm bg-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-label="Email address"
                />
              </div>
              <button 
                type="submit"
                className="bg-green-1 text-white border-none rounded-lg px-6 py-4 text-[1.6rem] hover:bg-green-2 transition-colors duration-300 shadow-sm flex-shrink-0"
                aria-label="Join newsletter"
              >
                Join
              </button>
            </form>
            
            {/* Error Message */}
            {error && (
              <motion.p 
                className="text-red-500 mt-2 text-[1.4rem]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                {error}
              </motion.p>
            )}
            
            {/* Success Message */}
            {submitted && (
              <motion.p 
                className="text-green-1 mt-2 text-[1.4rem] font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Thank you for subscribing! We'll keep you updated with our latest offers.
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;