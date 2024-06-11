import React from 'react';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Pricing from './Pricing';
import Navbar from './NavBar';
import Footer from './Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <About />
      <Projects />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
