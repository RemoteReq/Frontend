import React from 'react';
import { Link } from 'react-router-dom';
import SkillBank from '#parts/SkillBank.jsx';
import AvailableHours from '#parts/AvailableHours.jsx';
import CauseSelector from '#parts/CauseSelector.jsx';
import Preloader from '#components/svgs/Preloader.jsx';

const JobFormPart1 = ({
  jobData, handleChange, addJob, addToList, removeFromList, handleFileUpload, handleNumber, companyLogo, fields,
  enablePreloader, preloaderState,
}) => {
  console.log(fields);

  return (
    <form className="job-form">
      <h4>Add Job</h4>

        <div>
          <label>Job Title</label>
          <input
            placeholder="ex: UX Developer"
            name="title"
            // onChange={handleChange}
          />
          <p className={''}>This is a required field.</p>

          <label>Company Name</label>
          <input
            placeholder="ex: RemoteReq"
            name="companyName"
            // onChange={handleChange}
          />
          <p className={''}>This is a required field.</p>

          <label>What cause does your company work on?</label>
          <CauseSelector name="cause" handleChange={handleChange}/>
          <p className={''}>This is a required field.</p>

          <label>Job Details</label>
          <div className="textarea-div">
            <textarea
              placeholder="ex: RemoteReq is looking for a new UX Developer to lead in creating a responsive mobile app for RemoteReq.com!"
              className="aboutMe"
              name="jobDetails"
              // onChange={handleChange}
              />
          </div>
          <p className={''}>This is a required field.</p>

          <label>Key Skills</label>
          {/* <SkillBank addToList={addToList} removeFromList={removeFromList} myKeySkills={jobData.keySkills}/> */}

          <label>Soonest Join Date for Job</label>
          <br/>
          <input
            name="soonestJoinDate"
            // onChange={handleChange}
            type="date"
          />
          <p className={''}>This is a required field.</p>
          <br/>

          <label>Available work hours</label>
          <AvailableHours />

          {/* <p className="small-paragraph">{jobData.jobDescription ? jobData.jobDescription.name : ''}</p> */}
          <div className="upload-button">
            <button className="button-2">Upload a job description</button>
            <input
              type="file"
              name="jobDescription"
              accept="application/pdf,application/vnd.ms-excel"
              onChange={(e) => { return handleFileUpload(e); }}
              />
          </div>
        </div>

      </form>
  );
};

export default JobFormPart1;