import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <p className="mt-2">A passionate full-stack developer with a knack for creating elegant solutions in the least amount of time.</p>
      </div>
    </footer>
  );
};

export default Footer;
