import React from 'react';
import Divider from '../../../components/parts/Divider.jsx';

const JobPrefenceEditor = () => {
  document.title = 'Job Preferences';
  return (
    <div className="job-preference-editor">
      <h3>Job Preferences</h3>
      <Divider/>


      <h4>Current Job Information</h4>
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

      <Divider />

      <h4>Desired Job Information</h4>
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
    </div>
  );
};

export default JobPrefenceEditor;