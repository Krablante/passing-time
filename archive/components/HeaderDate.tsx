
import React from 'react';

interface HeaderDateProps {
  dateText: string;
}

export const HeaderDate: React.FC<HeaderDateProps> = ({ dateText }) => {
  return (
    <div className="text-center mb-6 md:mb-8">
      <h1 className="text-2xl md:text-3xl font-display font-bold text-eldritch-bronze tracking-wider">
        {dateText || "Загрузка..."}
      </h1>
    </div>
  );
};
