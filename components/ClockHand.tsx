
import React from 'react';

interface ClockHandProps {
  progress: number; // 0 to 1
}

export const ClockHand: React.FC<ClockHandProps> = ({ progress }) => {
  const clampedProgress = Math.max(0, Math.min(1, progress));
  
  // Hand width (pointer base) is 10px for the new shape.
  // We want the center of the pointer to align with progress.
  const handLeftOffset = `calc(${clampedProgress * 100}% - 5px)`; // 5px is half of pointer base width

  return (
    <div
      className="absolute top-[calc(50%-1px)] h-0.5 w-full z-10"
      style={{
        left: '0%', 
      }}
      role="timer" 
      aria-valuenow={Math.round(progress * 100)} 
      aria-valuemin={0} 
      aria-valuemax={100}
    >
      <div 
        className="absolute top-1/2 -translate-y-1/2 h-5" // Height of the pointer part (20px)
        style={{ left: handLeftOffset }}
      >
        {/* Sharper, more primitive Pointer Tip */}
        <div className="w-[10px] h-5 bg-eldritch-bronze transform origin-center" // Pointer base 10px, height 20px
          style={{
            // Sharper, slightly irregular polygon: a more aggressive point
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', 
            // Alternative more talon-like: 'polygon(50% 0%, 0% 70%, 20% 100%, 80% 100%, 100% 70%)'
          }}
        />
      </div>
    </div>
  );
};
