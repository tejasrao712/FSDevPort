// import React, { useState, useEffect, useCallback } from 'react';
// import TejasLogo from '../media/jpg/tejas-s-rao-high-resolution-logo-white-transparent.png'

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
//     <nav className={`bg-zinc-900 sticky z-20 mx-auto top-0 transition-transform duration-300 shadow-lg ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
//       <div className="container mx-auto px-4 py-6">
//         <div className="flex justify-between items-center">
//           <img src={TejasLogo} className=' w-60  h-auto' alt="TEJAS S RAO" />
//           {/* <div className="text-white text-3xl font-extra-bold font-serif">Tejas S Rao</div> */}
//           <ul className="flex space-x-6">
//             <li><a href="#home" className="text-white hover:text-zinc-300">Home</a></li>
//             <li><a href="#about" className="text-white hover:text-zinc-300">About</a></li>
//             <li><a href="#projects" className="text-white hover:text-zinc-300">Projects</a></li>
//             <li><a href="#contact" className="text-white hover:text-zinc-300">Contact</a></li>
//             <li><a href="#pricing" className="text-white hover:text-zinc-300">Pricing</a></li>
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
//     <nav className={`bg-zinc-900 sticky z-20 mx-auto top-0 transition-transform duration-300 shadow-lg ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
//       <div className="container mx-auto px-4 py-6">
//         <div className="flex justify-between items-center">
//           <img src={TejasLogo} className="w-60 h-auto" alt="TEJAS S RAO" />
//           <ul className="flex space-x-6">
//             <li><a href="#home" className="text-white hover:text-zinc-300">Home</a></li>
//             <li><a href="#about" className="text-white hover:text-zinc-300">About</a></li>
//             <li><a href="#projects" className="text-white hover:text-zinc-300">Projects</a></li>
//             <li><a href="#contact" className="text-white hover:text-zinc-300">Contact</a></li>
//             <li><a href="#pricing" className="text-white hover:text-zinc-300">Pricing</a></li>
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
  const [isMenuOpen, setMenuOpen] = useState(false); // State to manage menu open/close on small screens

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`bg-zinc-900 sticky z-20 mx-auto top-0 transition-transform duration-300 px-8 shadow-lg ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <img src={TejasLogo} className="w-60 h-auto" alt="TEJAS S RAO" />
        {/* For small screens: Show burger icon */}
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {/* For larger screens: Show navigation links */}
        <ul className={`md:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} md:space-x-6 md:flex`}>
          <li><a href="#home" className="text-white hover:text-zinc-300">Home</a></li>
          <li><a href="#about" className="text-white hover:text-zinc-300">About</a></li>
          <li><a href="#projects" className="text-white hover:text-zinc-300">Projects</a></li>
          <li><a href="#contact" className="text-white hover:text-zinc-300">Contact</a></li>
          <li><a href="#pricing" className="text-white hover:text-zinc-300">Pricing</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

