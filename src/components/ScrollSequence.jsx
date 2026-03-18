import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import './ScrollSequence.css';

const frameCount = 240;
const currentFrame = index => `/FRAMES/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

export default function ScrollSequence() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Preload frames
  useEffect(() => {
    const loadedImages = [];
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawImage = (img) => {
    if (!canvasRef.current || !img) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    // Fill background with exact Gintama base color to prevent letterboxing artifacts
    context.fillStyle = '#0B0B0C';
    context.fillRect(0, 0, canvas.width, canvas.height);
    
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio); // Cover mode
    
    const centerShift_x = (canvas.width - img.width * ratio) / 2;
    const centerShift_y = (canvas.height - img.height * ratio) / 2;
    
    context.drawImage(img, 0, 0, img.width, img.height,
                      centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  };

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);
  
  useMotionValueEvent(frameIndex, "change", (latest) => {
    const index = Math.round(latest);
    if (images[index]) {
      drawImage(images[index]);
    }
  });

  useEffect(() => {
    const setCanvasSize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth * window.devicePixelRatio;
        canvasRef.current.height = window.innerHeight * window.devicePixelRatio;
        if (images.length > 0) {
          const currentIndex = Math.round(frameIndex.get());
          if (images[currentIndex]) {
            drawImage(images[currentIndex]);
          } else if (images[0].complete) {
            drawImage(images[0]);
          }
        }
      }
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    
    if (images.length > 0) {
      if (images[0].complete) {
        drawImage(images[0]);
      } else {
        images[0].onload = () => drawImage(images[0]);
      }
    }
    
    return () => window.removeEventListener('resize', setCanvasSize);
  }, [images]);

  // Clean, singular cinematic typography that fades out on scroll
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const titleScale = useTransform(scrollYProgress, [0, 0.4], [1, 1.1]);

  return (
    <section ref={containerRef} className="scroll-sequence-container">
      <div className="sticky-canvas-wrapper">
        <canvas ref={canvasRef} className="sequence-canvas" />
        
        {/* Immersive HUD Overlay to prevent 'empty' feeling */}
        <div className="canvas-overlay">
          
          <div className="hud-corners">
            <div className="hud-corner top-left">SYS.V1 // INIT</div>
            <div className="hud-corner top-right">LAT 35.6895° N, LON 139.6917° E</div>
            <div className="hud-corner bottom-left">STATUS: OPERATIONAL</div>
            <div className="hud-corner bottom-right">SCROLL SEQUENCE ACTIVE</div>
            <div className="hud-crosshair center"></div>
          </div>

          <motion.div 
            className="cinematic-text title-center" 
            style={{ opacity: titleOpacity, scale: titleScale }}
          >
            <div className="title-glass-box">
              <div className="yorozuya-badge">万事屋</div>
              <h1 className="bold-3d-text">CREATIVE<br/>TECHNOLOGIST</h1>
              <p className="subtitle-3d">Code. Create. Break. Rebuild.<br/>Building systems that think, react, and evolve.</p>
              <div className="scroll-indicator-line"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
