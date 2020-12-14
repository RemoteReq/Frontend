import React from 'react';
import { Link } from 'react-router-dom';
import SkillBank from '#parts/SkillBank.jsx';
import EducationSelector from '#parts/EducationSelector.jsx';

const Page3 = ({
  handleChange, increaseProgress, decreaseProgress, myKeySkills, addToList, removeFromList,
}) => {
  return (
    <div className="QnA-page">
      <br/>
      <br/>

      <p>
        Briefly describe a project you have worked on that is relevant to your desired work interests.
      </p>

      <div className="textarea-div">
        <textarea
          name="projectDescription"
          onChange={handleChange}
        />
      </div>

      <br/>

      <p>
        Provide a sample of your past relevant work (e.g. link to an online portfolio / past work sample / link to a past client)</p>
      <input
        name="sampleProjectLink"
        onChange={handleChange}
      />

      <br/>

      <p>
        How many years of relevant work experience do you have for the kind of work you're seeking?
      </p>
      <input type="number" name="totalExperience" onChange={handleChange}/>

      <br/>
      <br/>

      <label>Select all relevant skills you have to the kind of work you are seeking</label>
      <SkillBank myKeySkills={myKeySkills} removeFromList={removeFromList} addToList={addToList}/>

      <EducationSelector
        handleChange={handleChange}
        label="What is the highest level of education you have successfully completed?"
        name="highestEducationLevel"
      />

      <div className="form-nav">
        <Link to="/QnA/2">
          <button
            className="button-prev"
            onClick={decreaseProgress}
          >&laquo; Prev</button>
        </Link>

        <Link to="/QnA/4">
          <button
            className="button-next"
            onClick={increaseProgress}
          >Next &raquo;</button>
        </Link>
      </div>


    </div>
  );
};

export default Page3;