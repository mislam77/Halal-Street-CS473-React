import { useState } from 'react';
import { motion } from 'framer-motion';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email && email.includes('@')) {
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
    }
  };
  
  return (
    <section id="newsletter" className="py-16">
      <div className="container">
        <motion.div 
          className="bg-green-2 rounded-lg p-6 md:p-12 flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Newsletter Info */}
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[1.8rem] md:text-[3.6rem] font-semibold text-black-1 mb-4">
              Join Newsletter
            </h3>
            <p className="text-[1.4rem] md:text-[1.8rem] text-black-2 max-w-md">
              Get notified with the latest news and recent offers from the "Halal Street" restaurant.
            </p>
          </motion.div>
          
          {/* Newsletter Form */}
          <motion.div 
            className="flex-1 w-full max-w-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <form 
              onSubmit={handleSubmit}
              className="w-full relative"
            >
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full text-[1.4rem] md:text-[1.8rem] py-4 md:py-5 px-4 rounded-lg border-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="absolute right-0 top-0 h-full bg-green-1 text-white-1 border-none rounded-r-lg px-6 md:px-8 text-[1.4rem] md:text-[1.8rem] hover:bg-black-1 transition-colors"
              >
                Join
              </button>
            </form>
            
            {/* Success Message */}
            {submitted && (
              <motion.p 
                className="text-white mt-2 text-[1.4rem]"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Thank you for subscribing!
              </motion.p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;