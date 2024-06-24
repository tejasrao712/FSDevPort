import React from 'react';
import Contact from './Contact';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between">
        <div>
          <h3 className="text-xl font-bold">Tejas S Rao</h3>
          <p>Full-Stack Developer</p>
          <p>Email: tejas@example.com</p>
        </div>
        <div>
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
