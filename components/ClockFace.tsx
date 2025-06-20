
import React from 'react';

export const ClockFace: React.FC = () => {
  return (
    <div className="w-full h-6 md:h-8 bg-abyssal-stone rounded-sm relative shadow-inner-deep" 
         aria-label="Циферблат обратных часов">
      {/* Track for the hand to move on visually */}
      <div className="absolute inset-0 flex items-center px-0.5">
        {[...Array(24)].map((_, i) => (
          <div
            key={`division-${i}`}
            className="flex-1 h-[70%] border-r border-shadow-gray/70 last:border-r-0"
            role="presentation"
          >
            {/* Optional: Add numbers or more prominent ticks.
                For every 6th hour, make the tick more prominent.
            */}
            {(i + 1) % 6 === 0 && (
                 <div className="w-full h-full border-r-2 border-shadow-gray" />
            )}
          </div>
        ))}
      </div>
       {/* Simplified start and end marks */}
       <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full w-1.5 h-[120%] bg-eldritch-bronze rounded-sm" />
       <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-1.5 h-[120%] bg-eldritch-bronze rounded-sm" />
    </div>
  );
};
