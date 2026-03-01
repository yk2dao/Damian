import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const HeartAnimation = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 2,
        size: 20 + Math.random() * 15,
      };

      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, (newHeart.duration + newHeart.delay) * 1000);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ 
              opacity: 0, 
              y: '100vh', 
              x: `${heart.left}vw`,
              scale: 0.5,
              rotate: 0
            }}
            animate={{ 
              opacity: [0, 0.6, 0.4, 0],
              y: '-20vh',
              scale: [0.5, 1, 0.8],
              rotate: [0, 10, -10, 0]
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              ease: 'easeOut'
            }}
            className="absolute"
            style={{
              width: heart.size,
              height: heart.size,
            }}
          >
            <Heart 
              className="fill-primary text-primary" 
              style={{ width: '100%', height: '100%' }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default HeartAnimation;