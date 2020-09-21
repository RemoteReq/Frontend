import React from 'react';
import { Link } from 'react-router-dom';
import { locations } from '#assets/inputs/inputs';
import ENav from '../../ENav/ENav.jsx';

const FullTimeForm = ({ jobData, handleChange, addJob }) => {
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
            placeholder="ex: Looking for UX Developer"
            name="title"
            onChange={handleChange}
          />

          <label>Company Name</label>
          <input
            placeholder="ex: Google"
            name="companyName"
            onChange={handleChange}
          />

          <label>Industry</label>
          <input
            placeholder="ex: Software"
            name="industryType"
            onChange={handleChange}
          />

          <label>Role</label>
          <input
            placeholder="UX Developer"
            name="role"
            onChange={handleChange}
          />

          <label>Job Details (0 / 255 characters)</label>
          <div className="textarea-div">
            <textarea
              placeholder="ex: Google is looking for a new UX Developer to lead in creating a new UI for the newest version of Android"
              className="aboutMe"
              name="jobDetails"
              onChange={handleChange}
            />
          </div>


          <label>Key Skills</label>
          <input
            placeholder="ex: Flutter, Dart, SASS, Go"
            name="keySkills"
            onChange={handleChange}
          />

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

          <label>Salary</label>
            <input
            type="number"
            name="ctc"
            onChange={handleChange}
            />

          <div className="range">
            <label>Minimum Years of Experience</label>
            <input
              type="number"
              name="minExperience"
              onChange={handleChange}
              />

            <label>Maximum Years of Experience</label>
            <input
              type="number"
              name="maxExperience"
              onChange={handleChange}
              />
          </div>

          <div className="select">
            <label>Location</label>
            <select name="location" onChange={handleChange}>
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


          <div className="notification-settings">
            <h3>Notification Settings</h3>
            <p className="small-paragraph">
              We'll send you e-mail notifcations based on these candidate-matching parameters.
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
                  onChange={handleChange}
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
                onChange={handleChange}
                />
              <input
                value={`${jobData.percentageMatch} %`}
                readOnly
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

export default FullTimeForm;