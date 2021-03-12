import React from 'react';
import AvailableHours from '#parts/AvailableHours.jsx';

const Availability = ({ goNext, goPrev }) => {
  return (
    <div className="job-form">

      <label>Soonest Join Date for Job</label>
        <br/>
        <input
          name="soonestJoinDate"
          // onChange={handleChange}
          type="date"
        />

        <label>Available work hours</label>
        <AvailableHours />

        <label>Hourly Wage</label>
        <input
          type="number"
          name="hourlyWage"
          // onChange={handleNumber}
        />

        <label>Number of Hours Desired per Week</label>
        <input
          type="number"
          name="numberOfHours"
          // onChange={handleNumber}
        />

      <div className="job-form-nav-buttons">
      <button
          className="button-prev"
          onClick={goPrev}
        >&laquo; Prev
        </button>

        <button
          className="button-next"
          onClick={goNext}
        >Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default Availability;