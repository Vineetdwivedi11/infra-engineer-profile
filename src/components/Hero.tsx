import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown, Terminal, Code, Server, GitBranch, Cpu, Download } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
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

  // Matrix rain: generated once, animated with CSS only (no re-render timer)
  const matrixChars = useMemo(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    return Array.from({ length: 50 }, () => chars[Math.floor(Math.random() * chars.length)]);
  }, []);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let charIndex = 0;
    let pause: ReturnType<typeof setTimeout> | undefined;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        pause = setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }, 3000);
      }
    }, 80);

    return () => {
      clearInterval(typeInterval);
      if (pause) clearTimeout(pause);
    };
  }, [currentIndex]);

  const handleResumeDownload = () => {
    // This will work once you upload your resume file to the public folder
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1iTSqx9MxuxmLqAo-KgMoe-etNMYr0nxm';
    link.download = 'Vineet_Dwivedi_DevOps_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen pt-14 bg-gradient-to-br from-black via-slate-900 to-slate-800 flex items-center justify-center relative overflow-hidden">
      {/* Matrix rain background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
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
              <span className="ml-4 text-green-400 text-sm">vineet@devops-machine:~$</span>
            </div>
            <div className="text-green-400 text-sm">
              <span className="text-gray-400"># Initializing DevOps Engineer profile...</span><br/>
              <span className="text-blue-400">whoami</span><br/>
              <span className="text-white">vineet.dwivedi</span><br/>
              <span className="text-blue-400">cat /etc/specialization</span><br/>
              <span className="text-white">kubernetes | docker | terraform | aws | ci/cd</span>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-mono">
          <span className="sr-only">Vineet Dwivedi, Freelance DevOps Engineer</span>
          <span aria-hidden="true">root@<span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">devops</span>:~#</span>
        </h1>
        
        <div className="h-20 mb-8 bg-black rounded-lg border border-green-400 p-4 font-mono text-left">
          <div className="text-green-400 text-sm mb-2">vineet@k8s-master:~$ </div>
          <span className="text-green-400 font-mono text-lg">
            {displayText}
            <span className="animate-pulse text-green-400">█</span>
          </span>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 font-mono">
          {[
            ['5+', 'Years in DevOps'],
            ['AWS', 'EC2, EKS, RDS, VPC'],
            ['K8s', 'Docker & Kubernetes'],
            ['IaC', 'Terraform & Ansible'],
          ].map(([v, l]) => (
            <div key={l} className="bg-black border border-gray-700 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-400">{v}</div>
              <div className="text-slate-300 text-xs mt-1">{l}</div>
            </div>
          ))}
        </div>

        <p className="text-lg md:text-xl text-green-400 mb-12 max-w-3xl mx-auto leading-relaxed font-mono">
          <span className="text-gray-400">//</span> Freelance DevOps Engineer with 5+ years of experience<br/>
          <span className="text-gray-400">//</span> I build reliable, automated, cost-efficient cloud infrastructure
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="bg-green-600 hover:bg-green-700 text-black px-8 py-4 rounded-lg font-mono font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 border border-green-400 text-center">
            ./view-projects.sh
          </a>
          <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-mono font-bold transition-all duration-300 border border-gray-600 text-center">
            ./hire-me.sh
          </a>
          <button 
            onClick={handleResumeDownload}
            className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-8 py-4 rounded-lg font-mono font-bold transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <Download className="w-4 h-4" />
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