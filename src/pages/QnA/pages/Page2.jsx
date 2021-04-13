import React from 'react';
import Radio from '#parts/Radio.jsx';
import TimeZoneSelector from '#parts/TimeZoneSelector.jsx';
import AvailableHours from '#parts/AvailableHours.jsx';
import SalarySelector from '#parts/SalarySelector.jsx';
import Checkbox from '#parts/Checkbox.jsx';

const Page2 = ({
  answers, handleChange, handleCheckBox, goPrev, goNext,
}) => {
  return (

    <div className="job-form">

      <div className="question">
        <p>
          Are you open to Remote, Flexible, or On-site jobs?
        </p>

        <div className="checkboxes">
          <Checkbox
            type="checkbox"
            value="Remote"
            name="availability"
            checked={answers.availability.includes('Remote') || false}
            onChange={handleCheckBox}
            />

          <Checkbox
            type="checkbox"
            value="Flexible"
            name="availability"
            checked={answers.availability.includes('Flexible') || false}
            onChange={handleCheckBox}
            />

          <Checkbox
            type="checkbox"
            value="On-site"
            name="availability"
            checked={answers.availability.includes('On-site') || false}
            onChange={handleCheckBox}
            />
        </div>
      </div>

      <div className="question">
        <p>
          Are you seeking work on a full-time, or part-time basis?
        </p>
        <div className="checkboxes">
          <Checkbox
            type="checkbox"
            value="Full Time"
            name="jobType"
            checked={answers.jobType.includes('Full Time') || false}
            onChange={handleCheckBox}
            />
          <Checkbox
            type="checkbox"
            value="Part Time"
            name="jobType"
            checked={answers.jobType.includes('Part Time') || false}
            onChange={handleCheckBox}
            />
        </div>
      </div>

      <div className="question">
        <p>
          On what date are you available to start working? (Select a date on the calendar)
        </p>
        <div>
          <input
            name="soonestJoinDate"
            onChange={handleChange}
            type="date"
            />
        </div>
      </div>

      {
        answers.jobType.includes('Part Time')
          ? <div className="question">

          <h3>Part Time Information</h3>

          <p>How many hours are you available to work weekly?</p>
          <input
            defaultValue={answers.howLongWorkingRemotely}
            name="howLongWorkingRemotely"
            type="number"
            onChange={handleChange}
            />

          <p>
            What are your hourly pay expectations?
          </p>

          <div className="wage-input">
            <input
              defaultValue={answers.hourlyWage}
              name="hourlyWage"
              type="number"
              onChange={handleChange}
              />
          </div>
        </div>
          : <div>
          </div>
        }

        {

        answers.jobType.includes('Full Time')
          ? <div className="question">
        <h3>Full Time Information</h3>

        <p>
          What are your annual salary expectations?
        </p>

        <div className="salary-input">
          <SalarySelector handleChange={handleChange} name="salary"/>
        </div>
      </div>

          : <div>
        </div>
      }

      <div className="job-form-nav-buttons">
        <button
          className="button-prev"
          onClick={goPrev}
        >&laquo; Prev</button>

        <button
          className="button-next"
          onClick={goNext}
        >Next &raquo;</button>
      </div>
    </div>
  );
};

export default Page2;