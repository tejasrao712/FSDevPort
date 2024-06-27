// import React, { useState, useEffect } from 'react';
// import TejasLogo from '../media/jpg/tejas-s-rao-high-resolution-logo-white-transparent.png'

// const Navbar: React.FC = () => {
//   const [isVisible, setVisible] = useState(true);
//   const [lastScrollY, setScrollY] = useState(0);

//   const handleScroll = () => {
//     if (typeof window !== 'undefined') {
//       const currentScrollY = window.scrollY;
//       if (window.scrollY > lastScrollY) {
//         setVisible(false);
//       } else {
//         setVisible(true);
//       }
//       setScrollY(currentScrollY);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [lastScrollY,handleScroll]);

//   return (
//     <nav className={`bg-gray-900 sticky z-20 mx-auto top-0 transition-transform duration-300 shadow-lg ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
//       <div className="container mx-auto px-4 py-6">
//         <div className="flex justify-between items-center">
//           <img src={TejasLogo} className=' w-60  h-auto' alt="TEJAS S RAO" />
//           {/* <div className="text-white text-3xl font-extra-bold font-serif">Tejas S Rao</div> */}
//           <ul className="flex space-x-6">
//             <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
//             <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
//             <li><a href="#projects" className="text-white hover:text-gray-300">Projects</a></li>
//             <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
//             <li><a href="#pricing" className="text-white hover:text-gray-300">Pricing</a></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect, useCallback } from 'react';
// import TejasLogo from '../media/jpg/tejas-s-rao-high-resolution-logo-white-transparent.png';

// const Navbar: React.FC = () => {
//   const [isVisible, setVisible] = useState(true);
//   const [lastScrollY, setScrollY] = useState(0);

//   const handleScroll = useCallback(() => {
//     const currentScrollY = window.scrollY;
//     if (currentScrollY > lastScrollY) {
//       setVisible(false);
//     } else {
//       setVisible(true);
//     }
//     setScrollY(currentScrollY);
//   }, [lastScrollY]);

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [handleScroll]);

//   return (
//     <nav className={`bg-gray-900 sticky z-20 mx-auto top-0 transition-transform duration-300 shadow-lg ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
//       <div className="container mx-auto px-4 py-6">
//         <div className="flex justify-between items-center">
//           <img src={TejasLogo} className="w-60 h-auto" alt="TEJAS S RAO" />
//           <ul className="flex space-x-6">
//             <li><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
//             <li><a href="#about" className="text-white hover:text-gray-300">About</a></li>
//             <li><a href="#projects" className="text-white hover:text-gray-300">Projects</a></li>
//             <li><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
//             <li><a href="#pricing" className="text-white hover:text-gray-300">Pricing</a></li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useCallback } from 'react';
import TejasLogo from '../media/jpg/tejas-s-rao-high-resolution-logo-white-transparent.png';

const Navbar: React.FC = () => {
  const [isVisible, setVisible] = useState(true);
  const [lastScrollY, setScrollY] = useState(0);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setScrollY(currentScrollY);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav className={`bg-gray-900 sticky z-20 mx-auto top-0 transition-transform duration-300 shadow-lg ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-6 flex items-center">
        <img src={TejasLogo} className="w-60 h-auto" alt="TEJAS S RAO" />
        
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <ul className={`lg:flex lg:space-x-6 ${isMenuOpen ? 'block' : 'hidden'} absolute lg:static top-16 right-0 w-full bg-gray-900 lg:bg-transparent lg:items-end lg:text-right`}>
          <li className="py-2 lg:py-0 text-right"><a href="#home" className="block text-white hover:text-gray-300 px-4">Home</a></li>
          <li className="py-2 lg:py-0 text-right"><a href="#about" className="block text-white hover:text-gray-300 px-4">About</a></li>
          <li className="py-2 lg:py-0 text-right"><a href="#projects" className="block text-white hover:text-gray-300 px-4">Projects</a></li>
          <li className="py-2 lg:py-0 text-right"><a href="#contact" className="block text-white hover:text-gray-300 px-4">Contact</a></li>
          <li className="py-2 lg:py-0 text-right"><a href="#pricing" className="block text-white hover:text-gray-300 px-4">Pricing</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
