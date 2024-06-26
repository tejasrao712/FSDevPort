import React from 'react';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Pricing from './Pricing';
import Navbar from './NavBar';
import Footer from './Footer';
import Hero from './Hero';

const Home: React.FC = () => {
  return (
    <div className='bg-gray-900'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Pricing />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;
