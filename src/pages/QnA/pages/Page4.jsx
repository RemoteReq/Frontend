import React from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import Radio from '#parts/Radio.jsx';
import TimeZoneSelector from '#parts/TimeZoneSelector.jsx';
import locations from '#assets/inputs/new/new-locations.js';

const Page4 = ({
  answers, handleChange, handleSelect, submitAnswers, goPrev,
}) => {
  return (
    <div className="QnA-page">

      <label>
        Are you eligible to work in the United States?
      </label>
      <div className="radios" onChange={handleChange}>
        <Radio value={true} label="Yes" name="eligibleToWorkInUS" onChange={handleChange} checked={answers.eligibleToWorkInUS === true}/>

        <Radio value={false} label="No" name="eligibleToWorkInUS" onChange={handleChange} checked={answers.eligibleToWorkInUS === false}/>
      </div>


      {
        answers.eligibleToWorkInUS
          ? <div>
        <label>
          Are you able to communicate (orally and in writing) in English at a native level?
        </label>
        <div className="radios" onChange={handleChange}>
          <Radio value={true} label="Yes" name="fluentInEnglish" onChange={handleChange} checked={answers.fluentInEnglish === true}/>

          <Radio value={false} label="No" name="fluentInEnglish" onChange={handleChange} checked={answers.fluentInEnglish === false}/>
        </div>

        <label>State</label>
        <Select
          name="location"
          value={locations.filter((location) => { return location.value === answers.location; })}
          onChange={handleSelect}
          options={locations}
          />

        <label>
          Zip Code
        </label>
        <input defaultValue={answers.zipcode} type="number" min="0" max="99999" onChange={handleChange} name="zipcode"/>
      </div>

          : <div></div>
        }

      <TimeZoneSelector handleChange={handleChange} label="What time zone are you working from?"/>

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