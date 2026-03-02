import React from 'react';
import { motion } from 'framer-motion';

const VersePage5 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden bg-primary/20"
    >
      <motion.div 
        className="w-40 h-40 bg-white rounded-full cute-border kawaii-shadow flex items-center justify-center text-6xl mb-8 z-10"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        🍬
      </motion.div>

      <div className="z-10 text-center px-6 w-full max-w-[90%] bg-white/80 backdrop-blur-sm rounded-3xl p-8 kawaii-shadow border-2 border-primary">
        <motion.p 
          className="text-2xl font-quicksand font-bold text-primary-foreground leading-relaxed" 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        >
          Tú me endulzas con tu pelo y me despego del suelo...
        </motion.p>
        <div className="mt-4 flex justify-center gap-3 text-3xl">🎀 🍭 🎀</div>
      </div>

      <div className="absolute top-1/3 left-6 text-3xl opacity-60 animate-bounce">💖</div>
      <div className="absolute bottom-1/3 right-6 text-3xl opacity-60 animate-pulse">✨</div>
    </motion.div>
  );
};

export default VersePage5;