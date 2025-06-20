
import React, { useState, useEffect, useCallback } from 'react';
import { TimeRemaining } from './types';

const calculateTimeLeft = (): TimeRemaining => {
  const now = new Date();
  // Target midnight of the *next* day (start of tomorrow)
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
  const difference = tomorrow.getTime() - now.getTime();

  let hours = '00';
  let minutes = '00';
  let seconds = '00';

  if (difference > 0) {
    const totalSeconds = Math.floor(difference / 1000);
    hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
    minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    seconds = String(totalSeconds % 60).padStart(2, '0');
  }
  // If difference is <=0, it implies it's exactly midnight or past, 
  // and it will show 00:00:00. The next tick will correctly calculate for the new day.
  return { hours, minutes, seconds };
};

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeLeft());

  const updateTimeLeft = useCallback(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  useEffect(() => {
    const timerId = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(timerId); // Cleanup interval on component unmount
  }, [updateTimeLeft]);

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-black text-gray-200 select-none antialiased">
      <header className="absolute top-10 sm:top-12 md:top-16 text-center px-4">
        <h1 className="text-lg sm:text-xl md:text-2xl font-light text-gray-400 uppercase tracking-wider">
          Bello, non pace
        </h1>
      </header>

      <main className="flex items-center justify-center">
        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-mono font-medium text-gray-100 w-20 sm:w-24 md:w-28 lg:w-32 text-center">
          {timeLeft.hours}
        </div>
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono text-gray-500 mx-1 sm:mx-2 md:mx-3 lg:mx-4 transform -translate-y-1 sm:-translate-y-1.5 md:-translate-y-2">
          :
        </div>
        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-mono font-medium text-gray-100 w-20 sm:w-24 md:w-28 lg:w-32 text-center">
          {timeLeft.minutes}
        </div>
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono text-gray-500 mx-1 sm:mx-2 md:mx-3 lg:mx-4 transform -translate-y-1 sm:-translate-y-1.5 md:-translate-y-2">
          :
        </div>
        <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-mono font-medium text-gray-100 w-20 sm:w-24 md:w-28 lg:w-32 text-center">
          {timeLeft.seconds}
        </div>
      </main>

      <footer className="absolute bottom-6 sm:bottom-8 md:bottom-10 text-center px-4">
        <p className="text-xs sm:text-sm text-gray-600 hover:text-gray-500 transition-colors duration-300 font-serif italic">
          Memento Mori
        </p>
      </footer>
    </div>
  );
};

export default App;
