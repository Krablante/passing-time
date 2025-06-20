import React, { useState, useEffect } from 'react';
import { ClockFace } from './ClockFace';
import { ClockHand } from './ClockHand';
import { TimeRemaining } from './TimeRemaining';
import { SystemTimeDisplay } from './SystemTimeDisplay'; // New import

interface ClockDisplayProps {
  currentTimeText: string;
  handProgress: number; // 0 to 1
}

const formatSystemTime = (date: Date): string => {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  return `${hours} : ${minutes} : ${seconds}`;
};

export const ClockDisplay: React.FC<ClockDisplayProps> = ({ currentTimeText, handProgress }) => {
  const [isSystemTimeVisible, setIsSystemTimeVisible] = useState(false);
  const [currentSystemTime, setCurrentSystemTime] = useState('');

  useEffect(() => {
    let intervalId: number | undefined;

    if (isSystemTimeVisible) {
      const updateSystemTime = () => {
        setCurrentSystemTime(formatSystemTime(new Date()));
      };
      updateSystemTime(); // Initial update
      intervalId = window.setInterval(updateSystemTime, 1000); // Update every second
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isSystemTimeVisible]);

  const toggleSystemTimeVisibility = () => {
    setIsSystemTimeVisible(prev => !prev);
  };

  return (
    <div className="relative w-full flex flex-col items-center p-4 rounded-sm bg-abyssal-stone/60 border border-eldritch-bronze/50 shadow-inner-deep">
      <ClockFace />
      <ClockHand 
        progress={handProgress} 
        onToggleDisplay={toggleSystemTimeVisibility}
        isDisplayed={isSystemTimeVisible}
      />
      {isSystemTimeVisible && <SystemTimeDisplay currentTime={currentSystemTime} />}
      <TimeRemaining timeText={currentTimeText} handProgress={handProgress} />
    </div>
  );
};