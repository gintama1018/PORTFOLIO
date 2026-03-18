import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './LoadingScreen.css';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3 seconds of suspense, then the slash
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <div className="loading-wrapper">
          
          {/* Top Half of the Screen */}
          <motion.div 
            className="loading-slice top-slice"
            exit={{ y: "-100vh", opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          >
             <div className="gintoki-container">
                <img src="/gintoki.png" alt="Loading Yorozuya" className="gintoki-img" />
             </div>
          </motion.div>

          {/* Bottom Half of the Screen */}
          <motion.div 
            className="loading-slice bottom-slice"
            exit={{ y: "100vh", opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          >
             <div className="gintoki-container">
                <img src="/gintoki.png" alt="Loading Yorozuya" className="gintoki-img" />
             </div>
          </motion.div>

          {/* Sword Slash Flash Effect */}
          <motion.div 
            className="slash-line"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0, scaleY: 8, filter: "blur(10px)" }}
            transition={{ duration: 0.15, delay: 2.9, ease: "easeOut" }}
          />
          
        </div>
      )}
    </AnimatePresence>
  );
}
