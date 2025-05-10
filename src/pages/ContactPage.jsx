import { useEffect } from 'react';
import ContactInfo from '../components/contact/ContactInfo';
import Map from '../components/contact/Map';
import ContactForm from '../components/contact/ContactForm';

const ContactPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set document title
    document.title = 'Contact | Halal Street';
  }, []);
  
  return (
    <>
      <ContactInfo />
      <Map />
      <ContactForm />
    </>
  );
};

export default ContactPage;