import React from 'react';
import EducationSelector from '#parts/EducationSelector.jsx';

const Experience = ({ goNext, goPrev }) => {
  return (
    <div className="job-form">

      <div className="range">
        <label>Minimum Years of Experience Required</label>
        <input
          type="number"
          name="minExperience"
          // onChange={handleNumber}
        />
      </div>

      <EducationSelector name="requiredEducationLevel"/>

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