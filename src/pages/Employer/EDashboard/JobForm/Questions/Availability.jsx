import React from 'react';
import AvailableHours from '#parts/AvailableHours.jsx';
import SalarySelector from '#parts/SalarySelector.jsx';

const Availability = ({
  job, goNext, goPrev, handleChange,
}) => {
  return (
    <div className="job-form">

      <div className="question">
        <p>Soonest Join Date</p>
        <input
          value={job.soonestJoinDate}
          name="soonestJoinDate"
          onChange={handleChange}
          type="date"
          />
      </div>

        {
          job.jobType === 'Part Time'
            ? <div className="question">
            <p>Hourly Wage</p>
            <input
            value={job.hourlyWage}
            type="number"
            name="hourlyWage"
            onChange={handleChange}
            />
          </div>

            : <SalarySelector
              value={job.salary}
              onChange={handleChange}
            />
        }

        {

          job.jobType === 'Part Time'
            ? <div className="question">
            <p>Number of Hours Desired per Week</p>
            <input
            value={job.numberOfHours}
            type="number"
            name="numberOfHours"
            onChange={handleChange}
            />
          </div>

            : <div>

          </div>
      }

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