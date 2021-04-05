import React from 'react';
import MultiCauseSelector from '#parts/MultiCauseSelector.jsx';
import MultiTitleSelector from '#parts/MultiTitleSelector.jsx';
import SelectList from '#parts/SelectList.jsx';
import Radio from '#parts/Radio.jsx';

const Page1 = ({
  answers, handleChange, addToList, removeFromList, goNext,
}) => {
  return (
    <div className="job-form">

      <div className="question">
        <label>
          List jobs you're interested in applying to
        </label>
        <SelectList
          data={answers.title}
          name="title"
          addToList={addToList}
          removeFromList={removeFromList}
          label="Job Titles:"
        />
      </div>

      <div className="question">
        <label>
          Which of the following causes would you like to work on?
        </label>
        <SelectList
          data={answers.causes}
          name="cause"
          addToList={addToList}
          removeFromList={removeFromList}
          label="Causes:"
        />
      </div>

      <div className="question">
        <label>
          Why do you want to work on these causes? (Optional)
        </label>
        <div className="textarea-div">
          <textarea
            value={answers.reasonForCause}
            name="reasonForCause"
            onChange={handleChange}/>
        </div>
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