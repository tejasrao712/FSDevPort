// import React, { useState, useEffect } from 'react';
// import Contact from './Contact';

// const Footer: React.FC = () => {

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fade, setFade] = useState(false);
  
//   const nextStatement = () => {
//     setFade(false);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % Designations.length);
//       setFade(true);
//     }, 100);
//   }

//   useEffect(() => {

//     const interval = setInterval(() => {
//       nextStatement();
//     }, 2000);

//     return () => clearInterval(interval);
//   },[nextStatement]);



//   const Designations = [
//     "Bachelor of Engineering",
//     "Full Stack Developer",
//     "Product Designer",
//     "ML Researcher",
//     "Data Scientist",
//     "Sports Enthusiast"
//   ]
//   return (
//     <footer className="bg-gray-800 text-white py-8">
//       <div className="container mx-auto flex justify-between">
//         <div>
//           <h3 className="text-xl font-bold">Tejas S Rao</h3>
//           <p className={`text-left transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'} `}>
//             {Designations[currentIndex]}
//           </p>
//           <p>Email: tejasrao712@gmail.com</p>
//           <p>Bengaluru, India</p>
//         </div>
//         <div>
//           <Contact />
//         </div>
//       </div>
//       <div className="text-center mt-4">
//         <p>&copy; {new Date().getFullYear()} Tejas S Rao. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useState, useEffect, useCallback } from 'react';
import Contact from './Contact';

const Designations = [
  "Bachelor of Engineering",
  "Full Stack Developer",
  "Product Designer",
  "ML Researcher",
  "Data Scientist",
  "Sports Enthusiast"
];

const Footer: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const nextStatement = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Designations.length);
      setFade(true);
    }, 100);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextStatement();
    }, 2000);

    return () => clearInterval(interval);
  }, [nextStatement]);

  return (
    <footer className="bg-zinc-800 text-white">
      <div className="container flex justify-between">
        <div className='p-8'>
          <h3 className="text-xl font-bold">Tejas S Rao</h3>
          <p className={`text-left transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            {Designations[currentIndex]}
          </p>
          <p>Email: tejasrao712@gmail.com</p>
          <p>Bengaluru, India</p>
        </div>
        <div className='sm:left-0 mr-8 mt-8'>
          <Contact />
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Tejas S Rao. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
