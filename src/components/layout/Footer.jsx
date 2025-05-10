import { Link } from 'react-router-dom';
import { FiFacebook, FiInstagram, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  return (
    <>
      <footer className="bg-lightGreen-1 pt-20 pb-8">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Column 1 - Logo and Social */}
            <div className="flex-1 md:flex-4">
              <div className="mb-8">
                <Link to="/">
                  <img 
                    src="/images/halal-street-logo.png" 
                    alt="Halal Street" 
                    className="w-[250px] h-auto" 
                  />
                </Link>
              </div>
              <p className="font-raleway text-[1.4rem] md:text-[1.8rem] text-black-2 mb-8 md:mb-10 md:max-w-[300px]">
                Fresh and delicious traditional Halal food to delight the whole family.
              </p>
              
              <div className="socials">
                <h4 className="text-[1.8rem] md:text-[2rem] text-black-1 mb-4 md:mb-6 font-medium">
                  Follow us
                </h4>
                <ul className="flex gap-2">
                  <li>
                    <a href="#" className="inline-block p-2 bg-white-1 border border-green-2 rounded-lg transition-colors hover:bg-green-1 hover:text-white-1">
                      <FiFacebook className="w-5 h-5 text-black-2 hover:text-white-1" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-block p-2 bg-white-1 border border-green-2 rounded-lg transition-colors hover:bg-green-1 hover:text-white-1">
                      <FiInstagram className="w-5 h-5 text-black-2 hover:text-white-1" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="inline-block p-2 bg-white-1 border border-green-2 rounded-lg transition-colors hover:bg-green-1 hover:text-white-1">
                      <FiTwitter className="w-5 h-5 text-black-2 hover:text-white-1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Column 2 - Links */}
            <div className="flex-1 md:flex-2">
              <h3 className="text-[1.8rem] md:text-[2rem] text-black-1 font-semibold mb-4 md:mb-8">
                Links
              </h3>
              <ul className="flex flex-col gap-2 md:gap-4">
                <li>
                  <Link to="/" className="text-[1.4rem] md:text-[1.8rem] text-black-2 font-raleway font-medium hover:text-green-1 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/menu" className="text-[1.4rem] md:text-[1.8rem] text-black-2 font-raleway font-medium hover:text-green-1 transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-[1.4rem] md:text-[1.8rem] text-black-2 font-raleway font-medium hover:text-green-1 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-[1.4rem] md:text-[1.8rem] text-black-2 font-raleway font-medium hover:text-green-1 transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="text-[1.4rem] md:text-[1.8rem] text-black-2 font-raleway font-medium hover:text-green-1 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 3 - Support */}
            <div className="flex-1 md:flex-2">
              <h3 className="text-[1.8rem] md:text-[2rem] text-black-1 font-semibold mb-4 md:mb-8">
                Support
              </h3>
              <ul className="flex flex-col gap-2 md:gap-4">
                <li>
                  <a href="#" className="text-[1.4rem] md:text-[1.8rem] text-black-2 font-raleway font-medium hover:text-green-1 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[1.4rem] md:text-[1.8rem] text-black-2 font-raleway font-medium hover:text-green-1 transition-colors">
                    Support Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[1.4rem] md:text-[1.8rem] text-black-2 font-raleway font-medium hover:text-green-1 transition-colors">
                    Feedback
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 4 - Contact */}
            <div className="flex-1 md:flex-2">
              <h3 className="text-[1.8rem] md:text-[2rem] text-black-1 font-semibold mb-4 md:mb-8">
                Contact
              </h3>
              <ul className="flex flex-col gap-2 md:gap-4">
                <li>
                  <a href="tel:+880123" className="text-[1.4rem] md:text-[1.8rem] text-black-2 font-raleway font-medium hover:text-green-1 transition-colors">
                    +880123
                  </a>
                </li>
                <li>
                  <a href="mailto:halalstreet@gmail.com" className="text-[1.4rem] md:text-[1.8rem] text-black-2 font-raleway font-medium hover:text-green-1 transition-colors">
                    halalstreet@gmail.com
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[1.4rem] md:text-[1.8rem] text-black-2 font-raleway font-medium hover:text-green-1 transition-colors">
                    New York, United States
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Column 5 - Business Hours */}
            <div className="flex-1 md:flex-2">
              <h3 className="text-[1.8rem] md:text-[2rem] text-black-1 font-semibold mb-4 md:mb-8">
                Business Hours
              </h3>
              <ul className="flex flex-col gap-2 md:gap-4 text-[1.4rem] md:text-[1.8rem] text-black-2 font-raleway">
                <li>Monday - Friday: 10 AM - 7 PM</li>
                <li>Saturday: 10 AM - 5 PM</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Copyright */}
      <div className="py-4">
        <div className="container">
          <p className="text-[1.4rem] md:text-[1.6rem] text-center md:text-left">
            © copyright {new Date().getFullYear()} Halal Street | All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;