import React from 'react';
import MultiCauseSelector from '#parts/MultiCauseSelector.jsx';
import MultiTitleSelector from '#parts/MultiTitleSelector.jsx';
import Radio from '#parts/Radio.jsx';

const Page1 = ({
  answers, handleChange, addToList, removeFromList, goNext,
}) => {
  return (
    <div className="job-form">

      <label>
        List jobs you're interested in applying to
      </label>
      <MultiTitleSelector
        titlesList={answers.title}
        handleChange={handleChange}
        addToList={addToList}
        removeFromList={removeFromList}
      />

      <label>
        Which of the following causes would you like to work on? (Select up to 3)
      </label>

      <MultiCauseSelector
        causesList={answers.causes}
        handleChange={handleChange}
        addToList={addToList}
        removeFromList={removeFromList}
      />

      <label>
        Why do you want to work on these causes? (Optional 250 words or less)
      </label>

      <div className="textarea-div">
        <textarea
          value={answers.reasonForCause}
          name="reasonForCause"
          onChange={handleChange}/>
      </div>

      <div className="job-form-nav-buttons">
        <div></div>
        <button
          className="button-next"
          onClick={goNext}
        >Next &raquo;</button>
      </div>
    </div>
  );
};

export default Page1;