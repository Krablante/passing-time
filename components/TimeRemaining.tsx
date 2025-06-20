
import React from 'react';

interface TimeRemainingProps {
  timeText: string;
  handProgress: number; // 0 to 1, to help position if needed
}

export const TimeRemaining: React.FC<TimeRemainingProps> = ({ timeText, handProgress }) => {
  return (
    <div className="w-full text-center mt-6 md:mt-8" 
         aria-live="polite" 
         aria-atomic="true">
      <p className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-eldritch-bronze tabular-nums tracking-wider">
        {timeText}
      </p>
    </div>
  );
};
