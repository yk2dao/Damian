import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import BookPage from '@/pages/BookPage';
import AudioPlayer from '@/components/AudioPlayer';

function App() {
  return (
    <Router>
      <AudioPlayer />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book" element={<BookPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;