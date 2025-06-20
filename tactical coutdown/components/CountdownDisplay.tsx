
import React from 'react';
import { TimeLeft } from '../types';
import TimeBlock from './TimeBlock';
import TimeSeparator from './TimeSeparator';

interface CountdownDisplayProps {
  timeLeft: TimeLeft;
}

const CountdownDisplay: React.FC<CountdownDisplayProps> = ({ timeLeft }) => {
  return (
    <div className="flex flex-row items-center justify-center" role="timer">
      <TimeBlock 
        value={timeLeft.hours} 
        label="ЧАСОВ" 
        textColorClass="text-amber-400" 
        shadowColorClass="shadow-black/50" 
      />
      <TimeSeparator />
      <TimeBlock 
        value={timeLeft.minutes} 
        label="МИНУТ" 
        textColorClass="text-orange-400" 
        shadowColorClass="shadow-black/50" 
      />
      <TimeSeparator />
      <TimeBlock 
        value={timeLeft.seconds} 
        label="СЕКУНД" 
        textColorClass="text-yellow-400" 
        shadowColorClass="shadow-black/50" 
      />
    </div>
  );
};

export default CountdownDisplay;