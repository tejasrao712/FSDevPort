import React, { useState, useEffect } from 'react';
import { displayPartsToString } from 'typescript';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const About: React.FC = () => {

  const [text, setText] = useState<string>('');
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);
  const [currentCharIndex, setCurrentCharIndex] = useState<number>(0);
  const [isTyping, setIsTyping] = useState<boolean>(true);
  const [showCursor, setShowCursor] = useState<boolean>(true);

  const sentences = [
    " am a passionate software developer, skilled in full-stack and machine learning solutions",
    " specialize in crafting seamless user experiences and elegant UI/UX designs with a deep love for technology, ",
    " excel at both whether it's developing robust back-end systems or designing intuitive front-end interfaces",
    " thrive on turning ideas into impactful digital products",
    " craft digital solutions with code mastery and creativity",
    " build seamless experiences with front-end expertise",
    " architect robust systems for optimal performance and scalability",
    " design intuitive interfaces for user delight and engagement",
    " implement innovative features with cutting-edge technology",
    " optimize workflows for efficiency and productivity gains",
    " solve complex problems with analytical thinking and problem-solving skills",
    " collaborate across teams to deliver impactful projects on time",
    " continuously learn to stay ahead in a fast-paced tech landscape",
    " am passionate about building the future of digital experiences"
  ];

  useEffect(() => {
    const typingSpeed = 70;
    const erasingSpeed = 25;
    const delaybwtexts = 1000;

    const handleTyping = () => {
      if (currentCharIndex < sentences[currentSentenceIndex].length) {
        setText((prevText) => prevText + sentences[currentSentenceIndex][currentCharIndex]);
        setCurrentCharIndex((prevIndex) => prevIndex + 1);
      }
      else {
        setTimeout(() => {
          setIsTyping(false);
        }, delaybwtexts);
      }
    };

    const handleErasing = () => {
      if (currentCharIndex > 0) {
        setText((prevText) => prevText.slice(0, -1));
        setCurrentCharIndex((prevIndex) => prevIndex - 1);
      }
      else {
        setIsTyping(true);
        setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
      }
    };

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev); // Toggle cursor visibility
    }, 100); // Adjust blinking speed here


    const interval = setInterval(() => {
      if (isTyping) {
        handleTyping();
      }
      else {
        handleErasing();
      }
    }, isTyping ? typingSpeed : erasingSpeed);
    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };

  }, [currentCharIndex, isTyping, sentences, currentSentenceIndex]);


  


  return (
    <section id="about" className="bg-white min-h-screen p-8 ">

      <div className="container mx-auto flex flex-col items-center">

        <h2 className="text-2xl text-gray-700 my-10">Hi! I am Tejas S Rao,</h2>
        <p className="text-5xl">
          I {text} <span>{showCursor && '|'}</span>
        </p>
        <button className="group relative flex items-center px-6 py-3 bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 overflow-hidden my-7">
          Get in Touch
          <svg
            className="ml-2 w-4 h-4 transform translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7Z"></path>
          </svg>
        </button>

      </div>

    </section>
  );
};

export default About;
