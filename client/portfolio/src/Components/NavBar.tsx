import React, { useState, useEffect } from 'react';
import TejasLogo from '../media/jpg/tejas-s-rao-high-resolution-logo-white-transparent.png'

const Navbar: React.FC = () => {
  const [isVisible, setVisible] = useState(true);
  const [lastScrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY,handleScroll]);

  return (
    <nav className={`bg-gray-900 sticky z-20 mx-auto top-0 transition-transform duration-300 shadow-lg ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <img src={TejasLogo} className=' w-60  h-auto' alt="TEJAS S RAO" />
          {/* <div className="text-white text-3xl font-extra-bold font-serif">Tejas S Rao</div> */}
          <ul className="flex space-x-6">
            <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
            <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
            <li><a href="#projects" className="text-white hover:text-gray-300">Projects</a></li>
            <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
            <li><a href="#pricing" className="text-white hover:text-gray-300">Pricing</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


