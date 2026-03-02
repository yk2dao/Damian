import React from 'react';
import { motion } from 'framer-motion';

const FlowerAnimation = () => {
  const flowers = [
    { id: 1, top: '10%', left: '5%', size: 'text-3xl', delay: 0 },
    { id: 2, top: '80%', right: '10%', size: 'text-4xl', delay: 1 },
    { id: 3, top: '40%', right: '5%', size: 'text-2xl', delay: 0.5 },
    { id: 4, bottom: '15%', left: '10%', size: 'text-3xl', delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {flowers.map((flower) => (
        <motion.div
          key={flower.id}
          className={`absolute ${flower.size}`}
          style={{ 
            top: flower.top, 
            left: flower.left, 
            right: flower.right, 
            bottom: flower.bottom 
          }}
          animate={{
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.9, 0.6]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: flower.delay
          }}
        >
          {flower.id % 2 === 0 ? '🌻' : '🌸'}
        </motion.div>
      ))}
    </div>
  );
};

export default FlowerAnimation;