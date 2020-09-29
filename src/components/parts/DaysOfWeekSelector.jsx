import React from 'react';
import { daysOfWeek } from '#assets/inputs/inputs';

const DaysOfWeekSelector = ({ addToList, name }) => {
  return (
    <div className="day-of-week-select">
      {
        daysOfWeek.map((day, key) => {
          return (
            <div className="input-pill" key={key}>
            <label>{day}</label>
            <input
              type="checkbox"
              name={name || 'availableWorkDays'}
              onChange={addToList}
              value={day}
            />
          </div>
          );
        })
      }
    </div>
  );
};

export default DaysOfWeekSelector;