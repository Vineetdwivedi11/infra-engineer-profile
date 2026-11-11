import React from 'react';

const Footer = () => (
  <footer className="bg-black border-t border-gray-800 py-8 px-4 text-center font-mono text-sm text-slate-400">
    <p>
      <span className="text-green-400">$</span> © {new Date().getFullYear()} Vineet Dwivedi · Freelance DevOps Engineer ·{' '}
      <a href="mailto:dvineet9@gmail.com" className="text-green-400 hover:underline">dvineet9@gmail.com</a>
    </p>
  </footer>
);

export default Footer;
