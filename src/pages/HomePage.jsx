import { useEffect } from 'react';
import Hero from '../components/home/Hero';
import StoreInfo from '../components/home/StoreInfo';
import OurSpecials from '../components/home/OurSpecials';
import TopDishes from '../components/home/TopDishes';
import Discount from '../components/home/Discount';
import WhyUs from '../components/home/WhyUs';
import Newsletter from '../components/home/Newsletter';

const HomePage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set document title
    document.title = 'Halal Street | Home';
  }, []);
  
  return (
    <>
      <Hero />
      <StoreInfo />
      <OurSpecials />
      <TopDishes />
      <Discount />
      <WhyUs />
      <Newsletter />
    </>
  );
};

export default HomePage;