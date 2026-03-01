import React from 'react';
import { motion } from 'framer-motion';
// Use static public path for audio: /audio/audio01.mp3
import img03 from '../../../img/img03.jfif';

const VersePage3 = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden bg-muted/40"
    >
      <motion.img 
        src={img03} 
        alt="Cute Pompompurin aesthetic"
        className="w-56 h-56 rounded-full cute-border kawaii-shadow mb-8 object-cover z-10"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="z-10 text-center px-6 w-full max-w-[90%] bg-white/90 rounded-[2rem] p-8 kawaii-shadow border-4 border-muted">
        <motion.p 
          className="text-2xl font-quicksand font-bold text-muted-foreground leading-relaxed" 
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
        >
          Veo las nubes color tornasol...
        </motion.p>
        <div className="mt-4 text-3xl flex justify-center space-x-3">☁️ 🍮 ☁️</div>
      </div>

      

      <div className="absolute top-16 left-1/4 text-4xl opacity-70 animate-bounce">🌸</div>
      <div className="absolute bottom-20 right-1/4 text-4xl opacity-70 animate-pulse">✨</div>
    </motion.div>
  );
};

export default VersePage3;