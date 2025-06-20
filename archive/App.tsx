import React from 'react';
import { HeaderDate } from './components/HeaderDate';
import { ClockDisplay } from './components/ClockDisplay';
import { useReverseClock } from './hooks/useReverseClock';

const App: React.FC = () => {
  const { currentTimeText, handProgress, displayDateText } = useReverseClock();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-ancient-ink p-4 selection:bg-eldritch-bronze selection:text-primordial-parchment">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl p-6 md:p-8 bg-abyssal-stone shadow-heavy-oppressive rounded-sm border-4 border-eldritch-bronze">
        <HeaderDate dateText={displayDateText} />
        <ClockDisplay
          currentTimeText={currentTimeText}
          handProgress={handProgress}
        />
      </div>
    </div>
  );
};

export default App;