import React from 'react';
import { Link } from 'react-router-dom';
import Radio from '#parts/Radio.jsx';
import TimeZoneSelector from '#parts/TimeZoneSelector.jsx';
import AvailableHours from '#parts/AvailableHours.jsx';
import SalarySelector from '#parts/SalarySelector.jsx';

const Page2 = ({
  handleChange, handleNumber, timeZones, increaseProgress, decreaseProgress,
}) => {
  return (

    <div className="QnA-page">
      <br/>
      <br/>

      <p>
        All of our jobs are remote. Do you have access to (e.g. a computer, internet connection, a telephone and a private space) to work remotely?
      </p>

      <div className="radios">
        <Radio value={true} label="Yes" name="isWorkRemotely" handler={handleChange}/>

        <Radio value={false} label="No" name="isWorkRemotely" handler={handleChange}/>
      </div>

      <TimeZoneSelector handleChange={handleChange} label="What time zone are you working from?"/>

      <br/>
      <br/>

      <p>What are your hours of availability?</p>
      <AvailableHours handleChange={handleChange} />

      <br/>
      <br/>

      <p>
        (For part-time only) What are your hourly pay expectations?
      </p>

      <div className="wage-input">
        <p>$</p>
        <input
          name="hourlyWage"
          type="number"
          onChange={handleNumber}
        />
        <p>/hr</p>
      </div>

      <br/>
      <br/>

      <p>
        (For full-time only) what are your annual salary expectations?
      </p>

      <div className="salary-input">
        <p>$</p>
        <SalarySelector handleChange={handleChange} name="salary"/>
        <p>/year</p>
      </div>

      <div className="form-nav">
        <Link to="/QnA/1">
          <button
            className="button-prev"
            onClick={decreaseProgress}
          >&laquo; Prev</button>
        </Link>

        <Link to="/QnA/3">
          <button
            className="button-next"
            onClick={increaseProgress}
          >Next &raquo;</button>
        </Link>
      </div>
    </div>
  );
};

export default Page2;