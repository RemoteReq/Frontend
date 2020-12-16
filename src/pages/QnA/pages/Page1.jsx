import React from 'react';
import { Link } from 'react-router-dom';
import MultiCauseSelector from '#parts/MultiCauseSelector.jsx';
import Radio from '#parts/Radio.jsx';

const Page1 = ({
  handleChange, increaseProgress, answered,
}) => {
  return (
    <div className="QnA-page">
      <br/>
      <br/>

      <p>
        Are you eligible to work in the United States?
      </p>
      <div className="radios">
        <Radio value={true} label="Yes" name="eligibleToWorkInUS" handler={handleChange}/>

        <Radio value={false} label="No" name="eligibleToWorkInUS" handler={handleChange}/>
      </div>

      <br/>

      <p>
        Which of the following causes would you like to work on? (Select up to 3)
      </p>

      <MultiCauseSelector handleChange={handleChange} />
      {/* <select
        name="cause1"
        onChange={handleChange}>
        <option>-----</option>
        {
          causes.map((cause, key) => {
            return (
            <option key={key}>{cause}</option>
            );
          })
        }
      </select>

      <select
        name="cause2"
        onChange={handleChange}>
      <option>-----</option>
      {
        causes.map((cause, key) => {
          return (
          <option key={key}>{cause}</option>
          );
        })
      }
      </select>

      <select
        name="cause3"
        onChange={handleChange}>
      <option>-----</option>
        {
          causes.map((cause, key) => {
            return (
            <option key={key}>{cause}</option>
            );
          })
        }
      </select> */}

      <br/>
      <br/>
      <br/>

      <p>
        Why do you want to work on these causes? (Optional 250 words or less)
      </p>

      <div className="textarea-div">
        <textarea
          name="jobChangeReason"
          onChange={handleChange}/>
      </div>

      <br/>
      <br/>

      <p>
        Are you seeking work on a full-time, or part-time basis?
      </p>
      <div className="radios">
        <Radio value="Full Time" label="Full Time" name="jobType" handler={handleChange}/>

        <Radio value="Part Time" label="Part Time" name="jobType" handler={handleChange}/>

        {/* <Radio value="Either" label="Either" name="jobType" handler={handleChange}/> */}
      </div>

      <br/>
      <br/>

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

      <br/>
      <br/>

      <p>
        Are you able to communicate (orally and in writing) in English at a native level?
      </p>
      <div className="radios">
        <Radio value={true} label="Yes" name="fluentInEnglish" handler={handleChange}/>

        <Radio value={false} label="No" name="fluentInEnglish" handler={handleChange}/>
      </div>

      <div className="form-nav">
        <div></div>
        <Link to="/QnA/2">
          <button
            className="button-next"
            onClick={increaseProgress}
          >Next &raquo;</button>
        </Link>
      </div>
    </div>
  );
};

export default Page1;