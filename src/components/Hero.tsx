
import React, { useState, useEffect } from 'react';
import { ChevronDown, Terminal, Code, Server, GitBranch, Cpu } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [matrixChars, setMatrixChars] = useState<string[]>([]);
  
  const titles = [
    'kubectl get pods --all-namespaces',
    'terraform apply -auto-approve', 
    'docker-compose up -d --scale web=3',
    'ansible-playbook deploy.yml -i inventory'
  ];

  const codeSnippets = [
    '#!/bin/bash\necho "Deploying to production..."',
    'apiVersion: apps/v1\nkind: Deployment',
    'FROM node:18-alpine\nWORKDIR /app',
    'pipeline {\n  agent any\n  stages {'
  ];

  // Matrix rain effect
  useEffect(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const interval = setInterval(() => {
      setMatrixChars(prev => {
        const newChars = [...prev];
        if (newChars.length < 50) {
          newChars.push(chars[Math.floor(Math.random() * chars.length)]);
        } else {
          newChars.shift();
          newChars.push(chars[Math.floor(Math.random() * chars.length)]);
        }
        return newChars;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

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
        }, 3000);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
      {/* Matrix rain background */}
      <div className="absolute inset-0 pointer-events-none">
        {matrixChars.map((char, index) => (
          <span
            key={index}
            className="absolute text-green-400 font-mono text-sm opacity-20 animate-pulse"
            style={{
              left: `${(index * 3) % 100}%`,
              top: `${(index * 7) % 100}%`,
              animationDelay: `${index * 0.1}s`
            }}
          >
            {char}
          </span>
        ))}
      </div>

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Tech Icons */}
      <div className="absolute top-20 left-20 animate-float">
        <Terminal className="w-8 h-8 text-green-400 opacity-60" />
      </div>
      <div className="absolute top-40 right-32 animate-float-delayed">
        <GitBranch className="w-6 h-6 text-blue-400 opacity-60" />
      </div>
      <div className="absolute bottom-32 left-32 animate-float">
        <Cpu className="w-7 h-7 text-purple-400 opacity-60" />
      </div>
      <div className="absolute top-60 left-1/4 animate-float-delayed">
        <Server className="w-5 h-5 text-yellow-400 opacity-60" />
      </div>

      <div className="text-center z-10 px-4 max-w-5xl">
        {/* Terminal Header */}
        <div className="mb-8">
          <div className="inline-block bg-black rounded-lg border border-green-400 p-4 mb-6 font-mono text-left max-w-2xl">
            <div className="flex items-center mb-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-green-400 text-sm">alex@devops-machine:~$</span>
            </div>
            <div className="text-green-400 text-sm">
              <span className="text-gray-400"># Initializing DevOps Engineer profile...</span><br/>
              <span className="text-blue-400">whoami</span><br/>
              <span className="text-white">alex.rodriguez</span><br/>
              <span className="text-blue-400">cat /etc/specialization</span><br/>
              <span className="text-white">kubernetes | docker | terraform | aws</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-mono">
          root@<span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">devops</span>:~#
        </h1>
        
        <div className="h-20 mb-8 bg-black rounded-lg border border-green-400 p-4 font-mono text-left">
          <div className="text-green-400 text-sm mb-2">alex@k8s-master:~$ </div>
          <span className="text-green-400 font-mono text-lg">
            {displayText}
            <span className="animate-pulse text-green-400">█</span>
          </span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-black border border-gray-700 rounded-lg p-4 font-mono text-left">
            <div className="text-blue-400 text-sm mb-2"># docker-stats.sh</div>
            <div className="text-green-400 text-xs">
              CONTAINER&nbsp;&nbsp;&nbsp;&nbsp;CPU&nbsp;&nbsp;&nbsp;&nbsp;MEM<br/>
              web-app&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12.5%&nbsp;&nbsp;256MB<br/>
              database&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;8.3%&nbsp;&nbsp;&nbsp;512MB<br/>
              redis&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.1%&nbsp;&nbsp;&nbsp;64MB
            </div>
          </div>
          <div className="bg-black border border-gray-700 rounded-lg p-4 font-mono text-left">
            <div className="text-purple-400 text-sm mb-2"># k8s-cluster-info</div>
            <div className="text-green-400 text-xs">
              Nodes:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3/3&nbsp;Ready<br/>
              Pods:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;47/50&nbsp;Running<br/>
              Services:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12&nbsp;Active<br/>
              Uptime:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;99.9%
            </div>
          </div>
        </div>
        
        <p className="text-xl text-green-400 mb-12 max-w-3xl mx-auto leading-relaxed font-mono">
          <span className="text-gray-400">//</span> Crafting resilient infrastructure with code<br/>
          <span className="text-gray-400">//</span> One pipeline at a time 🚀
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-green-600 hover:bg-green-700 text-black px-8 py-4 rounded-lg font-mono font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 border border-green-400">
            ./view-projects.sh
          </button>
          <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 rounded-lg font-mono font-bold transition-all duration-300">
            curl -O resume.pdf
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-green-400" />
      </div>
    </section>
  );
};

export default Hero;
