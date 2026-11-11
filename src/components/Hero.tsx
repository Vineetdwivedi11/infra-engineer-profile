import React, { useState, useEffect, useMemo } from 'react';
import { ChevronDown, Download, ArrowRight } from 'lucide-react';

const TITLES = [
  'terraform apply -auto-approve',
  'kubectl rollout status deploy/web',
  'docker compose up -d --scale web=3',
  'ansible-playbook deploy.yml -i inventory',
];

const STATS = [
  ['5+', 'Years in DevOps'],
  ['AWS', 'EC2, EKS, RDS, VPC'],
  ['K8s', 'Docker & Kubernetes'],
  ['IaC', 'Terraform & Ansible'],
];

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Matrix rain: generated once, positioned at the edges so it never sits behind text
  const rain = useMemo(() => {
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    return Array.from({ length: 28 }, (_, i) => ({
      ch: chars[Math.floor(Math.random() * chars.length)],
      left: i % 2 === 0 ? 2 + ((i * 7) % 14) : 84 + ((i * 5) % 14),
      top: (i * 13) % 96,
      delay: (i * 0.23).toFixed(2),
    }));
  }, []);

  useEffect(() => {
    const currentTitle = TITLES[currentIndex];
    let charIndex = 0;
    let pause: ReturnType<typeof setTimeout> | undefined;

    const typeInterval = setInterval(() => {
      if (charIndex <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        pause = setTimeout(() => setCurrentIndex((prev) => (prev + 1) % TITLES.length), 2500);
      }
    }, 70);

    return () => {
      clearInterval(typeInterval);
      if (pause) clearTimeout(pause);
    };
  }, [currentIndex]);

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1iTSqx9MxuxmLqAo-KgMoe-etNMYr0nxm';
    link.download = 'Vineet_Dwivedi_DevOps_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="top-section"
      className="min-h-screen pt-20 pb-16 bg-gradient-to-br from-black via-slate-900 to-slate-800 flex items-center justify-center relative overflow-hidden"
    >
      {/* Matrix rain (edges only) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {rain.map((r, i) => (
          <span
            key={i}
            className="absolute text-green-400 font-mono text-sm opacity-20 motion-safe:animate-pulse"
            style={{ left: `${r.left}%`, top: `${r.top}%`, animationDelay: `${r.delay}s` }}
          >
            {r.ch}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 bg-grid-pattern opacity-5" aria-hidden="true"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 text-center">
        <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-green-400/40 bg-green-400/10 text-green-400 font-mono text-xs sm:text-sm">
          <span className="w-2 h-2 rounded-full bg-green-400 motion-safe:animate-pulse"></span>
          Available for freelance projects
        </div>

        <h1 className="font-mono font-bold text-white leading-tight">
          <span className="block text-4xl sm:text-6xl md:text-7xl">Vineet Dwivedi</span>
          <span className="block mt-2 text-2xl sm:text-4xl md:text-5xl bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            Freelance DevOps Engineer
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          5+ years building reliable, automated and cost-efficient cloud infrastructure on AWS and Kubernetes,
          from Terraform and CI/CD pipelines to monitoring.
        </p>

        {/* Single terminal */}
        <div className="mt-8 mx-auto max-w-xl bg-black rounded-lg border border-green-400/60 text-left font-mono overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-800">
            <span className="w-3 h-3 rounded-full bg-red-500"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
            <span className="w-3 h-3 rounded-full bg-green-500"></span>
            <span className="ml-2 text-xs text-slate-400">vineet@devops:~</span>
          </div>
          <div className="px-4 py-4 text-sm sm:text-base text-green-400 min-h-[3.5rem] break-all">
            <span className="text-slate-500">$ </span>
            {displayText}
            <span className="motion-safe:animate-pulse">█</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 font-mono">
          {STATS.map(([v, l]) => (
            <div key={l} className="bg-black/70 border border-gray-700 rounded-lg p-3 sm:p-4">
              <div className="text-xl sm:text-2xl font-bold text-green-400">{v}</div>
              <div className="text-slate-300 text-xs sm:text-sm mt-1">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-black px-7 py-3.5 rounded-lg font-mono font-bold transition-colors"
          >
            Hire me <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center border border-gray-600 hover:border-green-400 text-white px-7 py-3.5 rounded-lg font-mono font-bold transition-colors"
          >
            View projects
          </a>
          <button
            onClick={handleResumeDownload}
            className="inline-flex items-center justify-center gap-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black px-7 py-3.5 rounded-lg font-mono font-bold transition-colors"
          >
            <Download className="w-4 h-4" />
            Resume
          </button>
        </div>
      </div>

      <a href="#skills" aria-label="Scroll to skills" className="absolute bottom-5 left-1/2 -translate-x-1/2 motion-safe:animate-bounce hidden sm:block">
        <ChevronDown className="w-6 h-6 text-green-400" />
      </a>
    </section>
  );
};

export default Hero;
