import React from 'react';
import { motion } from 'framer-motion';
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiLinkedin } from 'react-icons/fi';

const SocialLinks = ({ 
  className = '', 
  iconSize = 20, 
  showTitle = true,
  titleSize = 'default',
  iconColor = 'default',
  background = true,
  vertical = false,
  platforms = ['facebook', 'instagram', 'twitter']
}) => {
  // Social media platforms configuration
  const socialPlatforms = {
    facebook: {
      icon: <FiFacebook size={iconSize} />,
      url: 'https://facebook.com/halalstreet',
      label: 'Facebook'
    },
    instagram: {
      icon: <FiInstagram size={iconSize} />,
      url: 'https://instagram.com/halalstreet',
      label: 'Instagram'
    },
    twitter: {
      icon: <FiTwitter size={iconSize} />,
      url: 'https://twitter.com/halalstreet',
      label: 'Twitter'
    },
    youtube: {
      icon: <FiYoutube size={iconSize} />,
      url: 'https://youtube.com/halalstreet',
      label: 'YouTube'
    },
    linkedin: {
      icon: <FiLinkedin size={iconSize} />,
      url: 'https://linkedin.com/company/halalstreet',
      label: 'LinkedIn'
    }
  };

  // Filter platforms to only include those specified
  const availablePlatforms = platforms.filter(platform => 
    socialPlatforms[platform.toLowerCase()]
  );

  // Title classes based on the size prop
  const titleClasses = {
    small: 'text-[1.4rem] mb-2',
    default: 'text-[1.8rem] mb-4',
    large: 'text-[2.4rem] mb-6'
  };

  // Icon color classes
  const iconColorClasses = {
    default: 'text-black-2 hover:text-white-1',
    light: 'text-gray-400 hover:text-white-1',
    accent: 'text-green-1 hover:text-green-2',
    white: 'text-white-1 hover:text-lightGreen-1'
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className={`socials ${className}`}>
      {showTitle && (
        <h4 className={`font-medium text-black-1 ${titleClasses[titleSize] || titleClasses.default}`}>
          Follow us
        </h4>
      )}
      
      <motion.ul 
        className={`flex ${vertical ? 'flex-col gap-3' : 'gap-2'}`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {availablePlatforms.map((platform) => {
          const socialPlatform = socialPlatforms[platform.toLowerCase()];
          
          return (
            <motion.li key={platform} variants={itemVariants}>
              <a 
                href={socialPlatform.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`
                  inline-flex items-center justify-center
                  ${background 
                    ? 'p-2 bg-white-1 border border-green-2 rounded-lg transition-colors hover:bg-green-1' 
                    : 'p-1 hover:transform hover:scale-110 transition-transform'
                  }
                `}
                aria-label={`Follow us on ${socialPlatform.label}`}
              >
                <span className={iconColorClasses[iconColor] || iconColorClasses.default}>
                  {socialPlatform.icon}
                </span>
              </a>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
};

export default SocialLinks;