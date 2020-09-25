import React from 'react';

const DaySelector = ({ addToList }) => {
  return (
    <div className="day-of-week-select">
        <div className="input-pill">
          <label>Sunday</label>
          <input
            type="checkbox"
            name="availableWorkDays"
            onChange={addToList}
            value="Sunday"
          />
        </div>

        <div className="input-pill">
          <label>Monday</label>
          <input
            type="checkbox"
            name="availableWorkDays"
            onChange={addToList}
            value="Monday"
          />
        </div>

        <div className="input-pill">
          <label>Tuesday</label>
          <input
            type="checkbox"
            name="availableWorkDays"
            onChange={addToList}
            value="Tuesday"
          />
        </div>

        <div className="input-pill">
          <label>Wednesday</label>
          <input
            type="checkbox"
            name="availableWorkDays"
            onChange={addToList}
            value="Wednesday"
          />
        </div>

        <div className="input-pill">
          <label>Thursday</label>
          <input
            type="checkbox"
            name="availableWorkDays"
            onChange={addToList}
            value="Thursday"
          />
        </div>

        <div className="input-pill">
          <label>Friday</label>
          <input
            type="checkbox"
            name="availableWorkDays"
            onChange={addToList}
            value="Friday"
          />
        </div>

        <div className="input-pill">
          <label>Saturday</label>
          <input
            type="checkbox"
            name="availableWorkDays"
            onChange={addToList}
            value="Saturday"
          />
        </div>
      </div>
  );
};

export default DaySelector;