import React from 'react';
import Divider from '../../../components/parts/Divider.jsx';

const JobPrefenceEditor = ({
  userDetails, handleChange, handleSubmit,
}) => {
  document.title = 'Job Preferences';
  return (
    <div className="job-preference-editor">
      <h3>Job Preferences</h3>
      <Divider/>


      {/* <h4>Current Job Information</h4>
      <form>
        <div>

          <label>Role</label>
          <input/>

          <label>Experience</label>
          <input/>

          <label>Industry</label>
          <input/>

          <label>Location</label>
          <input/>

          <button
            className="button-1"
          >Update</button>

        </div>
      </form>

      <Divider /> */}

      {/* <h4>Desired Job Information</h4> */}
      <form>
        <div>

          <label>Role</label>
          <input
            name="desireJobRole"
            defaultValue={`${userDetails.desireJobRole || ''}`}
            onChange={(e) => { handleChange(e); }}
          />

          <label>Industry</label>
          <input
            name="desireIndustryType"
            defaultValue={`${userDetails.desireIndustryType || ''}`}
            onChange={(e) => { handleChange(e); }}
          />

          {/* <label>Total years of experience</label>
          <input
            name="totalExperience"
            defaultValue={`${userDetails.totalExperience || ''}`}
            onChange={(e) => { handleChange(e); }}
          /> */}


          <label>Minimum years of experience</label>
          <input
            name="minExperience"
            defaultValue={`${userDetails.minExperience || ''}`}
            onChange={(e) => { handleChange(e); }}
          />


          <label>Maximum years of experience</label>
          <input
            name="maxExperience"
            defaultValue={`${userDetails.maxExperience || ''}`}
            onChange={(e) => { handleChange(e); }}
          />

          <label>Location</label>
          <input
            name="desireLocation"
            defaultValue={`${userDetails.desireLocation || ''}`}
            onChange={(e) => { handleChange(e); }}
          />

          <label>CTC</label>
          <input
            name="desireCTC"
            defaultValue={`${userDetails.desireCTC || ''}`}
            onChange={(e) => { handleChange(e); }}
          />

            <button
              className="button-1"
              onClick={(e) => { return handleSubmit(e); }}
            >Update</button>

        </div>
      </form>
    </div>
  );
};

export default JobPrefenceEditor;