import React from 'react';
import SkillBank from '#parts/SkillBank.jsx';
import EducationSelector from '#parts/EducationSelector.jsx';

const Page3 = ({
  answers, handleChange, goPrev, goNext, addToList, removeFromList,
}) => {
  return (
    <div className="QnA-page">

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

      <label>
        Provide a sample of your past relevant work (e.g. link to an online portfolio / past work sample / link to a past client)</label>
      <input
        defaultValue={answers.sampleProjectLink}
        name="sampleProjectLink"
        onChange={handleChange}
      />

      <label>
        How many years of relevant work experience do you have for the kind of work you're seeking?
      </label>
      <input
        defaultValue={answers.totalExperience}
        type="number"
        name="totalExperience"
        onChange={handleChange}
      />


      <label>Select all relevant skills you have to the kind of work you are seeking</label>
      <SkillBank skillsList={answers.desireKeySkills} addToList={addToList} removeFromList={removeFromList}/>

      <EducationSelector
        handleChange={handleChange}
        label="What is the highest level of education you have successfully completed?"
        name="highestEducationLevel"
      />

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