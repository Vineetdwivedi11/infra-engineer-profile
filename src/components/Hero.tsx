
import React, { useState, useEffect } from 'react';
import { ChevronDown, Terminal, Code, Server } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    'DevOps Engineer',
    'Cloud Architect', 
    'Automation Expert',
    'Infrastructure Specialist'
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Floating Icons */}
      <div className="absolute top-20 left-20 animate-float">
        <Terminal className="w-8 h-8 text-blue-400 opacity-60" />
      </div>
      <div className="absolute top-40 right-32 animate-float-delayed">
        <Code className="w-6 h-6 text-green-400 opacity-60" />
      </div>
      <div className="absolute bottom-32 left-32 animate-float">
        <Server className="w-7 h-7 text-purple-400 opacity-60" />
      </div>

      <div className="text-center z-10 px-4 max-w-4xl">
        <div className="mb-8">
          <div className="inline-block bg-slate-800 rounded-lg px-4 py-2 mb-6 border border-slate-700">
            <span className="text-green-400 font-mono text-sm">$ whoami</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Alex <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Rodriguez</span>
        </h1>
        
        <div className="h-16 mb-8">
          <span className="text-2xl md:text-3xl text-slate-300 font-mono">
            {displayText}
            <span className="animate-pulse text-blue-400">|</span>
          </span>
        </div>
        
        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about building scalable infrastructure, automating deployments, 
          and creating robust CI/CD pipelines that enable teams to ship faster and more reliably.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            View My Work
          </button>
          <button className="border border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
            Download Resume
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-slate-400" />
      </div>
    </section>
  );
};

export default Hero;
