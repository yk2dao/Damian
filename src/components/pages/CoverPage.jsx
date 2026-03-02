import React from 'react';
import { motion } from 'framer-motion';
const CoverPage = () => {
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden bg-primary/20">
      {/* Decorative background elements */}
      <div className="absolute top-10 left-10 text-4xl animate-bounce">✨</div>
      <div className="absolute bottom-20 right-10 text-4xl animate-pulse">💖</div>
      <div className="absolute top-1/4 right-8 text-3xl opacity-50">🎀</div>
      <div className="absolute bottom-1/3 left-8 text-3xl opacity-50">🌸</div>

      <motion.div className="z-10 text-center p-8 bg-white/80 backdrop-blur-md cute-border kawaii-shadow max-w-[85%] w-full" whileHover={{
      scale: 1.02
    }}>
        <motion.div initial={{
        scale: 0,
        rotate: -180
      }} animate={{
        scale: 1,
        rotate: 0
      }} transition={{
        type: "spring",
        stiffness: 200,
        delay: 0.2
      }} className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary shadow-lg bg-white">
          <img src="https://horizons-cdn.hostinger.com/8f577a2f-632b-48cd-a4fa-a4279c00cbe3/a-ass-o-u-a-hyung-s-omegaaii-i-e-c-edegablamanhwaa-kY8Wm.jfif" alt="Cute Hello Kitty aesthetic" className="w-full h-full object-cover" />
        </motion.div>
        
        <motion.h1 className="text-4xl font-bold text-primary-foreground mb-2 drop-shadow-sm" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.4
      }}>
          my boy <br /><span className="text-primary text-5xl">my boy</span>
        </motion.h1>
        
        <motion.div className="flex justify-center gap-2 mb-4" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.5
      }}>
          <span className="text-2xl"></span>
          <span className="text-2xl">💕</span>
          <span className="text-2xl"></span>
        </motion.div>

        <motion.p className="text-lg font-medium text-foreground/80 font-poppins" initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 0.6
      }}>next &lt;3</motion.p>
      </motion.div>
    </motion.div>;
};
export default CoverPage;