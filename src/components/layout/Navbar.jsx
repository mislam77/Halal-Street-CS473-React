import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current location/route
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // Add overflow hidden to body when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="py-8">
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to="/" className="logo">
            <img 
              src="/images/halal-street-logo.png" 
              alt="halal street" 
              className="w-[250px] h-auto"
            />
          </Link>
          
          <nav className="relative">
            {/* Mobile Menu Icon */}
            <div 
              className="md:hidden cursor-pointer" 
              onClick={toggleMenu}
            >
              <FiMenu className="w-8 h-8 text-black-1" />
            </div>
            
            {/* Menu Overlay */}
            <div 
              className={`fixed inset-0 bg-black-1/80 z-40 transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              onClick={closeMenu}
            ></div>
            
            {/* Nav List */}
            <ul className={`
              fixed md:relative top-0 right-0 h-screen md:h-auto w-4/5 md:w-auto 
              bg-lightGreen-1 md:bg-transparent z-50 flex flex-col md:flex-row 
              justify-start md:justify-center items-end md:items-center p-8 md:p-0
              transform transition-transform duration-300 ease-in-out
              ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
            `}>
              {/* Close Button for Mobile */}
              <div 
                className="absolute top-4 right-4 md:hidden cursor-pointer"
                onClick={closeMenu}
              >
                <FiX className="w-8 h-8 text-black-1" />
              </div>
              
              <div className="w-full mt-12 md:mt-0 flex flex-col md:flex-row items-end md:items-center">
                <li className="my-2 md:my-0 md:mx-4">
                  <NavLink 
                    to="/" 
                    className={({ isActive }) => 
                      `text-[1.8rem] font-poppins ${isActive ? 'text-green-1' : 'text-black-2'} hover:text-green-1 transition-colors duration-300`
                    }
                    onClick={closeMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="my-2 md:my-0 md:mx-4">
                  <NavLink 
                    to="/menu" 
                    className={({ isActive }) => 
                      `text-[1.8rem] font-poppins ${isActive ? 'text-green-1' : 'text-black-2'} hover:text-green-1 transition-colors duration-300`
                    }
                    onClick={closeMenu}
                  >
                    Menu
                  </NavLink>
                </li>
                <li className="my-2 md:my-0 md:mx-4">
                  <NavLink 
                    to="/about" 
                    className={({ isActive }) => 
                      `text-[1.8rem] font-poppins ${isActive ? 'text-green-1' : 'text-black-2'} hover:text-green-1 transition-colors duration-300`
                    }
                    onClick={closeMenu}
                  >
                    About
                  </NavLink>
                </li>
                <li className="my-2 md:my-0 md:mx-4">
                  <NavLink 
                    to="/gallery" 
                    className={({ isActive }) => 
                      `text-[1.8rem] font-poppins ${isActive ? 'text-green-1' : 'text-black-2'} hover:text-green-1 transition-colors duration-300`
                    }
                    onClick={closeMenu}
                  >
                    Gallery
                  </NavLink>
                </li>
                <li className="my-2 md:my-0 md:mx-4">
                  <NavLink 
                    to="/contact" 
                    className={({ isActive }) => 
                      `text-[1.8rem] font-poppins ${isActive ? 'text-green-1' : 'text-black-2'} hover:text-green-1 transition-colors duration-300`
                    }
                    onClick={closeMenu}
                  >
                    Contact
                  </NavLink>
                </li>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;