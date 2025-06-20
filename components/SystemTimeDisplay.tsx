import React from 'react';

interface SystemTimeDisplayProps {
  currentTime: string;
}

export const SystemTimeDisplay: React.FC<SystemTimeDisplayProps> = ({ currentTime }) => {
  if (!currentTime) {
    return null; // Don't render if time is not yet set (e.g., initial render before interval)
  }

  return (
    <div 
      className="w-full max-w-xs mx-auto text-center my-3 md:my-4 p-2.5 bg-shadow-gray rounded-sm border border-eldritch-bronze/70 shadow-inner-deep"
      aria-live="polite" 
      aria-atomic="true"
      role="status" // Indicates this content updates
    >
      <p className="text-xl md:text-2xl font-sans font-bold text-primordial-parchment tabular-nums tracking-wider">
        {currentTime}
      </p>
      <p className="text-xs text-ancient-ink/80 font-sans tracking-wide mt-0.5">Текущее время</p>
    </div>
  );
};