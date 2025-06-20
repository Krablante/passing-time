
import React from 'react';
import { HeaderDate } from './components/HeaderDate';
import { ClockDisplay } from './components/ClockDisplay';
import { useReverseClock } from './hooks/useReverseClock';

const App: React.FC = () => {
  const { currentTimeText, handProgress, displayDateText } = useReverseClock();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-vintage-paper text-vintage-text p-4 selection:bg-vintage-gold selection:text-vintage-paper">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl p-6 md:p-8 bg-vintage-dark-brown shadow-2xl rounded-lg border-4 border-vintage-gold">
        <HeaderDate dateText={displayDateText} />
        <ClockDisplay
          currentTimeText={currentTimeText}
          handProgress={handProgress}
        />
      </div>
      <footer className="mt-8 text-center text-sm text-vintage-brown-medium">
        <p>&copy; {new Date().getFullYear()} Обратные часы. Винтажный стиль.</p>
      </footer>
    </div>
  );
};

export default App;
