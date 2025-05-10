import { useEffect } from 'react';
import { motion } from 'framer-motion';
import MenuSection from '../components/menu/MenuSection';
import DishGrid from '../components/menu/DishGrid';
import FloatingCartButton from '../components/common/FloatingCartButton';
import Cart from '../components/common/Cart';

// Special dishes for the menu page
const specialDishes = [
  {
    img: '/images/food-3.png',
    title: 'Sweet Potato Fries Bowl',
    price: 12
  },
  {
    img: '/images/food-1.png',
    title: 'Vegan Salad bowl',
    price: 12
  }
];

// Top dishes
const topDishes = [
  {
    img: '/images/food-1.png',
    title: 'Chicken Biryani Special',
    price: 19
  },
  {
    img: '/images/food-7.png',
    title: 'Mixed Grill Feast',
    price: 28
  },
  {
    img: '/images/food-1.png',
    title: 'Vegetarian Delight Platter',
    price: 17
  }
];

// Breakfast dishes
const breakfastDishes = [
  {
    img: '/images/food-1.png',
    title: 'Avocado Toast',
    price: 10
  },
  {
    img: '/images/food-2.png',
    title: 'Mediterranean Breakfast',
    price: 11
  },
  {
    img: '/images/food-3.png',
    title: 'Halal Breakfast Platter',
    price: 13
  },
  {
    img: '/images/food-4.png',
    title: 'Morning Glory Bowl',
    price: 9
  },
  {
    img: '/images/food-5.png',
    title: 'Shakshuka Special',
    price: 12
  }
];

// Lunch dishes
const lunchDishes = [
  {
    img: '/images/food-6.png',
    title: 'Falafel Wrap Deluxe',
    price: 13
  },
  {
    img: '/images/food-7.png',
    title: 'Chicken Shawarma Plate',
    price: 16
  },
  {
    img: '/images/food-1.png',
    title: 'Lentil Soup & Salad Combo',
    price: 11
  },
  {
    img: '/images/food-2.png',
    title: 'Hummus Platter Special',
    price: 14
  },
  {
    img: '/images/food-3.png',
    title: 'Middle Eastern Mezze',
    price: 17
  }
];

// Dinner dishes
const dinnerDishes = [
  {
    img: '/images/food-4.png',
    title: 'Lamb Kofta Platter',
    price: 22
  },
  {
    img: '/images/food-5.png',
    title: 'Grilled Halal Salmon',
    price: 24
  },
  {
    img: '/images/food-6.png',
    title: 'Chicken Biryani Special',
    price: 19
  },
  {
    img: '/images/food-7.png',
    title: 'Mixed Grill Feast',
    price: 28
  },
  {
    img: '/images/food-1.png',
    title: 'Vegetarian Delight Platter',
    price: 17
  }
];

const MenuPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set document title
    document.title = 'Menu | Halal Street';
  }, []);
  
  return (
    <>
      {/* Page Title */}
      <section id="page__title" className="pt-12 pb-8">
        <div className="container">
          <motion.h2 
            className="text-[2.2rem] md:text-[3.6rem] font-semibold text-black-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Explore Our Menu
          </motion.h2>
        </div>
      </section>
      
      {/* Specials Section */}
      <MenuSection 
        title="Our Specials" 
        specialItems={specialDishes} 
      />
      
      {/* Top Dishes */}
      <DishGrid 
        title="Top Dishes" 
        dishes={topDishes} 
      />
      
      {/* Breakfast */}
      <DishGrid 
        title="Breakfast" 
        dishes={breakfastDishes} 
      />
      
      {/* Lunch */}
      <DishGrid 
        title="Lunch" 
        dishes={lunchDishes} 
      />
      
      {/* Dinner */}
      <DishGrid 
        title="Dinner" 
        dishes={dinnerDishes} 
      />
      
      {/* Floating Cart Button */}
      <FloatingCartButton />
      
      {/* Cart Component */}
      <Cart />
    </>
  );
};

export default MenuPage;