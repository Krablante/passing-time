
import { useState, useEffect } from 'react';
import { ReverseClockState } from '../types';
import { DAYS_RU_SHORT, CLOCK_START_HOUR, TOTAL_ACTIVE_HOURS } from '../constants';

const formatTwoDigits = (num: number): string => String(num).padStart(2, '0');

const formatDateDisplay = (date: Date): string => {
  const dayOfMonth = formatTwoDigits(date.getDate());
  const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const dayOfWeek = DAYS_RU_SHORT[date.getDay()];
  return `${dayOfMonth}/${formatTwoDigits(daysInMonth)} ${dayOfWeek}`;
};

export const useReverseClock = (): ReverseClockState => {
  const [timeState, setTimeState] = useState<ReverseClockState>({
    currentTimeText: '00 : 00',
    handProgress: 0,
    displayDateText: '',
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      
      const today8AM = new Date(now);
      today8AM.setHours(CLOCK_START_HOUR, 0, 0, 0);

      const tomorrowMidnight = new Date(now);
      tomorrowMidnight.setDate(now.getDate() + 1);
      tomorrowMidnight.setHours(0, 0, 0, 0);

      let newCurrentTimeText = '00 : 00';
      let newHandProgress = 0;
      let dateForDisplay = new Date(now);

      if (now.getHours() < CLOCK_START_HOUR) { // Between 00:00 and 07:59
        newCurrentTimeText = '00 : 00';
        newHandProgress = 0; // Hand at the beginning
        const yesterday = new Date(now);
        yesterday.setDate(now.getDate() - 1);
        dateForDisplay = yesterday;
      } else { // 08:00 or later
        const msUntilTomorrowMidnight = tomorrowMidnight.getTime() - now.getTime();
        
        if (msUntilTomorrowMidnight > 0) {
          const hoursLeft = Math.floor(msUntilTomorrowMidnight / (1000 * 60 * 60));
          const minutesLeft = Math.floor((msUntilTomorrowMidnight % (1000 * 60 * 60)) / (1000 * 60));
          newCurrentTimeText = `${formatTwoDigits(hoursLeft)} : ${formatTwoDigits(minutesLeft)}`;

          const totalActiveMs = TOTAL_ACTIVE_HOURS * 60 * 60 * 1000;
          const msElapsedSince8AM = now.getTime() - today8AM.getTime();
          
          if (msElapsedSince8AM >= 0) { // Ensure we are past 8 AM
             newHandProgress = msElapsedSince8AM / totalActiveMs;
          } else { // Should not happen if now.getHours() >= CLOCK_START_HOUR, but as a fallback
             newHandProgress = 0;
          }
          newHandProgress = Math.max(0, Math.min(1, newHandProgress)); // Clamp value
        } else {
           // This case means it's exactly midnight or slightly past, but before next 8AM check
           // Covered by the first 'if' block on the next tick usually
           newCurrentTimeText = '00 : 00';
           newHandProgress = 1; // End of the cycle
        }
        dateForDisplay = now;
      }
      
      setTimeState({
        currentTimeText: newCurrentTimeText,
        handProgress: newHandProgress,
        displayDateText: formatDateDisplay(dateForDisplay),
      });
    };

    calculateTime(); // Initial calculation
    const intervalId = setInterval(calculateTime, 60 * 1000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return timeState;
};
