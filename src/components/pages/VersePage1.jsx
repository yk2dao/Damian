import React from 'react';
import { motion } from 'framer-motion';
// Use static public path for audio: /audio/audio01.mp3
import img01 from '../../../img/img01.jfif';
const VersePage1 = () => {
  return <motion.div initial={{
    opacity: 0,
    x: 100
  }} animate={{
    opacity: 1,
    x: 0
  }} exit={{
    opacity: 0,
    x: -100
  }} transition={{
    duration: 0.5
  }} className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden bg-secondary/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/40 to-transparent"></div>
      
      <motion.img src={img01} alt="Cute Badtz-Maru aesthetic" className="w-48 h-48 rounded-full cute-border kawaii-shadow mb-8 object-cover z-10" animate={{
      y: [0, -15, 0]
    }} transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }} />

      <div className="z-10 text-center px-6 w-full max-w-[90%] bg-white/70 backdrop-blur-sm rounded-3xl p-6 kawaii-shadow border-2 border-secondary">
        <h2 className="text-3xl font-bold text-secondary-foreground mb-4 font-fredoka"></h2>
        <motion.p className="text-2xl font-quicksand font-bold text-foreground mb-2 leading-relaxed" initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }}>
          "Toy ahorrando pa' comprarte el sol
        </motion.p>
        <motion.div className="flex justify-center gap-2 text-2xl mb-2">☀️ 🐧 ☀️</motion.div>
      </div>

      

      <div className="absolute top-20 right-10 text-3xl opacity-60 animate-spin-slow">🌸</div>
      <div className="absolute bottom-32 left-10 text-3xl opacity-60 animate-bounce">✨</div>
    </motion.div>;
};
export default VersePage1;