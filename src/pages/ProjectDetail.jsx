import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';
import './ProjectDetail.css';

const projectsData = {
  'niva': {
    title: 'Niva AI Assistant',
    description: 'A futuristic voice-enabled AI assistant with real-time interaction, emotional intelligence, and a sleek UI inspired by JARVIS. The objective was to create a mobile interface that felt exceptionally premium while communicating seamlessly via latency-free voice pipelines.',
    image: '/mockups/vayubudhi.png',
    tags: ['React Native', 'Expo', 'OpenAI', 'Interaction'],
    details: [
      { subtitle: 'The Challenge', text: 'Reducing voice latency while giving the AI a perceivable emotional tone and visual feedback loop.' },
      { subtitle: 'The Solution', text: 'Implemented real-time audio chunk streaming combined with reactive, claymorphic UI elements that pulse based on vocal frequencies.' }
    ]
  },
  'nft-marketplace': {
    title: 'NFT Marketplace',
    description: 'A decentralized NFT marketplace built on the Aptos blockchain enabling users to mint, buy, and sell digital assets immediately with near-zero gas fees.',
    image: '/mockups/infrawatch.png',
    tags: ['React', 'Aptos', 'Web3', 'Blockchain'],
    details: [
      { subtitle: 'The Challenge', text: 'Simplifying the Web3 onboarding experience for non-crypto natives.' },
      { subtitle: 'The Solution', text: 'Built a visually calming, traditional e-commerce style interface over a highly complex decentralized smart contract backend.' }
    ]
  },
  'iot-traffic': {
    title: 'IoT Traffic Solution',
    description: 'A smart traffic management system conceptualized to drastically reduce congestion using Internet of Things sensors and real-time prescriptive data modeling.',
    image: '/mockups/iot_traffic.png',
    tags: ['IoT', 'Data Visualization', 'Smart City'],
    details: [
      { subtitle: 'The Challenge', text: 'Processing massive simultaneous hardware sensor data updates without crashing dashboard feeds.' },
      { subtitle: 'The Solution', text: 'Aggregated Edge-data prior to cloud syncing, presenting only high-level friction alerts to the operators.' }
    ]
  },
  'meshnet': {
    title: 'MeshNet Protocol',
    description: 'An experimental decentralized communication system where independent nodes connect dynamically, bypassing single-point-of-failure centralized servers.',
    image: '/mockups/meshnet.png',
    tags: ['P2P Networks', 'Distributed Systems', 'Sockets'],
    details: [
      { subtitle: 'Infrastructure Bypass', text: 'Enabled offline LAN chat bridging during simulated server outages.' }
    ]
  },
  'portfolio': {
    title: 'Award-Winning Portfolio',
    description: 'This very site. Built as an alter-ego representation of "FourthWallFreak" showcasing technical capability and premium 3D artistic direction.',
    image: '/mockups/portfolio.png',
    tags: ['React', 'Three.js', 'Framer Motion', 'GSAP'],
    details: [
      { subtitle: 'The Chaos Logic', text: 'To build a system that feels alive, employing God-Tier 6fr/5fr grids and cinematic scroll hardware acceleration.' }
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData[id];

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <Link to="/">Return Home</Link>
      </div>
    );
  }

  return (
    <>
      <div className="project-detail-page">
        <div className="container">
          
          <Link to="/" className="back-link">
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>

          <header className="project-detail-header">
            <motion.h1 
              className="bold-3d-text project-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {project.title}
            </motion.h1>
            
            <motion.div 
              className="project-tags-large"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {project.tags.map(tag => (
                <span key={tag} className="tag-large">{tag}</span>
              ))}
            </motion.div>
          </header>

          <motion.div 
            className="project-hero-image glass"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <img src={project.image} alt={project.title} />
          </motion.div>

          <div className="project-content-grid">
            <div className="project-main-desc">
              <h3>Overview</h3>
              <p>{project.description}</p>
            </div>
            
            <div className="project-side-desc">
              {project.details.map((detail, idx) => (
                <div key={idx} className="detail-block">
                  <h4>{detail.subtitle}</h4>
                  <p>{detail.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
