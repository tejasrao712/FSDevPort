// import React, { useState, useEffect, useCallback } from 'react';
// import TejasRao from '../media/png/TejasRao7.png';

// const Hero: React.FC = () => {
//   const subHeroStatements = [
//     "I specialize in developing innovative and efficient software solutions for a variety of needs.",
//     "I can develop robust back-end systems and design intuitive UIs ",
//     "I thrive on turning ideas into impactful digital products ",
//     "I design intuitive interfaces for user delight and engagement ",
//     //     " implement innovative features with cutting-edge technology ",
//     //     " optimize workflows for efficiency and productivity gains ",
//     //     " solve complex problems with analytical thinking and problem-solving skills ",
//     "I collaborate across teams to deliver impactful projects on time ",
//     //     " continuously learn to stay ahead in a fast-paced tech landscape ",
//     " I am passionate about building the future of digital experiences "
//   ];
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [fade, setFade] = useState(true);

//   const nextStatement = useCallback(() => {
//     setFade(false);
//     setTimeout(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % subHeroStatements.length);
//       setFade(true);
//     }, 100);
//   },[subHeroStatements.length]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       nextStatement();
//     }, 2000); // Change statement every 2 seconds

//     return () => clearInterval(interval);
//   }, [nextStatement]);



//   // const prevStatement = () => {
//   //   setFade(false);
//   //   setTimeout(() => {
//   //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? subHeroStatements.length - 1 : prevIndex - 1));
//   //     setFade(true);
//   //   }, 500);
//   // };
//   return (
//     <div id='home'>

//       <section className="bg-zinc-800 flex flex-col text-white min-h-screen w-full px-8 ">
//       {/* <Navbar /> */}
//       <div className='flex mt-28 items-center justify-center'>
//           <div className='flex flex-row mx-auto items-center justify-between p-8 container space-y-10'>

//             <div className='w-full md:w-1/2 pr-8'>

//               <p className='mb-8'>Software Engineer, Designer, Researcher</p>

//               <p className="text-left text-6xl sm:text-3xl md:text-4xl mb-8">
//                 EMPOWERING BUSINESSES WITH EFFICIENT SOFTWARE SOLUTIONS BY INNOVATION IN EVERY LINE OF CODE
//               </p>

//               <p className={`text-left transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'} mb-8`}>
//                 {subHeroStatements[currentIndex]}
//               </p>

//               <div className='flex'>

//                 <button className="group relative flex items-center mr-12 px-6 py-3 bg-blue-800 text-white font-bold rounded-lg transition-all duration-300 overflow-hidden hover:shadow-lg hover:transform hover:scale-110">
//                   Get in Touch
//                   <svg
//                     className="ml-2 w-4 h-4 transform translate-x-2 opacity-50 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
//                     fill="currentColor"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7Z"></path>
//                   </svg>
//                 </button>

//                 <button className="group relative flex items-center px-6 py-3 bg-white text-black  font-bold rounded-lg transition-all duration-300 overflow-hidden hover:shadow-lg hover:transform hover:scale-110">
//                   Know More
//                   <svg
//                     className="ml-2 w-4 h-4 transform translate-x-2 opacity-50 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
//                     fill="currentColor"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7Z"></path>
//                   </svg>
//                 </button>

//               </div>

//             </div>

//             <div className='md:w-1/2 flex justify-end'>
//               <img src={TejasRao} alt="Tejas Profile" className="w-1/2 h-auto rounded-lg shadow-lg" />
//             </div>

//           </div>
//           </div>
//       </section>
//     </div>
//   );
// };
// export default Hero;

import React, { useState, useEffect, useCallback } from 'react';
import TejasRao from '../media/png/TejasRao7.png';

const Hero: React.FC = () => {
  const subHeroStatements = [
    "I specialize in developing innovative and efficient software solutions for a variety of needs.",
    "I develop robust back-end systems and design intuitive UIs.",
    "I thrive on turning ideas into impactful digital products.",
    "I design intuitive interfaces for user delight and engagement.",
    "I collaborate across teams to deliver impactful projects on time.",
    "Passion in building the future of digital experiences."
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const nextStatement = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % subHeroStatements.length);
      setFade(true);
    }, 100);
  }, [subHeroStatements.length]);

  useEffect(() => {
    const interval = setInterval(nextStatement, 2000);
    return () => clearInterval(interval);
  }, [nextStatement]);

    return (
      <div id="home">
        <section className="bg-zinc-800 flex flex-col text-white min-h-screen w-full px-4 md:px-8">
          <div className="flex mt-28 items-center justify-center">
            <div className="flex flex-col md:flex-row mx-auto items-center justify-between p-4 md:p-8 container space-y-4 md:space-y-10">
              <div className="w-full md:w-1/2 pr-0 md:pr-8">
                <p className="mb-4 md:mb-8 text-center lg:text-left">Software Engineer, Designer, Researcher</p>
                <p className="text-center md:text-left text-4xl sm:text-3xl md:text-4xl mb-2">
                  SEAMLESS SOFTWARE SOLUTIONS AND DIGITAL DEVELOPMENT,<br /> MADE EASY
                </p>
                <p className='text-xl md:text-2xl mb-4 md:mb-8'>
                  PROVIDING CONSISTENT AND DEPENDABLE SOFTWARE DEVELOPMENT SERVICES.
                </p>
                <p className={`text-center md:text-left transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'} mb-4 md:mb-8`}>
                  {subHeroStatements[currentIndex]}
                </p>
                <div className="flex flex-col md:flex-row justify-center md:justify-start">
                  <button className="group relative flex items-center mb-4 md:mb-0 mr-0 md:mr-4 px-6 py-3 bg-blue-800 text-white font-bold rounded-lg transition-all duration-300 overflow-hidden hover:shadow-lg hover:transform hover:scale-110">
                    Get in Touch
                    <svg
                      className="ml-2 w-4 h-4 transform translate-x-2 opacity-50 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7Z"></path>
                    </svg>
                  </button>
                  <button className="group relative flex items-center px-6 py-3 bg-white text-black font-bold rounded-lg transition-all duration-300 overflow-hidden hover:shadow-lg hover:transform hover:scale-110">
                    Know More
                    <svg
                      className="ml-2 w-4 h-4 transform translate-x-2 opacity-50 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <img src={TejasRao} alt="Tejas Profile" className="w-3/4 md:w-1/2 h-auto rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Hero;
