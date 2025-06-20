import React from 'react';

interface ClockHandProps {
  progress: number; // 0 to 1
  onToggleDisplay: () => void;
  isDisplayed: boolean;
}

export const ClockHand: React.FC<ClockHandProps> = ({ progress, onToggleDisplay, isDisplayed }) => {
  const clampedProgress = Math.max(0, Math.min(1, progress));
  const handLeftOffset = `calc(${clampedProgress * 100}% - 5px)`; // 5px is half of pointer base width (10px)

  return (
    <div
      className="absolute top-[calc(50%-1px)] h-0.5 w-full z-10" // Visual track guide, not interactive
      style={{
        left: '0%', 
      }}
      // The role="timer" and ARIA value attributes were for the overall reverse clock progress,
      // not directly for this interactive button. We'll add specific ARIA for the button.
    >
      <button
        type="button"
        onClick={onToggleDisplay}
        className="absolute top-1/2 -translate-y-1/2 h-5 p-0 bg-transparent border-none cursor-pointer group focus:outline-none focus-visible:ring-2 focus-visible:ring-eldritch-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-abyssal-stone rounded-sm"
        style={{ left: handLeftOffset, width: '10px' }} // Set width explicitly for the button
        aria-pressed={isDisplayed}
        aria-label={isDisplayed ? "Скрыть текущее системное время" : "Показать текущее системное время"}
      >
        {/* Sharper, more primitive Pointer Tip */}
        <div 
          className="w-[10px] h-5 bg-eldritch-bronze transform origin-center group-hover:bg-opacity-80 transition-colors"
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
          aria-hidden="true" // Decorative, button has label
        />
      </button>
    </div>
  );
};