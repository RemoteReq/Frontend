import React from 'react';
import { Link } from 'react-router-dom';
import SkillBank from '#parts/SkillBank.jsx';
import { locations } from '#assets/inputs/inputs';

const Page4 = ({
  handleChange, keySkills, myKeySkills, addToList, increaseProgress, decreaseProgress,
}) => {
  return (
    <div className="QnA-page">
      <p>
        How many years of relevant work experience do you have for the kind of work you're seeking?
      </p>
      <input type="number" name="totalExperience" onChange={handleChange}/>

      <p>
        Select all relevant skills you have to the kind of work you are seeking
      </p>

      <SkillBank keySkills={keySkills} myKeySkills={myKeySkills} addToList={addToList}/>

      <p>
        Zip Code
      </p>
      <input type="number" min="0" max="99999" onChange={handleChange} name="address"/>

      <p>State</p>
      <div className="select">

      <select name="location" onChange={handleChange}>
        <option>-----</option>
        {
          locations.map((location, key) => {
            return (
              <option key={key} value={location}>{location}</option>
            );
          })
          }
      </select>
      </div>


      <div className="form-nav">
        <Link to="/QnA/3">
          <button
            className="button-prev"
            onClick={decreaseProgress}
          >&laquo; Prev</button>
        </Link>

        <Link to="/QnA/5">
          <button className="button-next" onClick={increaseProgress}>Next &raquo;</button>
        </Link>
      </div>
    </div>
  );
};

export default Page4;