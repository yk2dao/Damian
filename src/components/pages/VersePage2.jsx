import React from 'react';
import { motion } from 'framer-motion';
// Use static public path for audio: /audio/audio01.mp3
import img02 from '../../../img/img02.jfif';
const VersePage2 = () => {
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
  }} className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden bg-accent/30">
      <div className="absolute inset-0 bg-white/20"></div>
      
      <motion.img src={img02} alt="Cute Keroppi aesthetic" className="w-48 h-48 rounded-[2rem] cute-border kawaii-shadow mb-8 object-cover z-10" animate={{
      scale: [1, 1.05, 1],
      rotate: [-2, 2, -2]
    }} transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }} />

      <div className="z-10 text-center px-6 w-full max-w-[90%] bg-white/80 rounded-3xl p-6 kawaii-shadow border-2 border-accent">
        <motion.p className="text-2xl font-quicksand font-bold text-accent-foreground mb-4 leading-relaxed" initial={{
        opacity: 0,
        y: 10
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2
      }}>
          Días grises cambian con tu voz...
        </motion.p>
        <motion.div className="flex justify-center gap-2 text-3xl"> 🌧️ 🌈</motion.div>
      </div>
      
      
      <div className="absolute top-1/4 left-8 text-4xl opacity-50 animate-pulse">🎀</div>
      <div className="absolute bottom-1/4 right-8 text-4xl opacity-50 animate-bounce">💖</div>
    </motion.div>;
};
export default VersePage2;