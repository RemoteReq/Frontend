import React from 'react';
import { Link } from 'react-router-dom';
import Radio from '#parts/Radio.jsx';

const Page1 = ({
  handleChange, causes, increaseProgress, addToList,
}) => {
  return (
    <div className="QnA-page">
      <p>
        Are you eligible to work in the United States?
      </p>
      <div className="radios">
        <Radio value={true} label="yes" name="eligibleToWorkInUS" handler={handleChange}/>

        <Radio value={false} label="no" name="eligibleToWorkInUS" handler={handleChange}/>
      </div>

      <p>
        Which of the following causes would you like to work on? (Select up to 3)
      </p>
      <select
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
      </select>

      <p>
        Why do you want to work on these causes? (Optional 250 words or less)
      </p>

      <div className="textarea-div">
        <textarea
          name="whyWork"
          onChange={handleChange}/>
      </div>


      <p>
        Are you seeking full-time work, part-time, or either?
      </p>
      <div className="radios">
        <Radio value="full-time" label="full-time" name="typingWork" handler={handleChange}/>

        <Radio value="part-time" label="part-time" name="typingWork" handler={handleChange}/>

        <Radio value="either" label="either" name="typingWork" handler={handleChange}/>
      </div>

      <p>
        On what date are you available to start working? (Select a date on the calendar)
      </p>
      <div>
        <input
          name="availableJoiningDate"
          onChange={handleChange}
          type="date"
        />
      </div>

      <p>
        Are you able to communicate (orally and in writing) in English at a native level?
      </p>
      <div className="radios">
        <Radio value={true} label="yes" name="fluentInEnglish" handler={handleChange}/>

        <Radio value={false} label="no" name="fluentInEnglish" handler={handleChange}/>
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