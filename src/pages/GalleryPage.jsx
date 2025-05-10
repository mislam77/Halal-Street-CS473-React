import { useEffect } from 'react';
import ImageGallery from '../components/gallery/ImageGallery';

const GalleryPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set document title
    document.title = 'Gallery | Halal Street';
  }, []);
  
  return (
    <>
      <ImageGallery />
    </>
  );
};

export default GalleryPage;