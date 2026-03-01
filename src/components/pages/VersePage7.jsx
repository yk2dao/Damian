import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../PageTransition';
import HeartFloating from '../HeartFloating';
import FlowerAnimation from '../FlowerAnimation';
import SnoopyDecoration from '../SnoopyDecoration';
import { Heart } from 'lucide-react';

const VersePage7 = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center relative overflow-hidden">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1703543757940-e8d71b55d572)' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <HeartFloating />
      <FlowerAnimation />
      <SnoopyDecoration />
      <PageTransition>
        <div className="z-10 text-center px-8 w-full max-w-[90%]">
          <motion.div variants={{ initial: { opacity: 0, scale: 0 }, animate: { opacity: 1, scale: 1 } }} className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-primary fill-primary animate-pulse" />
          </motion.div>
          <motion.h2 className="text-4xl font-serif text-white font-bold mb-4 drop-shadow-lg" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}>
            Forever Yours
          </motion.h2>
          <motion.p className="text-xl font-serif text-accent font-medium leading-relaxed drop-shadow-md" variants={{ initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 } }}>
            Like Snoopy and his adventures, my greatest adventure is loving you.
          </motion.p>
        </div>
      </PageTransition>
    </div>
  );
};

export default VersePage7;