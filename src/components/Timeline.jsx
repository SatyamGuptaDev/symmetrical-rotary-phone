import React, { useState } from 'react';
import './TimeLine.css';

const TimeLine = () => {
  const [duration, setDuration] = useState('Day');

  const handleDurationChange = (selectedDuration) => {
    setDuration(selectedDuration);
  };

  return (
    <div className='timeline'>
      <p
        className={duration === 'Day' ? 'selected' : ''}
        onClick={() => handleDurationChange('Day')}
      >
        Day
      </p>
      <p
        className={duration === 'Week' ? 'selected' : ''}
        onClick={() => handleDurationChange('Week')}
      >
        Week
      </p>
      <p
        className={duration === 'Month' ? 'selected' : ''}
        onClick={() => handleDurationChange('Month')}
      >
        Month
      </p>
      <p
        className={duration === 'Year' ? 'selected' : ''}
        onClick={() => handleDurationChange('Year')}
      >
        Year
      </p>
    </div>
  );
};

export default TimeLine;