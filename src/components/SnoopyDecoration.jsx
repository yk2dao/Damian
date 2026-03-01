import React from 'react';
import { motion } from 'framer-motion';

const SnoopyDecoration = () => {
  return (
    <motion.div 
      className="absolute top-4 right-4 text-4xl pointer-events-none z-20 opacity-80"
      animate={{
        y: [0, -10, 0],
        rotate: [-5, 5, -5]
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.2 }}
    >
      🐾
    </motion.div>
  );
};

export default SnoopyDecoration;