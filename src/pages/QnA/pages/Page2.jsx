import React from 'react';
import Radio from '#parts/Radio.jsx';
import TimeZoneSelector from '#parts/TimeZoneSelector.jsx';
import AvailableHours from '#parts/AvailableHours.jsx';
import SalarySelector from '#parts/SalarySelector.jsx';

const Page2 = ({
  answers, handleChange, handleNumber, goPrev, goNext,
}) => {
  return (

    <div className="QnA-page">

      {/* <label>
        All of our jobs are remote. Do you have access to (e.g. a computer, internet connection, a telephone and a private space) to work remotely?
      </label>

      <div className="radios" onChange={handleChange}>
        <Radio value={true} label="Yes" name="isWorkRemotely"/>

        <Radio value={false} label="No" name="isWorkRemotely"/>
      </div> */}

      <label>
        Are you open to Remote, Flexible, or On-site jobs?
      </label>

      <div className="radios" onChange={handleChange}>
        <Radio value="Remote" label="Remote" name="availability"/>
        <Radio value="Flexible" label="Flexible" name="availability"/>
        <Radio value="On-site" label="On-site" name="availability"/>
      </div>

      <label>
        Are you seeking work on a full-time, or part-time basis?
      </label>
      <div className="radios" onChange={handleChange}>
        <Radio value="Full Time" label="Full Time" name="jobType"/>

        <Radio value="Part Time" label="Part Time" name="jobType"/>
      </div>

      <label>
        On what date are you available to start working? (Select a date on the calendar)
      </label>
      <div>
        <input
          name="soonestJoinDate"
          onChange={handleChange}
          type="date"
        />
      </div>

      {
        answers.jobType === 'Part Time'
          ? <div>
          <label>What are your hours of availability?</label>
          <AvailableHours handleChange={handleChange} />


          <label>How many hours are you available to work weekly?</label>
          <input
            defaultValue={answers.howLongWorkingRemotely}
            name="howLongWorkingRemotely"
            type="number"
            onChange={handleChange}
            />

          <label>
            What are your hourly pay expectations?
          </label>

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
        <label>
          What are your annual salary expectations?
        </label>

        <div className="salary-input">
          <SalarySelector handleChange={handleChange} name="salary"/>
        </div>
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