import React from 'react';
import { motion } from 'framer-motion';

const SongLyricsSection = () => {
  const lyrics = [
    { text: "De un país lejano, con sazón de barrio", size: "text-xl", emphasis: false },
    { text: "llegaste tú", size: "text-3xl", emphasis: true },
    { text: "Con tus ojos de miel", size: "text-2xl", emphasis: false },
    { text: "y tu sonrisa que ilumina", size: "text-xl", emphasis: false },
    { text: "todo mi ser", size: "text-3xl", emphasis: true },
    { text: "", size: "", emphasis: false },
    { text: "Eres mi Reina Pepiada", size: "text-4xl", emphasis: true },
    { text: "la mezcla perfecta", size: "text-2xl", emphasis: false },
    { text: "de dulzura y picante", size: "text-xl", emphasis: false },
    { text: "Aguacate con pollo", size: "text-2xl", emphasis: false },
    { text: "como tu amor y el mío", size: "text-3xl", emphasis: true },
    { text: "", size: "", emphasis: false },
    { text: "En cada momento compartido", size: "text-xl", emphasis: false },
    { text: "me haces sentir vivo", size: "text-2xl", emphasis: true },
    { text: "Contigo, mi amor", size: "text-3xl", emphasis: true },
    { text: "todo tiene sabor", size: "text-2xl", emphasis: false },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section 
      className="min-h-screen py-16 px-6 relative overflow-hidden"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1680728270330-7c2422be1fa7)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/95 via-background/90 to-secondary/95"></div>
      
      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="space-y-6"
        >
          <motion.h2 
            variants={lineVariants}
            className="text-5xl font-bold text-primary text-center mb-12 drop-shadow-lg"
          >
            Our Song
          </motion.h2>

          <div className="space-y-4">
            {lyrics.map((line, index) => (
              <motion.p
                key={index}
                variants={lineVariants}
                className={`${line.size} ${
                  line.emphasis 
                    ? 'font-bold text-primary drop-shadow-md' 
                    : 'font-medium text-foreground/90'
                } text-center leading-relaxed`}
              >
                {line.text}
              </motion.p>
            ))}
          </div>

          <motion.div
            variants={lineVariants}
            className="flex justify-center gap-4 mt-12"
          >
            <span className="text-6xl">💕</span>
            <span className="text-6xl">🎵</span>
            <span className="text-6xl">💕</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SongLyricsSection;