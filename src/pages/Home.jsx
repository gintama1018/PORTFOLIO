import React from 'react';
import ScrollSequence from '../components/ScrollSequence';
import About from '../components/About';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="page-home">
      <ScrollSequence />
      <About />
      <div className="section-divider"></div>
      <Projects />
      <Footer />
    </div>
  );
}
