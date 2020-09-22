import React from 'react';
import { Link } from 'react-router-dom';
import Radio from '#parts/Radio.jsx';

const Page5 = ({
  decreaseProgress, submitAnswers, handleChange,
}) => {
  return (
    <div className="QnA-page">
      <p>
        Describe your Professional Goals
      </p>

      <div className="textarea-div">
        <textarea
          name="descProfessionalGoal"
          onChange={handleChange}/>
      </div>

      <p>Provide us your LinkedInURL</p>
      <input
        name="linkedInURL"
        onChange={handleChange}
      />

      <p>Provide us your personalURL</p>
      <input
        name="personalURL"
        onChange={handleChange}
      />

      <p>Provide us your mobile number</p>
      <input
        name="mobileNum"
        onChange={handleChange}
      />

      <p>Provide us your DoB</p>
      <input
        type="date"
        name="dob"
        onChange={handleChange}
      />

      <p>Provide us your gender</p>
      <div className="radios">
        <Radio value="male" label="male" name="gender" handler={handleChange}/>

        <Radio value="female" label="female" name="gender" handler={handleChange}/>

        <Radio value="neither" label="preffer not to say / inapplicable" name="gender" handler={handleChange}/>
      </div>

      <p>Provide us your race</p>
      <select name="race" onChange={handleChange}>
        <option >-----</option>
        <option value="a race">race</option>
        <option value="another race"> another race</option>
      </select>

      <p>Are you a veteran?</p>
      <div className="radios">
        <Radio value={true} label="yes" name="veteranStatus" handler={handleChange}/>

        <Radio value={false} label="no" name="veteranStatus" handler={handleChange}/>

        <Radio value="neither" label="inapplicable" name="veteranStatus" handler={handleChange}/>
      </div>

      <p>What is your desired Industry Type</p>
      <select name="desireIndustryType" onChange={handleChange}>
        <option >-----</option>
        <option value="Industry1">Industry 1</option>
        <option value="Industry2">Industry 2</option>
        <option value="Industry3">Industry 3</option>
        <option value="Industry4">Industry 4</option>
      </select>

      <div className="form-nav">
        <Link to="/QnA/3">
          <button
            className="button-prev"
            onClick={decreaseProgress}
          >&laquo; Prev</button>
        </Link>


          <button className="button-next" onClick={submitAnswers}>Submit</button>

      </div>
    </div>
  );
};

export default Page5;