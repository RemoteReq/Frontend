import React from 'react';
import Divider from '#parts/Divider.jsx';

const JobReqNotifications = () => {
  document.title = 'Job Preferences';
  return (
    <div className="job-preference-editor">
      <h3>Job Req Notifications</h3>

      <Divider/>

      <form>
        <div>
          <h4>Notify me when:</h4>


          <label>I recieve this many matches:</label>
          <input
            type="range"
            min="1"
            max="10"
            step="1"
            defaultValue="1"
          />

          <label>my matches are this percent or higher:</label>
          <input
            type="range"
            min="50"
            max="100"
            step="5"
            defaultValue="50"
          />

          <button
            className="button-1"
          >Update</button>

        </div>
      </form>
    </div>
  );
};

export default JobReqNotifications;