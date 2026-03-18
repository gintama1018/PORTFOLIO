import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function LazyImage({ src, alt, className, delay = 0 }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    });

    if (imgRef.current) observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={imgRef}
      className={`lazy-image-container ${className || ''}`}
      style={{ overflow: 'hidden', width: '100%', display: 'flex' }}
    >
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          initial={{ opacity: 0, scale: 1.05, filter: 'blur(20px)' }}
          animate={{
            opacity: isLoaded ? 1 : 0,
            scale: isLoaded ? 1 : 1.05,
            filter: isLoaded ? 'blur(0px)' : 'blur(20px)'
          }}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
          onLoad={() => setIsLoaded(true)}
          style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }}
        />
      )}
    </div>
  );
}
