import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { ChevronLeft, ChevronRight, Music } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { useSwipeGesture } from '@/hooks/useSwipeGesture';
import CoverPage from '@/components/pages/CoverPage';
import VersePage1 from '@/components/pages/VersePage1';
import VersePage2 from '@/components/pages/VersePage2';
import VersePage3 from '@/components/pages/VersePage3';
import VersePage4 from '@/components/pages/VersePage4';
import VersePage5 from '@/components/pages/VersePage5';
import VersePage6 from '@/components/pages/VersePage6';
import { Button } from '@/components/ui/button';

// Note: For 8 pages, we'll use Cover + 6 verses + 1 simple final page inline or re-use cover style
const FinalPage = () => <div className="w-full h-full flex flex-col justify-center items-center bg-primary/10 relative overflow-hidden">
    <div className="z-10 text-center p-8 bg-white cute-border kawaii-shadow max-w-[85%] rounded-[2rem]">
      <h2 className="text-4xl font-fredoka font-bold text-primary mb-4">que los jugos</h2>
      <p className="text-xl font-quicksand font-bold text-foreground mb-4">que hace mi abuelo &lt;3</p>
      <div className="text-5xl">🐾🎀🐾</div>
    </div>
  </div>;
const pages = [<CoverPage key="0" />, <VersePage1 key="1" />, <VersePage2 key="2" />, <VersePage3 key="3" />, <VersePage4 key="4" />, <VersePage5 key="5" />, <VersePage6 key="6" />, <FinalPage key="7" />];
const BookPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(prev => prev + 1);
    }
  };
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
    }
  };
  const swipeHandlers = useSwipeGesture({
    onSwipeLeft: nextPage,
    onSwipeRight: prevPage,
    threshold: 40
  });
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentPage]);
  return <>
      <Helmet>
        <title>Sanrio Love Book</title>
        <meta name="description" content="..." />
      </Helmet>
      
      {/* Desktop Warning */}
      <div className="hidden sm:flex min-h-screen items-center justify-center bg-muted p-8">
        <div className="text-center space-y-4 bg-white p-10 rounded-[2rem] kawaii-shadow cute-border max-w-sm">
          <span className="text-6xl">📱</span>
          <h1 className="text-3xl font-fredoka font-bold text-primary">Mobile Only</h1>
          <p className="text-foreground font-poppins font-medium">
            Please view this cute book on a mobile device! 🎀
          </p>
        </div>
      </div>

      {/* Mobile App Container */}
      <div className="sm:hidden w-full max-w-[480px] mx-auto h-[100dvh] bg-background relative overflow-hidden flex flex-col shadow-2xl" {...swipeHandlers}>
        
        {/* Top Bar with Music Toggle and Page Counter */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-50 pointer-events-none">
          <Button variant="outline" size="icon" className="rounded-full bg-white/50 backdrop-blur-md border-white kawaii-shadow pointer-events-auto text-primary hover:text-primary hover:bg-white">
            <Music className="w-5 h-5" />
          </Button>
          <div className="bg-white/80 backdrop-blur-md px-4 py-1 rounded-full font-quicksand font-bold text-sm text-foreground kawaii-shadow">
            {currentPage + 1} / {pages.length}
          </div>
        </div>

        {/* Page Content */}
        <div className="flex-1 relative w-full h-full">
          <AnimatePresence mode="wait">
            {pages[currentPage]}
          </AnimatePresence>
        </div>

        {/* Bottom Navigation UI */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-between px-6 z-50 pointer-events-none">
          <Button onClick={prevPage} disabled={currentPage === 0} className="rounded-full w-14 h-14 bg-white/90 backdrop-blur-md border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-0 transition-all kawaii-shadow pointer-events-auto">
            <ChevronLeft className="h-8 w-8" />
          </Button>
          
          {/* Progress Dots */}
          <div className="flex items-center gap-1.5 pointer-events-auto">
            {pages.map((_, idx) => <div key={idx} className={`h-2 rounded-full transition-all duration-300 ${idx === currentPage ? 'bg-primary w-6' : 'bg-primary/30 w-2'}`} />)}
          </div>

          <Button onClick={nextPage} disabled={currentPage === pages.length - 1} className="rounded-full w-14 h-14 bg-white/90 backdrop-blur-md border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-0 transition-all kawaii-shadow pointer-events-auto">
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      </div>
    </>;
};
export default BookPage;