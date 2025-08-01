import React from 'react';
import Countdown from './Countdown';

const HeroSection: React.FC = () => {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1920&auto=format&fit=crop';
  const targetDate = '2026-07-08T00:00:00';

  return (
    <header 
      className="relative h-screen flex flex-col items-center justify-center text-center text-white bg-cover bg-center bg-fixed p-4"
      style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider mb-4">
          Tudarasok Hegyi Konferencia 2026
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 font-light">
          Új hagyományt indítunk: közös kaland, ahol feltöltődünk, túrázunk és nosztalgiázunk!
        </p>
        <Countdown targetDate={targetDate} />
      </div>
    </header>
  );
};

export default HeroSection;
