import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Radio from '#parts/Radio.jsx';
import TimeZoneSelector from '#parts/TimeZoneSelector.jsx';
import locations from '#assets/inputs/new/new-locations.js';

const Page4 = ({
  answers, handleChange, handleBoolean, handleSelect, submitAnswers, goPrev,
}) => {
  return (
    <div className="job-form">

      <div className="question">
        <label>
          Are you eligible to work in the United States?
        </label>
        <div className="radios" onChange={handleBoolean}>
          <Radio value={true} label="Yes" name="eligibleToWorkInUS" checked={answers.eligibleToWorkInUS === true}/>

          <Radio value={false} label="No" name="eligibleToWorkInUS" checked={answers.eligibleToWorkInUS === false}/>
        </div>
      </div>


      {
        answers.eligibleToWorkInUS
          ? <div>

          <div className="question">
            <label>
              Are you able to communicate (orally and in writing) in English at a native level?
            </label>
            <div className="radios" onChange={handleBoolean}>
              <Radio value={true} label="Yes" name="fluentInEnglish" checked={answers.fluentInEnglish === true}/>

              <Radio value={false} label="No" name="fluentInEnglish" checked={answers.fluentInEnglish === false}/>
            </div>
          </div>

        <div className="question">
          <label>State</label>
          <Select
            name="location"
            value={locations.filter((location) => { return location.value === answers.location; })}
            onChange={handleSelect}
            options={locations}
            />
        </div>

        <div className="question">
          <label>
            Zip Code
          </label>
          <input defaultValue={answers.zipcode} type="number" min="0" max="99999" onChange={handleChange} name="zipcode"/>
        </div>
      </div>

          : <div></div>
        }

      <div className="question">
        <TimeZoneSelector value={answers.timeZone} handleChange={handleChange} label="What time zone are you working from?"/>
      </div>

      <div className="job-form-nav-buttons">
        <button
          className="button-prev"
          onClick={goPrev}
        >&laquo; Prev</button>

        <button className="button-next" onClick={submitAnswers}>Submit</button>
      </div>
    </div>
  );
};

export default Page4;