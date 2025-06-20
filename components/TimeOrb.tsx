
import React from 'react';

interface TimeOrbProps {
  percentage: number; // 0-100
}

const TimeOrb: React.FC<TimeOrbProps> = ({ percentage }) => {
  const baseRadius = 45; // Base radius for calculations
  const strokeWidthBase = 4; // Main stroke for the outer ring
  const progressBarStrokeWidth = 6; // Stroke for the progress arc
  
  const viewBoxSize = (baseRadius + Math.max(strokeWidthBase, progressBarStrokeWidth)) * 2;
  const center = viewBoxSize / 2;
  const radius = baseRadius; // Use baseRadius for arc calculations

  // Calculate arc path
  const angle = (percentage / 100) * 359.99; // 359.99 to avoid full circle closing issues with arcs
  const radians = (angle - 90) * Math.PI / 180; // Start from top
  const x = center + radius * Math.cos(radians);
  const y = center + radius * Math.sin(radians);
  const largeArcFlag = angle <= 180 ? "0" : "1";
  const d = `M ${center} ${center - radius} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x} ${y}`;

  const crosshairSize = radius * 0.4;

  return (
    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48" role="img" aria-label={`Тактический хронометр: ${percentage.toFixed(0)}% до завершения операции`}>
      <svg viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} width="100%" height="100%">
        <defs>
          <radialGradient id="metalBaseGradient" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
            <stop offset="0%" style={{ stopColor: '#4a5568' }} /> {/* slate-600 */}
            <stop offset="60%" style={{ stopColor: '#2d3748' }} /> {/* slate-700 */}
            <stop offset="100%" style={{ stopColor: '#1a202c' }} /> {/* slate-800 */}
          </radialGradient>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#F59E0B' }} /> {/* amber-500 */}
            <stop offset="100%" style={{ stopColor: '#D97706' }} /> {/* amber-600 */}
          </linearGradient>
           <filter id="slightGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Base Metallic Disc */}
        <circle 
          cx={center} 
          cy={center} 
          r={radius + strokeWidthBase/2} 
          fill="url(#metalBaseGradient)" 
          stroke="#000000" 
          strokeWidth="1"
        />
        
        {/* Outer Beveled Ring / Border */}
        <circle 
          cx={center} 
          cy={center} 
          r={radius} 
          fill="none" 
          stroke="#718096" /* slate-500 */
          strokeWidth={strokeWidthBase} 
        />
        <circle 
          cx={center} 
          cy={center} 
          r={radius - strokeWidthBase/2 + 0.5} 
          fill="none" 
          stroke="rgba(0,0,0,0.4)" 
          strokeWidth="1" /* Inner shadow for bevel */
        />
         <circle 
          cx={center} 
          cy={center} 
          r={radius + strokeWidthBase/2 - 0.5} 
          fill="none" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="1" /* Outer highlight for bevel */
        />


        {/* Background for the progress arc (dimmed track) */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke="#334155" /* slate-700 */
          strokeWidth={progressBarStrokeWidth + 1} /* Slightly thicker for track */
          strokeOpacity="0.5"
        />

        {/* Progress Arc */}
        {percentage > 0 && (
          <path 
            d={d}
            fill="none" 
            stroke="url(#progressGradient)"
            strokeWidth={progressBarStrokeWidth} 
            strokeLinecap="round"
            style={{ transition: 'stroke-dasharray 0.3s ease-out, stroke-dashoffset 0.3s ease-out' }}
            filter="url(#slightGlow)"
          />
        )}

        {/* Central Crosshair */}
        <line 
          x1={center - crosshairSize} y1={center} 
          x2={center + crosshairSize} y2={center} 
          stroke="#A0AEC0" /* slate-400 */ 
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        <line 
          x1={center} y1={center - crosshairSize} 
          x2={center} y2={center + crosshairSize} 
          stroke="#A0AEC0" /* slate-400 */
          strokeWidth="1.5" 
          strokeLinecap="round"
        />
        <circle 
            cx={center} 
            cy={center} 
            r={crosshairSize * 0.25} 
            fill="none" 
            stroke="#A0AEC0" /* slate-400 */
            strokeWidth="1"
        />

        {/* Optional: Tick marks around the bezel */}
        {Array.from({ length: 12 }).map((_, i) => {
          const angleTick = i * 30; // Every 30 degrees
          const radTick = (angleTick - 90) * Math.PI / 180;
          const rOuter = radius + strokeWidthBase / 2 + 1;
          const rInner = radius + strokeWidthBase / 2 - (i % 3 === 0 ? 3 : 2); // Longer ticks every 90 deg
          return (
            <line
              key={`tick-${i}`}
              x1={center + rInner * Math.cos(radTick)}
              y1={center + rInner * Math.sin(radTick)}
              x2={center + rOuter * Math.cos(radTick)}
              y2={center + rOuter * Math.sin(radTick)}
              stroke="#4A5568" /* slate-600 */
              strokeWidth="1.5"
            />
          );
        })}
      </svg>
    </div>
  );
};

export default TimeOrb;