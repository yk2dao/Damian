import React from 'react';
import { motion } from 'framer-motion';

const VersePage6 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden bg-secondary/20"
    >
      <motion.div 
        className="w-48 h-48 bg-white rounded-2xl cute-border kawaii-shadow flex items-center justify-center text-7xl mb-8 z-10 rotate-3"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        💋
      </motion.div>

      <div className="z-10 text-center px-6 w-full max-w-[90%] bg-white/90 rounded-3xl p-6 kawaii-shadow border-2 border-secondary">
        <motion.p 
          className="text-2xl font-quicksand font-bold text-secondary-foreground leading-relaxed" 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        >
          "Si tus labios están más buenos..."
        </motion.p>
        <div className="mt-4 flex justify-center gap-2 text-3xl">🍓 ✨ 🍓</div>
      </div>

      <div className="absolute top-20 right-1/4 text-4xl opacity-50 animate-pulse">🌸</div>
      <div className="absolute bottom-24 left-1/4 text-4xl opacity-50 animate-bounce">💖</div>
    </motion.div>
  );
};

export default VersePage6;