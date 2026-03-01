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
    const p = audio.play();
    if (p !== undefined) {
      p.then(() => {
        setPlaying(true);
        setAutoplayBlocked(false);
      }).catch(() => {
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

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-xl p-2 shadow-md">
      <audio ref={audioRef} src="/audio/audio01.mp3" />
      <button onClick={togglePlay} className="px-3 py-1 rounded bg-primary text-white">
        {playing ? 'Pausar' : 'Reproducir'}
      </button>
      <button onClick={toggleMute} className="px-2 py-1 rounded border">
        {muted ? 'Activar' : 'Silenciar'}
      </button>
      {autoplayBlocked && (
        <button onClick={() => { audioRef.current.play(); setPlaying(true); setAutoplayBlocked(false); }} className="px-3 py-1 rounded bg-accent text-white">
          Iniciar audio
        </button>
      )}
    </div>
  );
};

export default AudioPlayer;
