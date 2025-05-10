import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

// Gallery images
const galleryImages = [
  {
    src: '/images/food-1.png',
    alt: 'Food Image 1'
  },
  {
    src: '/images/food-2.png',
    alt: 'Food Image 2'
  },
  {
    src: '/images/food-3.png',
    alt: 'Food Image 3'
  },
  {
    src: '/images/food-4.png',
    alt: 'Food Image 4'
  },
  {
    src: '/images/food-5.png',
    alt: 'Food Image 5'
  },
  {
    src: '/images/food-6.png',
    alt: 'Food Image 6'
  }
];

const ImageGallery = () => {
  return (
    <section id="gallery" className="py-16">
      <div className="container">
        <motion.h2 
          className="text-[2.8rem] md:text-[3.6rem] text-center font-semibold text-black-1 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Food Gallery
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={600}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            className="w-full h-full"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="border-2 border-green-1 rounded-lg overflow-hidden">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageGallery;