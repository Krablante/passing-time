
import React from 'react';

interface ClockHandProps {
  progress: number; // 0 to 1
}

export const ClockHand: React.FC<ClockHandProps> = ({ progress }) => {
  // Ensure progress is clamped between 0 and 1 to prevent visual overflow
  const clampedProgress = Math.max(0, Math.min(1, progress));
  
  // Calculate left offset. Hand width is 2px, pointer tip is 8px wide.
  // We want the center of the pointer tip to align with the progress.
  // The hand element itself will be positioned by its left edge.
  const handLeftOffset = `calc(${clampedProgress * 100}% - 4px)`; // 4px is half of pointer width

  return (
    <div
      className="absolute top-[calc(50%-1px)] h-0.5 w-full z-10" // Centered vertically on the clock face's track area
      style={{
        left: '0%', // Hand container spans full width
      }}
      role="timer" 
      aria-valuenow={Math.round(progress * 100)} 
      aria-valuemin={0} 
      aria-valuemax={100}
    >
      {/* The visible hand element, including the ornate pointer */}
      <div 
        className="absolute top-1/2 -translate-y-1/2 h-4" // Height of the pointer part
        style={{ left: handLeftOffset }}
      >
        {/* Ornate Pointer Tip (triangle or similar shape) */}
        <div className="w-2 h-4 bg-vintage-gold transform origin-center"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)', // Simple triangle
          }}
        />
        {/* Optional: A thin line extending from the pointer if desired */}
        {/* <div className="absolute top-1/2 -translate-y-1/2 right-full w-2 h-0.5 bg-vintage-gold" /> */}
      </div>
    </div>
  );
};
