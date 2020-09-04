import React from 'react';
import { Link } from 'react-router-dom';

const FilterQnA = ({ handleChange }) => {
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
      <select>
        <option>-----</option>
        <option>Educational Equity (K-12)</option>
        <option>Immigrant Rights</option>
        <option>Voting Rights</option>
        <option>Youth Extracurriculars (sports, band, etc.)</option>
        <option>Environmental Rights</option>
        <option>Animal Rights</option>
        <option>US Military Veterans</option>
        <option>LGBTQ rights </option>
        <option>Health and Medical Care</option>
        <option>Women’s Rights </option>
        <option>Community Development </option>
        <option>Criminal Justice Reform</option>
        <option>Food Insecurity</option>
        <option>Water and Sanitation</option>
        <option>Arts and Culture </option>
        <option>Religion</option>
      </select>
      <select>
        <option>-----</option>
        <option>Educational Equity (K-12)</option>
        <option>Immigrant Rights</option>
        <option>Voting Rights</option>
        <option>Youth Extracurriculars (sports, band, etc.)</option>
        <option>Environmental Rights</option>
        <option>Animal Rights</option>
        <option>US Military Veterans</option>
        <option>LGBTQ rights </option>
        <option>Health and Medical Care</option>
        <option>Women’s Rights </option>
        <option>Community Development </option>
        <option>Criminal Justice Reform</option>
        <option>Food Insecurity</option>
        <option>Water and Sanitation</option>
        <option>Arts and Culture </option>
        <option>Religion</option>
      </select>
      <select>
        <option>-----</option>
        <option>Educational Equity (K-12)</option>
        <option>Immigrant Rights</option>
        <option>Voting Rights</option>
        <option>Youth Extracurriculars (sports, band, etc.)</option>
        <option>Environmental Rights</option>
        <option>Animal Rights</option>
        <option>US Military Veterans</option>
        <option>LGBTQ rights </option>
        <option>Health and Medical Care</option>
        <option>Women’s Rights </option>
        <option>Community Development </option>
        <option>Criminal Justice Reform</option>
        <option>Food Insecurity</option>
        <option>Water and Sanitation</option>
        <option>Arts and Culture </option>
        <option>Religion</option>
      </select>

      <p>
        Why do you want to work on these causes? (Optional 250 words or less)
      </p>

      <div className="textarea-div">
        <textarea/>
      </div>


      <p>
        Are you seeking full-time work, part-time, or either?
      </p>      <div className="radios">
        <Radio value="full-time" label="full-time" name="typingWork" handler={handleChange}/>

        <Radio value="part-time" label="part-time" name="typingWork" handler={handleChange}/>

        <Radio value="either" label="either" name="typingWork" handler={handleChange}/>
      </div>

      <p>
        On what date are you available to start working? (Select a date on the calendar)
      </p>
      <div>
        <input
          type="date"
        />
      </div>

      <p>
        Are you able to communicate (orraly and in writing) in English at a native level?
      </p>
      <div className="radios">
        <Radio value={true} label="yes" name="fluentInEnglish" handler={handleChange}/>

        <Radio value={false} label="no" name="fluentInEnglish" handler={handleChange}/>
      </div>

      <div className="form-nav">
        <div></div>
        <Link to="/QnA/causes">
          <button className="button-next">Next &raquo;</button>
        </Link>
      </div>
    </div>
  );
};

export default FilterQnA;