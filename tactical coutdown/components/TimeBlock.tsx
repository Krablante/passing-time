
import React from 'react';

interface TimeBlockProps {
  value: string;
  label: string;
  textColorClass: string;
  shadowColorClass: string;
}

const TimeBlock: React.FC<TimeBlockProps> = ({ value, label, textColorClass, shadowColorClass }) => {
  return (
    <div className="flex flex-col items-center mx-1.5 sm:mx-2 md:mx-3 text-center w-20 sm:w-28 md:w-32 font-sans">
      <span 
        className={`text-5xl sm:text-7xl md:text-8xl font-black ${textColorClass} tracking-tighter filter drop-shadow-lg ${shadowColorClass} transition-all duration-300 ease-in-out`}
      >
        {value}
      </span>
      <span className="mt-1 sm:mt-2 text-xs sm:text-sm uppercase tracking-wider text-slate-400/90">
        {label}
      </span>
    </div>
  );
};

export default TimeBlock;