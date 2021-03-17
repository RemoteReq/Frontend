import React from 'react';
import AvailableHours from '#parts/AvailableHours.jsx';
import SalarySelector from '#parts/SalarySelector.jsx';

const Availability = ({
  job, goNext, goPrev, handleChange,
}) => {
  return (
    <div className="job-form">

      <label>Soonest Join Date</label>
        <br/>
        <input
          value={job.soonestJoinDate}
          name="soonestJoinDate"
          onChange={handleChange}
          type="date"
        />

        {
          job.jobType === 'Part Time'
            ? <div>
            <label>Available work hours</label>
            <AvailableHours handleChange={handleChange}/>
          </div>
            : <div></div>
        }

        {
          job.jobType === 'Part Time'
            ? <div>
            <label>Hourly Wage</label>
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
            ? <div>
            <label>Number of Hours Desired per Week</label>
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