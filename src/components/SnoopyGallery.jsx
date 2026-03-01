import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const SnoopyGallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1550504618-dc18cc790395',
      alt: 'Romantic Snoopy moment'
    },
    {
      url: 'https://images.unsplash.com/photo-1673268383705-a6904c7c57df',
      alt: 'Snoopy with hearts'
    },
    {
      url: 'https://images.unsplash.com/photo-1608372894684-7aea797ed9a6',
      alt: 'Sweet Snoopy illustration'
    },
    {
      url: 'https://images.unsplash.com/photo-1703596066772-b89a66984c4f',
      alt: 'Snoopy love theme'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className="min-h-screen py-16 px-6 bg-gradient-to-b from-secondary via-background to-secondary">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-primary text-center mb-4"
        >
          Our Memories
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-foreground/80 text-center mb-12"
        >
          Every moment with you is precious
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotate: index % 2 === 0 ? 2 : -2 }}
              className="relative group"
            >
              <div className="absolute -top-2 -right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Heart className="w-8 h-8 fill-accent text-accent animate-pulse" />
              </div>
              
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="absolute -bottom-2 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-4xl">🌸</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-3 mt-12"
        >
          <span className="text-5xl animate-bounce">💖</span>
          <span className="text-5xl animate-bounce" style={{ animationDelay: '0.2s' }}>🐾</span>
          <span className="text-5xl animate-bounce" style={{ animationDelay: '0.4s' }}>💖</span>
        </motion.div>
      </div>
    </section>
  );
};

export default SnoopyGallery;