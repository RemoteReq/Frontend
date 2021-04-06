import React from 'react';
import Divider from '#parts/Divider.jsx';
import EducationSelector from '#parts/EducationSelector.jsx';
import SelectList from '#parts/SelectList.jsx';

const Experience = ({
  job, goNext, goPrev, handleChange, handleFile, addToList, removeFromList,
}) => {
  return (
    <div className="job-form">

      <div className="question">
        <p>Minimum Years of Experience Required</p>
        <input
          value={job.minExperience}
          type="number"
          name="minExperience"
          onChange={handleChange}
        />
      </div>

      <div className="question">
        <p>Minimum Education Level Required</p>
        <EducationSelector
          value={job.requiredEducationLevel}
          name="requiredEducationLevel"
          onChange={handleChange}
        />
      </div>

      <div className="question">
        <p>List Required Skills for this Job</p>
        <SelectList
          name="keySkills"
          data={job.keySkills}
          addToList={addToList}
          removeFromList={removeFromList}
        />
      </div>


      <div className="question">
        <p className="small-paragraph">{job.jobDescription ? job.jobDescription.name : ''}</p>
        <div className="upload-button">
          <button className="button-1 small-button">Upload a job description</button>
          <input
            type="file"
            name="jobDescription"
            accept="application/pdf,application/vnd.ms-excel"
            onChange={(e) => { return handleFile(e); }}
            />
        </div>
      </div>

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