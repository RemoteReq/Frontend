import React from 'react';
import { Link } from 'react-router-dom';
import { locations } from '#assets/inputs/inputs';
import SkillBank from '#parts/SkillBank.jsx';
import AvailableHours from '#parts/AvailableHours.jsx';
import TimeZoneSelector from '#parts/TimeZoneSelector.jsx';
import EducationSelector from '#parts/EducationSelector.jsx';
import CauseSelector from '#parts/CauseSelector.jsx';
import ENav from '../../ENav/ENav.jsx';

const PartTimeForm = ({
  jobData, handleChange, addJob, addToList, handleFileUpload, handleNumber,
}) => {
  return (
    <div className="add-job">
      <ENav />

      <form className="job-form">
        <h4>Add Job</h4>

      {/* <h4>Transaction ID: {transactionId}</h4> */}

        <div className="grid-1fr-1fr spaced">

          <div>
            <label>Job Title</label>
            <input
              placeholder="ex: UX Developer"
              name="title"
              onChange={handleChange}
            />

            <label>Company Name</label>
            <input
              placeholder="ex: RemoteReq"
              name="companyName"
              onChange={handleChange}
            />

            {/* <label>Industry</label>
            <input
              placeholder="ex: Software"
              name="industryType"
              onChange={handleChange}
            /> */}

            {/* <label>Role</label>
            <input
              placeholder="UX Developer"
              name="role"
              onChange={handleChange}
            /> */}

            <label>What cause does your company work on?</label>
            <CauseSelector name="cause" handleChange={handleChange}/>

            <label>Job Details</label>
            <div className="textarea-div">
              <textarea
                placeholder="ex: RemoteReq is looking for a new UX Developer to lead in creating a responsive mobile app for RemoteReq.com!"
                className="aboutMe"
                name="jobDetails"
                onChange={handleChange}
                />
              </div>


            <label>Key Skills</label>
            <SkillBank addToList={addToList} myKeySkills={jobData.keySkills}/>

            <label>Soonest Join Date for Job</label>
            <br/>
            <input
              name="soonestJoinDate"
              onChange={handleChange}
              type="date"
            />
            <br/>
            {/* <label>Work Days</label>
            <DaySelector addToList={addToList} /> */}

            <label>Available work hours</label>
            <AvailableHours />


              <div className="upload-button">
                <button className="button-2">Upload a job description</button>
                <input
                  type="file"
                  name="resume"
                  accept="application/pdf,application/vnd.ms-excel"
                  onChange={(e) => { return handleFileUpload(e); }}
                  />
              </div>
          </div>

          <div>

            <label>Company Logo</label>
            <div className="image-box">
              <img />
            </div>
            <input
              type="file"
              className="button-1"
              />

            <label>Hourly Wage</label>
            <input
              type="number"
              name="hourlyWage"
              onChange={handleNumber}
            />

            <label>Number of Hours Desired per Week</label>
            <input
              type="number"
              name="numberOfHours"
              onChange={handleNumber}
            />

            <div className="range">
              <label>Minimum Years of Experience Required</label>
              <input
                type="number"
                name="minExperience"
                onChange={handleNumber}
                />

              <label>Maximum Years of Experience Required</label>
              <input
                type="number"
                name="maxExperience"
                onChange={handleNumber}
                />
            </div>

            <EducationSelector handleChange={handleNumber} name="requiredEducationLevel"/>

            <div className="select">
              <label>State</label>
              <select name="location" onChange={handleChange}>
                <option>-----</option>
                {
                  locations.map((state, i) => {
                    return (
                      <option key={i} value={state}>
                        {state}
                      </option>
                    );
                  })
                }
              </select>
            </div>

            <TimeZoneSelector handleChange={handleChange}/>

            <div className="notification-settings">
              <h3>Notification Settings</h3>
              <p className="small-paragraph">
                We will email you when your matching criteria is met. Let us know, when you would like to hear from us.
              </p>

              <div className="sliders">
                <label>Number of Candidates</label>
                <div className="slider">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    name="numberOfCandidate"
                    defaultValue="1"
                    onChange={handleNumber}
                    />
                  <input
                    value={jobData.numberOfCandidate}
                    readOnly
                    />
                </div>

                <label>Percentage Match</label>
                <div className="slider">
                <input
                  type="range"
                  min="20"
                  max="100"
                  step="1"
                  name="percentageMatch"
                  defaultValue="20"
                  onChange={handleNumber}
                  />
                <input
                  value={`${jobData.percentageMatch} %`}
                  readOnly
                  />

                <label>Show candidates that are eligible to work in the United States</label>
                <input
                  type="checkbox"
                  name="eligibleToWorkInUS"
                  value={true}
                  onChange={handleChange}
                />

                <label>Show candidates that are fluent in English</label>
                <input
                  type="checkbox"
                  name="fluentInEnglish"
                  value={true}
                  onChange={handleChange}
                />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="form-handler">
          <Link to="/employer/firstPayment">
            <button
              className="button-1"
              onClick={addJob}
              >Save job Req</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default PartTimeForm;