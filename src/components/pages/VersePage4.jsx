import React from 'react';
import { motion } from 'framer-motion';

const VersePage4 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden bg-card"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuNSIvPjwvc3ZnPg==')] opacity-50"></div>
      
      <motion.div 
        className="z-10 text-center px-6 w-full max-w-[85%] bg-white/95 rounded-3xl p-8 kawaii-shadow border-4 border-yellow-200 mb-8"
        animate={{ rotate: [-1, 1, -1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <motion.p 
          className="text-3xl font-fredoka font-bold text-card-foreground leading-relaxed" 
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
        >
          Te acurruco dentro 'e un girasol...
        </motion.p>
      </motion.div>

      <div className="flex gap-4 text-5xl z-10">
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }}>🌻</motion.div>
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>🐾</motion.div>
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>🌻</motion.div>
      </div>
    </motion.div>
  );
};

export default VersePage4;