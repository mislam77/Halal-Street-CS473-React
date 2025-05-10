import { useEffect } from 'react';
import OurStory from '../components/about/OurStory';
import OurGoals from '../components/about/OurGoals';

const AboutPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set document title
    document.title = 'About | Halal Street';
  }, []);
  
  return (
    <>
      <OurStory />
      <OurGoals />
    </>
  );
};

export default AboutPage;