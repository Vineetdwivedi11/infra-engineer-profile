import React from 'react';

const links = [
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
];

const Navbar = () => (
  <nav aria-label="Main" className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between font-mono text-sm">
      <a href="#top" className="text-green-400 font-bold">vineet@devops:~$</a>
      <div className="flex items-center gap-5">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="hidden md:inline text-slate-300 hover:text-green-400 transition-colors">
            {l.label}
          </a>
        ))}
        <a href="#contact" className="bg-green-600 hover:bg-green-500 text-black px-3 py-1.5 rounded font-bold transition-colors">
          Hire me
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
