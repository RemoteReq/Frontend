import React from 'react';
import EducationSelector from '#parts/EducationSelector.jsx';
import SkillBank from '#parts/SkillBank.jsx';

const Experience = ({
  job, goNext, goPrev, handleChange, addToList, removeFromList,
}) => {
  return (
    <div className="job-form">

      <div className="range">
        <label>Minimum Years of Experience Required</label>
        <input
          value={job.minExperience}
          type="number"
          name="minExperience"
          onChange={handleChange}
        />
      </div>

      <EducationSelector
        value={job.requiredEducationLevel}
        name="requiredEducationLevel"
        onChange={handleChange}
      />

      <SkillBank skillsList={job.keySkills} addToList={addToList} removeFromList={removeFromList}/>

      <div className="job-form-nav-buttons">
        <button
          className="button-prev"
          onClick={goPrev}
        >&laquo; Prev
        </button>

        <button
          className="button-next"
          onClick={goNext}
        >Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default Experience;