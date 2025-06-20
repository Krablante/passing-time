
import React from 'react';

interface TimeRemainingProps {
  timeText: string;
  handProgress: number; // 0 to 1, to help position if needed
}

export const TimeRemaining: React.FC<TimeRemainingProps> = ({ timeText, handProgress }) => {
  // Position the text dynamically based on handProgress
  // Ensure the text box doesn't go off-screen
  const textContainerWidth = 100; // Approximate width of the text container in px
  const progressPercent = handProgress * 100;
  
  // Calculate left offset for the text container to center it under the hand tip
  // The container will be positioned relative to the ClockDisplay
  const leftPosition = `calc(${progressPercent}% - ${textContainerWidth / 2}px)`;

  // Clamp the left position to prevent overflow
  // This needs to be done considering the parent width.
  // For simplicity, we'll let Tailwind's text-center handle centering within a full-width container below the clock.

  return (
    <div className="w-full text-center mt-4 md:mt-6" 
         aria-live="polite" 
         aria-atomic="true">
      <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-vintage-gold tabular-nums tracking-wider">
        {timeText}
      </p>
    </div>
  );
};
