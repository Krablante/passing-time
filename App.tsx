
import React, { useState, useEffect, useCallback } from 'react';
import { TimeLeft } from './types';
import CountdownDisplay from './components/CountdownDisplay';
import TimeOrb from './components/TimeOrb';

interface TimeValues {
  timeLeft: TimeLeft;
  percentageRemaining: number;
}

const App: React.FC = () => {
  const calculateTimeValues = useCallback((): TimeValues => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const difference = tomorrow.getTime() - now.getTime(); // Milliseconds until midnight
    const totalMillisecondsInDay = 24 * 60 * 60 * 1000;

    let timeLeftData: TimeLeft = { hours: '00', minutes: '00', seconds: '00' };
    let percentageRemaining = 0;

    if (difference > 0) {
      const hoursInDay = Math.floor((difference / (1000 * 60 * 60)) % 24);
      timeLeftData = {
        hours: String(hoursInDay).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
      };
      percentageRemaining = Math.max(0, Math.min(100, (difference / totalMillisecondsInDay) * 100));
    }
    return { timeLeft: timeLeftData, percentageRemaining };
  }, []);

  const [timeValues, setTimeValues] = useState<TimeValues>(calculateTimeValues());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeValues(calculateTimeValues());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeValues]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 via-zinc-900 to-black flex flex-col items-center justify-center p-4 text-slate-300 selection:bg-amber-500 selection:text-black antialiased font-sans">
      <main className="flex flex-col items-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-amber-400 mb-6 sm:mb-8 tracking-wider uppercase filter drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
          ОПЕРАЦИЯ: 'ЗАРЯ'
        </h1>
        
        <div className="shadow-2xl shadow-black/60 rounded-full">
          <TimeOrb percentage={timeValues.percentageRemaining} />
        </div>

        <div 
          className="bg-slate-700/60 backdrop-blur-sm 
                     border-2 border-t-slate-500/70 border-l-slate-500/70 
                     border-b-black/90 border-r-black/90
                     shadow-2xl shadow-black/70 rounded-lg 
                     p-6 sm:p-8 md:p-10 mt-8 sm:mt-10"
          role="region"
          aria-labelledby="countdown-title" // Should have a visible title with this id if used
        >
           <span id="countdown-title" className="sr-only">Время до завершения операции</span>
          <CountdownDisplay timeLeft={timeValues.timeLeft} />
        </div>
        <footer className="mt-12 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-wider">
            Каждая секунда на счету. Следующий рубеж: ПОЛНОЧЬ.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default App;