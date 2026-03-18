import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import Scene from './Scene';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-container grid-layout">
        
        {/* Text Content */}
        <div className="hero-content">
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Crafting Digital <br /> Excellence
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Minimalist, elegant, and perfectly engineered visual experiences.
            Elevating brands through flawless design and modern technologies.
          </motion.p>
          
          <motion.div 
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href="#projects" className="btn btn-primary clay-shadow">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </motion.div>
        </div>

        {/* 3D Canvas */}
        <div className="hero-canvas-container">
          <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>

      </div>
    </section>
  );
}
