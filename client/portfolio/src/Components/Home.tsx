import React from 'react';
import About from './About';
import Projects from './Projects';
import Pricing from './Pricing';
import Navbar from './NavBar';
import Footer from './Footer';
import Hero from './Hero';

const Home: React.FC = () => {
  return (
    <div>
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
