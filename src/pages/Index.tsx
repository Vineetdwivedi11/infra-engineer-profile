
import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
};

export default Index;
