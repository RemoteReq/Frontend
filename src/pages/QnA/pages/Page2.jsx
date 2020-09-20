import React from 'react';
import { Link } from 'react-router-dom';

const Page2 = ({
  handleChange, typingWork, salaries, degrees, timeZones, increaseProgress, decreaseProgress,
}) => {
  return (

    <div className="QnA-page">
      <p>
        What is your highest level of education?
      </p>
      <select
        onChange={handleChange}
        name="education"
        >
        <option>-----</option>
        {
          degrees.map((degree, key) => {
            return (
              <option value={`${degree}`} key={key}>{degree}</option>
            );
          })
        }
      </select>

      <p>
        (For part-time only) Which days of the week are you available to work? (Select all that apply)
      </p>

      <div className="day-of-week-select">
        <div className="input-pill">
          <label>Sunday</label>
          <input type="checkbox" value="Sunday" />
        </div>

        <div className="input-pill">
          <label>Monday</label>
          <input type="checkbox" value="Monday" />
        </div>

        <div className="input-pill">
          <label>Tuesday</label>
          <input type="checkbox" value="Tuesday" />
        </div>

        <div className="input-pill">
          <label>Wednesday</label>
          <input type="checkbox" value="Wednesday" />
        </div>

        <div className="input-pill">
          <label>Thursday</label>
          <input type="checkbox" value="Thursday" />
        </div>

        <div className="input-pill">
          <label>Friday</label>
          <input type="checkbox" value="Friday" />
        </div>

        <div className="input-pill">
          <label>Saturday</label>
          <input type="checkbox" value="Saturday" />
        </div>
      </div>

      <p>
        (For part-time only) What time of day are you available to work?
      </p>

      <div>
        <select
        name="selectTimeZone"
          onChange={handleChange}
        >
          <option>-----</option>
          {
            timeZones.map((timeZone, key) => {
              return (
              <option value={timeZone.value} key={key}>{timeZone.zone}</option>
              );
            })
          }
        </select>
      </div>

      <div className="time-select">
        <input
          name="availableWorkTime"
          type="time"
        />
      </div>

      <p>
        (For part-time only) What are your hourly pay expectations?
      </p>

      <div className="wage-input">
        <p>$</p>
        <input
          name="hourlyPayExpectation"
          type="number"
          onChange={handleChange}
        />
        <p>/hr</p>
      </div>

      <p>
        (For full-time only) what are your annual salary expectations?
      </p>
      <div className="salary-input">
        <p>$</p>
        <select
          name="desireCTC"
          onChange={handleChange}
        >
          {salaries.map((salary, i) => {
            return (
              <option key={i}>
                {salary}
              </option>
            );
          })}
        </select>
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