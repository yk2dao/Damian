import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  const variants = {
    initial: { opacity: 0, y: 50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        staggerChildren: 0.2
      }
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.4 } }
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="w-full h-full flex flex-col justify-center items-center relative"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;