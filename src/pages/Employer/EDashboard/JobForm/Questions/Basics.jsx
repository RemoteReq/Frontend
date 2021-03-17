import React from 'react';
import Select from 'react-select';
import CauseSelector from '#parts/CauseSelector.jsx';
import JobTitleSelector from '#parts/JobTitleSelector.jsx';

import jobTitles from '#assets/inputs/new/new-job-titles.js';
import causes from '#assets/inputs/new/new-causes.js';

const Basics = ({
  job, goNext, handleChange, handleSelect,
}) => {
  console.log(job);

  return (
    <div className="job-form">

      <label>Job Title</label>
      <Select
        name="title"
        value={jobTitles.filter((title) => { return title.value === job.title; })}
        onChange={handleSelect}
        options={jobTitles}
      />
      {/* <JobTitleSelector name="jobTitle" handleChange={handleChange}/> */}

      <label>Company Name</label>
      <input
        value={job.companyName}
        placeholder="ex: RemoteReq"
        name="companyName"
        onChange={handleChange}
      />

      <label>What cause does your company work on?</label>
      <Select
        name="cause"
        value={causes.filter((cause) => { return cause.value === job.cause; })}
        onChange={handleSelect}
        options={causes}
      />

      <label>Job Details</label>
      <div className="textarea-div">
        <textarea
          placeholder="ex: RemoteReq is looking for a new UX Developer to lead in creating a responsive mobile app for RemoteReq.com!"
          className="aboutMe"
          name="jobDetails"
          value={job.jobDetails}
          onChange={handleChange}
          />
      </div>


      <div className="job-form-nav-buttons">
        <div></div>

        <button
          className="button-next"
          onClick={goNext}
        >Next &raquo;
        </button>
      </div>
    </div>
  );
};

export default Basics;