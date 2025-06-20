
import React from 'react';

interface HeaderDateProps {
  dateText: string;
}

export const HeaderDate: React.FC<HeaderDateProps> = ({ dateText }) => {
  return (
    <div className="text-center mb-6 md:mb-8">
      <h1 className="text-2xl md:text-3xl font-bold text-vintage-gold tracking-wider">
        {dateText || "Загрузка..."}
      </h1>
    </div>
  );
};
