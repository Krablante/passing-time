
import React from 'react';

export const ClockFace: React.FC = () => {
  return (
    <div className="w-full h-6 md:h-8 bg-vintage-dark-brown rounded-sm relative shadow-inner" 
         aria-label="Циферблат обратных часов">
      {/* Track for the hand to move on visually */}
      <div className="absolute inset-0 flex items-center px-0.5">
        {[...Array(24)].map((_, i) => (
          <div
            key={`division-${i}`}
            className="flex-1 h-[60%] border-r border-vintage-brown-medium/50 last:border-r-0"
            role="presentation"
          >
            {/* Optional: Add numbers or more prominent ticks for certain hours.
                For simplicity, keeping it as subtle divisions.
                Example for numbers every 6th division:
            {(i + 1) % 6 === 0 && (
              <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-xs text-vintage-gold/70">
                {formatTwoDigits(i+1)}
              </span>
            )}
            */}
          </div>
        ))}
      </div>
       {/* Ornate start and end marks */}
       <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[calc(100%-2px)] w-2 h-full bg-vintage-gold rounded-l-sm" />
       <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%-2px)] w-2 h-full bg-vintage-gold rounded-r-sm" />
    </div>
  );
};
