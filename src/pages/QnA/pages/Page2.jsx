import React from 'react';
import Radio from '#parts/Radio.jsx';
import TimeZoneSelector from '#parts/TimeZoneSelector.jsx';
import AvailableHours from '#parts/AvailableHours.jsx';
import SalarySelector from '#parts/SalarySelector.jsx';
import Checkbox from '#parts/Checkbox.jsx';

const Page2 = ({
  answers, handleChange, handleCheckBox, goPrev, goNext,
}) => {
  console.log(handleCheckBox);

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

      <div className="checkboxes">
        <Checkbox
          type="checkbox"
          value="Remote"
          name="availability"
          checked={answers.availability.includes('Remote')}
          onChange={handleCheckBox}
        />

        <Checkbox
          type="checkbox"
          value="Flexible"
          name="availability"
          checked={answers.availability.includes('Flexible')}
          onChange={handleCheckBox}
        />

        <Checkbox
          type="checkbox"
          value="On-site"
          name="availability"
          checked={answers.availability.includes('On-site')}
          onChange={handleCheckBox}
        />
      </div>

      {/* <div className="radios" onChange={handleChange}>
        <Radio value="Remote" label="Remote" name="availability" checked={answers.availability === 'Remote'} onChange={handleChange}/>
        <Radio value="Flexible" label="Flexible" name="availability" checked={answers.availability === 'Flexible'} onChange={handleChange}/>
        <Radio value="On-site" label="On-site" name="availability" checked={answers.availability === 'On-site'} onChange={handleChange}/>
      </div> */}

      <label>
        Are you seeking work on a full-time, or part-time basis?
      </label>

      <div className="checkboxes">
        <Checkbox
          type="checkbox"
          value="Full Time"
          name="jobType"
          checked={answers.jobType.includes('Full Time')}
          onChange={handleCheckBox}
        />
        <Checkbox
          type="checkbox"
          value="Part Time"
          name="jobType"
          checked={answers.jobType.includes('Part Time')}
          onChange={handleCheckBox}
        />
      </div>

      {/* <div className="radios" onChange={handleChange}>
        <Radio value="Full Time" label="Full Time" name="jobType" checked={answers.jobType === 'Full Time'} onChange={handleChange}/>

        <Radio value="Part Time" label="Part Time" name="jobType" checked={answers.jobType === 'Part Time'} onChange={handleChange}/>
      </div> */}

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
        answers.jobType.includes('Part Time')
          ? <div>
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
          </div>
        }

        {

        answers.jobType.includes('Full Time')
          ? <div>
        <label>
          What are your annual salary expectations?
        </label>

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