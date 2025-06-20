
import React from 'react';

const TimeSeparator: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-0 sm:px-1 self-center font-sans">
      <span className="text-4xl sm:text-5xl md:text-6xl text-slate-400/90 filter drop-shadow-md shadow-black/50 leading-none mt-[-0.2em] sm:mt-[-0.25em] md:mt-[-0.3em]">
        :
      </span>
      <span className="mt-1 sm:mt-2 text-xs sm:text-sm invisible select-none">00</span>
    </div>
  );
};

export default TimeSeparator;