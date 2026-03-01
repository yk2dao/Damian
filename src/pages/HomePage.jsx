import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, Sparkles, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
const HomePage = () => {
  const navigate = useNavigate();
  return <>
      <Helmet>
        <title>Sanrio Love Letter</title>
        <meta name="description" content="Mi buen amor" />
      </Helmet>

      {/* Desktop Warning */}
      <div className="hidden sm:flex min-h-screen items-center justify-center bg-primary/10 p-8">
        <div className="text-center space-y-6 max-w-md bg-white p-10 cute-border kawaii-shadow">
          <span className="text-7xl">🎀</span>
          <h1 className="text-4xl font-fredoka font-bold text-primary">Mobile Only</h1>
          <p className="text-lg text-foreground font-poppins font-medium">
            This cute experience is designed for mobile screens. Please open it on your phone for maximum kawaii! 📱✨
          </p>
        </div>
      </div>

      {/* Mobile Container */}
      <div className="sm:hidden w-full max-w-[480px] mx-auto min-h-[100dvh] sanrio-gradient relative overflow-hidden flex flex-col items-center justify-center px-6">
        
        {/* Floating background elements */}
        <motion.div animate={{
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0]
      }} transition={{
        duration: 5,
        repeat: Infinity
      }} className="absolute top-20 left-10 text-4xl opacity-80">🌸</motion.div>
        <motion.div animate={{
        y: [0, 20, 0],
        rotate: [0, -10, 10, 0]
      }} transition={{
        duration: 6,
        repeat: Infinity
      }} className="absolute bottom-32 right-10 text-5xl opacity-80">💖</motion.div>
        <motion.div animate={{
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 3,
        repeat: Infinity
      }} className="absolute top-1/3 right-8 text-3xl opacity-80">✨</motion.div>
        
        <motion.div initial={{
        scale: 0.8,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} transition={{
        type: "spring",
        bounce: 0.5,
        duration: 1
      }} className="bg-white/90 backdrop-blur-md cute-border kawaii-shadow rounded-[3rem] p-8 w-full max-w-sm text-center z-10">
          <div className="flex justify-center mb-6 space-x-2">
            <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
            <Sparkles className="w-8 h-8 text-accent fill-accent" />
            <Heart className="w-8 h-8 text-primary fill-primary animate-pulse" />
          </div>

          <h1 className="text-4xl font-fredoka font-bold text-foreground mb-4 leading-tight">
            Mi buen<br />
            <span className="text-primary">Amor</span>
          </h1>

          <p className="text-foreground/80 font-quicksand font-bold text-lg mb-8">Te amo tres millones 🎀</p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <img src="https://horizons-cdn.hostinger.com/8f577a2f-632b-48cd-a4fa-a4279c00cbe3/sanrio-png-bFBwJ.jfif" alt="Hello Kitty" className="rounded-2xl w-full h-24 object-cover border-2 border-primary" />
            <img src="https://horizons-cdn.hostinger.com/8f577a2f-632b-48cd-a4fa-a4279c00cbe3/descarga-5-PTrjt.jfif" alt="Pompompurin" className="rounded-2xl w-full h-24 object-cover border-2 border-accent" />
          </div>

          <Button onClick={() => navigate('/book')} className="w-full bg-primary hover:bg-primary/80 text-white rounded-full py-6 text-xl font-fredoka shadow-lg hover:shadow-xl transition-all active:scale-95">
            <BookOpen className="w-6 h-6 mr-2" />
            Start my bby
          </Button>
        </motion.div>
      </div>
    </>;
};
export default HomePage;