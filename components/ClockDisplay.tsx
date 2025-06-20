
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
    <div className="relative w-full flex flex-col items-center p-4 rounded-sm bg-abyssal-stone/60 border border-eldritch-bronze/50 shadow-inner-deep">
      <ClockFace />
      <ClockHand progress={handProgress} />
      {/* Position TimeRemaining relative to the hand or clock face */}
      <div 
        className="absolute top-full left-0 w-full mt-1.5" 
        style={{ 
          transform: `translateX(${handProgress * 100}%)`, 
        }}
      >
      </div>
      <TimeRemaining timeText={currentTimeText} handProgress={handProgress} />
    </div>
  );
};
