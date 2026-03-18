import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import LazyImage from './LazyImage';
import './Projects.css';

const projects = [
  {
    id: 'niva',
    title: 'Niva AI Assistant',
    description: 'A futuristic voice-enabled AI assistant with real-time interaction, emotional intelligence, and a sleek UI inspired by JARVIS.',
    image: '/mockups/vayubudhi.png',
    tags: ['React Native', 'Expo', 'OpenAI', 'Interaction'],
    cmd: 'run niva --mode=voice'
  },
  {
    id: 'nft-marketplace',
    title: 'NFT Marketplace',
    description: 'A decentralized NFT marketplace built on Aptos blockchain enabling users to mint, buy, and sell digital assets securely.',
    image: '/mockups/infrawatch.png',
    tags: ['React', 'Aptos', 'Web3', 'Blockchain'],
    cmd: 'deploy marketplace --chain=aptos'
  },
  {
    id: 'iot-traffic',
    title: 'IoT Traffic Solution',
    description: 'A smart traffic management system designed to reduce congestion using IoT infrastructure and real-time data modeling.',
    image: '/mockups/iot_traffic.png',
    tags: ['IoT', 'Data Viz', 'Smart City'],
    cmd: 'connect sensors --city=smart'
  },
  {
    id: 'meshnet',
    title: 'MeshNet Protocol',
    description: 'A decentralized P2P network where nodes connect dynamically without centralized servers.',
    image: '/mockups/meshnet.png',
    tags: ['P2P', 'Distributed', 'Sockets'],
    cmd: 'init mesh --nodes=dynamic'
  },
  {
    id: 'portfolio',
    title: 'Personal Portfolio',
    description: 'A hardware-accelerated portfolio featuring immersive 3D UI, cinematic scroll sequences and a chaos-driven aesthetic.',
    image: '/mockups/portfolio.png',
    tags: ['React', 'Three.js', 'Framer Motion'],
    cmd: 'build portfolio --mode=chaos'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-padding projects-section">
      <div className="container">

        {/* Section Header */}
        <div className="projects-header fade-up">
          <div className="section-terminal-header">
            <span className="mac-dot red"></span>
            <span className="mac-dot yellow"></span>
            <span className="mac-dot green"></span>
            <span className="section-terminal-title">~/portfolio/featured-work</span>
          </div>
          <h2>Featured Work</h2>
          <p>A curated selection of my latest design and engineering endeavors.</p>
        </div>

        <div className="projects-grid" style={{ position: 'relative' }}>
          <div className="connection-rod"></div>

          {projects.map((project, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div className={`project-row ${isReversed ? 'reverse' : ''}`} key={project.id}>

                {/* TERMINAL CONTENT BLOCK */}
                <motion.div
                  className={`project-glass-card fade-up ${isReversed ? 'align-right' : ''}`}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                    hidden: {}
                  }}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const x = e.nativeEvent.offsetX / card.offsetWidth - 0.5;
                    const y = e.nativeEvent.offsetY / card.offsetHeight - 0.5;
                    card.style.transform = `rotateY(${x * 5}deg) rotateX(${y * -5}deg) scale(1.02)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
                  }}
                >
                  {/* Terminal Top Bar */}
                  <div className="project-terminal-topbar">
                    <span className="mac-dot red"></span>
                    <span className="mac-dot yellow"></span>
                    <span className="mac-dot green"></span>
                    <span className="project-terminal-path">~/projects/{project.id}</span>
                  </div>

                  {/* All content inside a padded body */}
                  <div className="project-card-body">

                    {/* Command line */}
                    <motion.div
                      className="project-cmd-line"
                      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                    >
                      <span className="t-prompt">$</span>
                      <span className="t-command">{project.cmd}</span>
                    </motion.div>

                    {/* Tags as --flags */}
                    <motion.div
                      className={`project-tags ${isReversed ? 'flex-end' : ''}`}
                      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                    >
                      {project.tags.map((tag, idx) => (
                        <motion.span
                          key={idx}
                          className="tag"
                          variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}
                        >
                          --{tag}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Project title */}
                    <motion.h3
                      className="project-title"
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                      {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                      className="project-desc"
                      variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    >
                      {project.description}
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                      className="project-action"
                      variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                    >
                      <Link to={`/project/${project.id}`} className="view-case-study" aria-label={`View Case Study: ${project.title}`}>
                        <span className="t-prompt">$</span>
                        <span>open case-study →</span>
                      </Link>
                    </motion.div>

                  </div>{/* end project-card-body */}
                </motion.div>

                {/* VISUAL BLOCK */}
                <div className="project-visual fade-up">
                  <div className={`bg-glow ${isReversed ? 'glow-alt' : ''}`}></div>
                  <div className="phone-mockup">
                    <LazyImage src={project.image} alt={project.title} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
