import { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // In a real app, send this to your backend
    console.log('Form submitted:', formData);
    
    // Show success message
    setFormSubmitted(true);
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };
  
  return (
    <section id="contactForm" className="py-16">
      <div className="container">
        <motion.h3 
          className="text-[1.8rem] md:text-[3.6rem] font-semibold text-black-1 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact & Inquiry
        </motion.h3>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {formSubmitted ? (
            <motion.div 
              className="bg-green-1 text-white p-6 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-[2rem] md:text-[2.4rem] font-medium mb-4">Message Sent!</h4>
              <p className="text-[1.6rem]">Thank you for contacting us. We will get back to you as soon as possible.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* First Name */}
              <div className="form-group">
                <label htmlFor="firstName" className="block text-[1.6rem] md:text-[1.8rem] font-poppins text-black-2 font-medium mb-2">
                  First Name
                </label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-none bg-lightGreen-1 text-[1.4rem] md:text-[1.8rem] font-raleway font-semibold py-4 md:py-5 px-6 rounded-lg text-black-2"
                  required
                />
              </div>
              
              {/* Last Name */}
              <div className="form-group">
                <label htmlFor="lastName" className="block text-[1.6rem] md:text-[1.8rem] font-poppins text-black-2 font-medium mb-2">
                  Last Name
                </label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-none bg-lightGreen-1 text-[1.4rem] md:text-[1.8rem] font-raleway font-semibold py-4 md:py-5 px-6 rounded-lg text-black-2"
                  required
                />
              </div>
              
              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="block text-[1.6rem] md:text-[1.8rem] font-poppins text-black-2 font-medium mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-none bg-lightGreen-1 text-[1.4rem] md:text-[1.8rem] font-raleway font-semibold py-4 md:py-5 px-6 rounded-lg text-black-2"
                  required
                />
              </div>
              
              {/* Subject */}
              <div className="form-group">
                <label htmlFor="subject" className="block text-[1.6rem] md:text-[1.8rem] font-poppins text-black-2 font-medium mb-2">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-none bg-lightGreen-1 text-[1.4rem] md:text-[1.8rem] font-raleway font-semibold py-4 md:py-5 px-6 rounded-lg text-black-2"
                  required
                />
              </div>
              
              {/* Message */}
              <div className="form-group md:col-span-2">
                <label htmlFor="message" className="block text-[1.6rem] md:text-[1.8rem] font-poppins text-black-2 font-medium mb-2">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="10"
                  className="w-full border-none bg-lightGreen-1 text-[1.4rem] md:text-[1.8rem] font-raleway font-semibold py-4 md:py-5 px-6 rounded-lg text-black-2 resize-vertical"
                  required
                ></textarea>
              </div>
              
              {/* Submit Button */}
              <div className="md:col-span-2">
                <motion.button 
                  type="submit"
                  className="btn primary-btn transition-colors hover:bg-green-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Send
                </motion.button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;