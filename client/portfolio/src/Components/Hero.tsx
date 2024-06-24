import React from 'react';
import TejasRao from '../media/png/TejasRao7.png';

const Hero: React.FC = () => {
    return (
        <div>
          <section id="about" className="bg-gray-900 text-white min-h-screen p-8 font-outfit">
            <div className="container mx-auto flex flex-col space-y-10">
              <h2 className="text-left text-4xl font-bold">Hi! I am Tejas S Rao,</h2>
    
              {/* <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              I {text}
            </p> */}
    
              {/* Hero */}
    
              <div className='flex flex-row items-center'>
    
                <div className='flex flex-row items-center justify-between p-8'>
                  <div className='w-full md:w-1/2 pr-8'>
                    <p className="text-left text-2xl sm:text-3xl md:text-4xl mb-4">
                      kslg JKhafhkad jkshgls eajajak lisjglkslglsg sfknd
                    </p>
                    <p className="text-left mb-6">
                      Lorem Ipsum dflknsdf lksglksn nalsengkls
                      neafkl nselkn ndjhaoal pgmb lf kdfldk
                      fjslfslmg lsejgokokgm f dkdl fkjrlgmbosksglmgm
                      oskgorjrmmsd mgojwoggrk.
                    </p>
                    <button className="group relative flex items-center px-6 py-3 bg-blue-500 text-white font-bold rounded-lg transition-all duration-300 overflow-hidden hover:shadow-lg hover:transform hover:scale-110">
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
                  <div className='w-full md:w-1/2 flex justify-center'>
                    <img src={TejasRao} alt="Tejas Profile" className="w-1/2 h-auto rounded-lg shadow-lg" />
                  </div>
                </div>
              </div>
              </div>
          </section>
        </div>
      );
    };
export default Hero;
