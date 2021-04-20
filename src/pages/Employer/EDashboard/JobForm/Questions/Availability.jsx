import React from 'react';
// import AvailableHours from '#parts/AvailableHours.jsx';
import { Wage, Salary } from '#components/Elements/Inputs/Money.jsx';
import SalarySelector from '#parts/SalarySelector.jsx';

const Availability = ({
  job, goNext, goPrev, handleChange, handleMoney,
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
          <p>Number of Work Hours per Week</p>
          <div className="input-per-unit">
            <input
            value={job.numberOfHours}
            type="number"
            min="0"
            name="numberOfHours"
            onChange={handleChange}
            />

            <p>hours per week</p>
          </div>
        </div>

          : <div>

        </div>
        }

        {
          job.jobType === 'Part Time'
            ? <div className="question">
            <p>Hourly Wage</p>
            <Wage
              defaultValue={job.hourlyWage}
              onChange={handleMoney}
            />

            {/* <input
            value={job.hourlyWage}
            type="number"
            name="hourlyWage"
            onChange={handleChange}
            /> */}
          </div>

            : <div className="question">
            <p>Salary</p>
            <Salary
              defaultValue={job.salary}
              onChange={handleMoney}
              />
            </div>

            // <SalarySelector
            //   value={job.salary}
            //   onChange={handleChange}
            // />
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