
import React from 'react';
import { ClockFace } from './ClockFace';
import { ClockHand } from './ClockHand';
import { TimeRemaining } from './TimeRemaining';

interface ClockDisplayProps {
  currentTimeText: string;
  handProgress: number; // 0 to 1
}

export const ClockDisplay: React.FC<ClockDisplayProps> = ({ currentTimeText, handProgress }) => {
  return (
    <div className="relative w-full flex flex-col items-center p-4 rounded bg-vintage-paper/10 border border-vintage-gold/30">
      <ClockFace />
      <ClockHand progress={handProgress} />
      {/* Position TimeRemaining relative to the hand or clock face */}
      <div 
        className="absolute top-full left-0 w-full mt-1.5" // Position below the clock face globally
        style={{ 
          transform: `translateX(${handProgress * 100}%)`, 
          // Adjust this translateX if TimeRemaining should stay centered under the hand tip only
          // For now, it will be under the whole clock face, and the text itself will be centered via its own styles
        }}
      >
         {/* The TimeRemaining text will be absolutely positioned relative to ClockHand's tip using its own logic */}
      </div>
      <TimeRemaining timeText={currentTimeText} handProgress={handProgress} />
    </div>
  );
};
