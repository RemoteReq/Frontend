import React from 'react';
import SkillBank from '#parts/SkillBank.jsx';
import { degrees } from '#assets/inputs/inputs.js';
import EducationSelector from '#parts/EducationSelector.jsx';

import SelectList from '#parts/SelectList.jsx';

const Page3 = ({
  answers, handleChange, goPrev, goNext, addToList, removeFromList,
}) => {
  return (
    <div className="job-form">

      <div className="question">
        <label>
          Briefly describe a project you have worked on that is relevant to your desired work interests.
        </label>

        <div className="textarea-div">
          <textarea
            defaultValue={answers.projectDescription}
            name="projectDescription"
            onChange={handleChange}
            />
        </div>
      </div>

      <div className="question">
        <label>
          Provide a sample of your past relevant work (e.g. link to an online portfolio / past work sample / link to a past client)</label>
        <input
          defaultValue={answers.sampleProjectLink}
          name="sampleProjectLink"
          onChange={handleChange}
          />
      </div>

      <div className="question">
        <label>
          How many years of relevant work experience do you have for the kind of work you're seeking?
        </label>
        <input
          defaultValue={answers.totalExperience}
          type="number"
          name="totalExperience"
          onChange={handleChange}
          />
      </div>

      <div className="question">
        <label>Select all relevant skills you have to the kind of work you are seeking</label>
        {/* <SkillBank name="desireKeySkills" skillsList={answers.desireKeySkills} addToList={addToList} removeFromList={removeFromList}/> */}
        <SelectList
          name="desireKeySkills"
          addToList={addToList}
          removeFromList={removeFromList}
          data={answers.desireKeySkills}
          label="Your skills: "
          />
      </div>

      <div className="question">
        <EducationSelector
          onChange={handleChange}
          value={answers.highestEducationLevel}
          label="What is the highest level of education you have successfully completed?"
          name="highestEducationLevel"
          />
      </div>

      <div className="job-form-nav-buttons">
        <button
          className="button-prev"
          onClick={goPrev}
        >&laquo; Prev</button>

        <button
          className="button-next"
          onClick={goNext}
        >Next &raquo;</button>
      </div>


    </div>
  );
};

export default Page3;