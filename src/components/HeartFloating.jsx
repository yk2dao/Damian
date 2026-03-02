import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';

const HeartFloating = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 4 + Math.random() * 3,
        size: 15 + Math.random() * 20,
      };

      setHearts((prev) => [...prev.slice(-15), newHeart]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0, y: '100vh', x: `${heart.left}%`, scale: 0.5 }}
            animate={{ 
              opacity: [0, 0.7, 0.4, 0],
              y: '-20vh',
              x: `${heart.left + (Math.random() * 20 - 10)}%`,
              scale: [0.5, 1.2, 0.8],
              rotate: [0, 20, -20, 0]
            }}
            transition={{ duration: heart.duration, delay: heart.delay, ease: 'easeOut' }}
            className="absolute bottom-0 text-primary"
            style={{ width: heart.size, height: heart.size }}
          >
            <Heart className="fill-current w-full h-full opacity-60" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default HeartFloating;