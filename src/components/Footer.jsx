import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-accent/30 to-secondary py-8 px-6">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <div className="flex justify-center items-center gap-2">
          <Heart className="w-6 h-6 fill-primary text-primary" />
          <span className="text-4xl">🐾</span>
          <Heart className="w-6 h-6 fill-primary text-primary" />
        </div>

        <p className="text-xl font-medium text-foreground/90">
          Forever and Always
        </p>

        <p className="text-lg text-foreground/70">
          Like Snoopy's endless adventures, our love story continues...
        </p>

        <div className="flex justify-center gap-3 pt-4">
          <span className="text-3xl">💕</span>
          <span className="text-3xl">🌸</span>
          <span className="text-3xl">💕</span>
        </div>

        <p className="text-sm text-foreground/60 pt-4">
          Made with love {new Date().getFullYear()} 💖
        </p>
      </div>
    </footer>
  );
};

export default Footer;