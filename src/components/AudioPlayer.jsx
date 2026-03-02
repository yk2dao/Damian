import React, { useEffect, useRef, useState } from 'react';

const AudioPlayer = () => {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [autoplayBlocked, setAutoplayBlocked] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.loop = true;

    const playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setPlaying(true);
          setAutoplayBlocked(false);
        })
        .catch(() => {
          setPlaying(false);
          setAutoplayBlocked(true);
        });
    }
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setPlaying(true);
      setAutoplayBlocked(false);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  const handleManualStart = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.play();
    setPlaying(true);
    setAutoplayBlocked(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-xl p-2 shadow-md">
      
      {/* 🔥 RUTA CORREGIDA PARA GITHUB PAGES */}
    <audio
    ref={audioRef}
    src="/Damian/audio/audio01.mp3"
/>
      <button
        onClick={togglePlay}
        className="px-3 py-1 rounded bg-primary text-white"
      >
        {playing ? 'Pausar' : 'Reproducir'}
      </button>

      <button
        onClick={toggleMute}
        className="px-2 py-1 rounded border"
      >
        {muted ? 'Activar' : 'Silenciar'}
      </button>

      {autoplayBlocked && (
        <button
          onClick={handleManualStart}
          className="px-3 py-1 rounded bg-accent text-white"
        >
          Iniciar audio
        </button>
      )}
    </div>
  );
};

export default AudioPlayer;