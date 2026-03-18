import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about-bento-section fade-up">
      <div className="container">
        <div className="bento-grid">

          {/* Main Story Box */}
          <motion.div
            className="bento-box box-story glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="bento-tag">PHILOSOPHY</div>
            <h2 className="about-heading-dramatic">
              Engineer by day.<br/><span className="highlight-text">Storyteller by design.</span>
            </h2>
            <div className="about-desc-punchy">
              <p>I don't just build systems.</p>
              <p>I build experiences people remember.</p>
              <p className="alter-ego-quote">
                "जहाँ logic खत्म होता है, मैं शुरू होता हूँ."
              </p>
            </div>
            <a href="#work" className="read-story-cta">
              Read My Story →
            </a>
          </motion.div>

          {/* Terminal Identity Box */}
          <motion.div
            className="bento-box box-identity terminal-box glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="terminal-header">
              <span className="mac-dot red"></span>
              <span className="mac-dot yellow"></span>
              <span className="mac-dot green"></span>
            </div>
            <div className="terminal-body">
              <span className="terminal-line line-1">&gt; initializing identity...</span>
              <span className="terminal-line line-2 glitch-text" data-text="> chaos mode: enabled">&gt; chaos mode: enabled</span>
              <span className="terminal-line line-3">&gt; role: problem solver<span className="terminal-cursor"></span></span>
            </div>
          </motion.div>

          {/* Arsenal Terminal Box */}
          <motion.div
            className="bento-box box-skills terminal-box glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="terminal-header">
              <span className="mac-dot red"></span>
              <span className="mac-dot yellow"></span>
              <span className="mac-dot green"></span>
            </div>
            <div className="terminal-body">
              <span className="terminal-line" style={{color:'rgba(255,255,255,0.5)',opacity:0,animation:'revealLine 0.1s 0.6s forwards'}}>&gt; load stack --profile=arsenal</span>
              <span className="terminal-line" style={{color:'#E0E4E8',opacity:0,animation:'revealLine 0.1s 1.2s forwards'}}>&gt; frontend: React · Next.js · Framer</span>
              <span className="terminal-line" style={{color:'#E0E4E8',opacity:0,animation:'revealLine 0.1s 1.8s forwards'}}>&gt; backend:  Node · Express · MongoDB</span>
              <span className="terminal-line" style={{color:'#E0E4E8',opacity:0,animation:'revealLine 0.1s 2.4s forwards'}}>&gt; ai &amp; web3: OpenAI · Aptos · Solidity</span>
              <span className="terminal-line" style={{color:'rgba(255,255,255,0.4)',opacity:0,animation:'revealLine 0.1s 3s forwards'}}>&gt; status: fully loaded<span className="terminal-cursor"></span></span>
            </div>
          </motion.div>

          {/* Achievements Terminal Box */}
          <motion.div
            className="bento-box box-awards terminal-box glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="terminal-header">
              <span className="mac-dot red"></span>
              <span className="mac-dot yellow"></span>
              <span className="mac-dot green"></span>
            </div>
            <div className="terminal-body">
              <span className="terminal-line" style={{color:'rgba(255,255,255,0.5)',opacity:0,animation:'revealLine 0.1s 0.8s forwards'}}>&gt; git log --achievements</span>
              <span className="terminal-line" style={{color:'#E0E4E8',opacity:0,animation:'revealLine 0.1s 1.5s forwards'}}>• <strong>Code for Bharat</strong> — Season 2</span>
              <span className="terminal-line" style={{color:'#E0E4E8',opacity:0,animation:'revealLine 0.1s 2.1s forwards'}}>• Research Paper — <strong>ICAHTE–2026</strong></span>
              <span className="terminal-line" style={{color:'#E0E4E8',opacity:0,animation:'revealLine 0.1s 2.7s forwards'}}>• Production <strong>AI &amp; Web3</strong> systems built</span>
              <span className="terminal-line" style={{color:'rgba(255,255,255,0.4)',opacity:0,animation:'revealLine 0.1s 3.2s forwards'}}>&gt; 3 commits found<span className="terminal-cursor"></span></span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
