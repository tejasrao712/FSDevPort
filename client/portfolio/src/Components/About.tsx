// import React, { useState, useEffect } from 'react';
// import { displayPartsToString } from 'typescript';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


// const About: React.FC = () => {

//   const [text, setText] = useState<string>('');
//   const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);
//   const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
//   const [isTyping, setIsTyping] = useState<boolean>(true);
//   const [showCursor, setShowCursor] = useState<boolean>(true);

//   const sentences = [
//     " am a software developer",
//     " specialize in crafting seamless user experiences and elegant UI/UX designs ",
//     " can develop robust back-end systems and design intuitive UIs ",
//     " thrive on turning ideas into impactful digital products ",
//     " craft digital solutions with code mastery and creativity ",
//     " build seamless experiences with front-end expertise ",
//     " architect robust systems for optimal performance and scalability ",
//     " design intuitive interfaces for user delight and engagement ",
//     " implement innovative features with cutting-edge technology ",
//     " optimize workflows for efficiency and productivity gains ",
//     " solve complex problems with analytical thinking and problem-solving skills ",
//     " collaborate across teams to deliver impactful projects on time ",
//     " continuously learn to stay ahead in a fast-paced tech landscape ",
//     " am passionate about building the future of digital experiences "
//   ];

//   useEffect(() => {
//     const typingSpeed = 70;
//     const erasingSpeed = 25;
//     const delaybwtexts = 1000;

//     const handleTyping = () => {
//       if (currentCharIndex < sentences[currentSentenceIndex].length) {
//         setText((prevText) => prevText + sentences[currentSentenceIndex][currentCharIndex]);
//         setCurrentCharIndex((prevIndex) => prevIndex + 1);
//       }
//       else {
//         setTimeout(() => {
//           setIsTyping(false);
//         }, delaybwtexts);
//       }
//     };

//     const handleErasing = () => {
//       if (currentCharIndex > 0) {
//         setText((prevText) => prevText.slice(0, -1));
//         setCurrentCharIndex((prevIndex) => prevIndex - 1);
//       }
//       else {
//         setIsTyping(true);
//         setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
//       }
//     };

//     const cursorInterval = setInterval(() => {
//       setShowCursor((prev) => !prev); // Toggle cursor visibility
//     }, 100); // Adjust blinking speed here


//     const interval = setInterval(() => {
//       if (isTyping) {
//         handleTyping();
//       }
//       else {
//         handleErasing();
//       }
//     }, isTyping ? typingSpeed : erasingSpeed);
//     return () => {
//       clearInterval(interval);
//       clearInterval(cursorInterval);
//     };

//   }, [currentCharIndex, isTyping, sentences, currentSentenceIndex]);





//   return (
//     <section id="about" className="bg-white min-h-screen p-8 ">

//       <div className="container mx-auto flex flex-col items-center">

//         <h2 className="text-2xl text-gray-700 my-10">Hi! I am Tejas S Rao,</h2>

//         <p className="text-5xl text-center">
//           I {text} <span>{showCursor && '|'}</span>
//         </p>

//         <img src="../media/images/TejasRao.png" alt="Tejas Profile" className='w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'/>

//         <button className="group relative flex items-center px-6 py-3 bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 overflow-hidden my-7">
//           Get in Touch
//           <svg
//             className="ml-2 w-4 h-4 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7Z"></path>
//           </svg>
//         </button>

//       </div>

//     </section>
//   );
// };

// export default About;


import React, { useState } from 'react';

const About: React.FC = () => {
  const sentences = [
    "Hello, I'm Tejas, a software developer passionate about creating impactful digital experiences. With expertise spanning both front-end and back-end development, I specialize in crafting intuitive user interfaces and robust backend systems. I thrive on transforming innovative concepts into seamless digital solutions, utilizing my mastery of code and creative problem-solving skills to exceed expectations.",
    "My journey involves architecting scalable systems that streamline workflows and boost productivity. I'm dedicated to designing interfaces that not only meet but delight user expectations. From implementing cutting-edge features to pushing technological boundaries, I am committed to shaping the future of digital experiences.",
    "As a seasoned full-stack developer, I focus heavily on building ML learning models for research purposes. My experience extends to designing intuitive UI/UX interfaces, refined through mentoring over a thousand interns at Certiefy and Takeiteasy Engineers. My technical toolkit includes JavaScript, Node.js, React.js, MongoDB, and various other technologies, enabling me to translate novel ideas into practical solutions.",
    "Driven by a passion for innovation, I continuously evolve in a dynamic tech landscape. I thrive on tackling complex challenges and collaborating across teams to deliver impactful projects on schedule. My goal is not just to adapt but to lead in leveraging technology for transformative digital experiences."
  ];

  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);

  const handleScrollLeft = () => {
    if (currentSentenceIndex > 0) {
      setCurrentSentenceIndex(currentSentenceIndex - 1);
    }
  };

  const handleScrollRight = () => {
    if (currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex(currentSentenceIndex + 1);
    }
  };

  return (
    <div>
      <section id="about" className="bg-gray-900 text-black min-h-screen p-8 font-outfit">
        <div className="flex justify-center items-center h-full">
          <button
            className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10 ${currentSentenceIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleScrollLeft}
            disabled={currentSentenceIndex === 0}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="w-full max-w-4xl mx-auto">
            {sentences.map((sentence, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg p-6 mb-8 ${index === currentSentenceIndex ? 'opacity-100' : 'opacity-0 hidden'}`}
                style={{ transition: 'opacity 0.5s ease' }}
              >
                <p className="text-lg">{sentence}</p>
              </div>
            ))}
          </div>
          <button
            className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg z-10 ${currentSentenceIndex === sentences.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={handleScrollRight}
            disabled={currentSentenceIndex === sentences.length - 1}
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;



