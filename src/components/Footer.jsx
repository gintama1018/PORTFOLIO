import React, { useRef, useEffect, useState } from 'react';
import './Footer.css';

const frameCount = 240;
const currentFrame = index => `/FRAMES/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

export default function Footer() {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);

  // Preload frames for bg loop
  useEffect(() => {
    const loadedImages = [];
    for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        img.src = currentFrame(i);
        loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  // Frame Loop logic
  useEffect(() => {
    if (images.length === 0) return;
    
    let frameIndex = 0;
    let animationFrameId;
    let lastDrawTime = 0;
    const fps = 24; 
    const interval = 1000 / fps;

    const renderLoop = (timestamp) => {
        animationFrameId = requestAnimationFrame(renderLoop);
        if (timestamp - lastDrawTime < interval) return;
        lastDrawTime = timestamp;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext('2d');
        const img = images[frameIndex];
        
        if (img && img.complete) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight; // draw larger to cover
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);
            
            const centerShift_x = (canvas.width - img.width * ratio) / 2;
            const centerShift_y = (canvas.height - img.height * ratio) / 2;
            
            context.fillStyle = '#0B0B0C';
            context.fillRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, 0, 0, img.width, img.height,
                              centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
        }
        
        frameIndex = (frameIndex + 1) % frameCount;
    };

    animationFrameId = requestAnimationFrame(renderLoop);
    return () => cancelAnimationFrame(animationFrameId);
  }, [images]);

  return (
    <footer id="contact" className="contact">
      <div className="contact-bg">
        <canvas ref={canvasRef} className="contact-canvas" />
      </div>
      <div className="contact-overlay"></div>
      
      <div className="container contact-container">
        
        <div className="contact-content fade-up">
          <h1>Got an idea, project, or just want to talk tech?<br/>Let's connect.</h1>
          <a href="mailto:pihujang0@gmail.com" className="email-link">Connect Now ↗</a>
        </div>
        
        <div className="contact-bottom fade-up">
          <div className="contact-copyright">
            &copy; {new Date().getFullYear()} FourthWallFreak. Building Chaos-driven Systems.
          </div>
          <div className="contact-socials">
            <a href="https://github.com/gintama1018" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/sonu-jangir-98968b390/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
