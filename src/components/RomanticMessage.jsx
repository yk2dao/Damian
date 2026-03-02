import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const RomanticMessage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-b from-secondary via-primary/20 to-accent/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-8xl">🐾</div>
        <div className="absolute top-40 right-10 text-8xl">💕</div>
        <div className="absolute bottom-40 left-20 text-8xl">🌸</div>
        <div className="absolute bottom-10 right-20 text-8xl">💖</div>
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Heart className="w-20 h-20 fill-primary text-primary drop-shadow-lg" />
            </motion.div>
          </div>

          <h2 className="text-6xl font-bold text-primary drop-shadow-md">
            My Dearest Love
          </h2>

          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p className="text-2xl font-medium">
              Every day with you is a beautiful adventure, just like Snoopy's dreams. 🐾
            </p>

            <p className="text-xl">
              You bring warmth to my heart, laughter to my days, and endless joy to my life. 
              Your smile is the sunshine that brightens even the cloudiest moments.
            </p>

            <p className="text-xl">
              Like Snoopy and his best friend, we're the perfect duo. You complete me in ways 
              I never knew were possible. Thank you for being my partner, my love, and my everything.
            </p>

            <motion.p 
              className="text-3xl font-bold text-primary"
              animate={{ 
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              I love you more than words can express 💕
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8"
          >
            <Button
              onClick={scrollToTop}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bold text-xl px-12 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <Heart className="w-6 h-6 mr-2 fill-white" />
              I Love You Too
              <ArrowUp className="w-6 h-6 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex justify-center gap-4 pt-8"
          >
            <span className="text-6xl animate-pulse">💑</span>
            <span className="text-6xl animate-pulse" style={{ animationDelay: '0.3s' }}>💕</span>
            <span className="text-6xl animate-pulse" style={{ animationDelay: '0.6s' }}>🌹</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default RomanticMessage;