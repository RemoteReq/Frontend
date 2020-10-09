import React from 'react';
import Divider from '../../../components/parts/Divider.jsx';

const StatelessProfileEditor = ({
  userDetails, handleChange, handleSubmit, handleFileUpload,
}) => {
  document.title = 'Your Profile';

  return (
    <div className="profile-editor">
      <h3>Your Profile</h3>

      <Divider />

      <form>
        <div>
          <label>Name</label>
          <input
            name="fullName"
            defaultValue={`${userDetails.fullName || ''}`}
            onChange={(e) => { handleChange(e); }}
          />

          <label>About</label>
          <div className="textarea-div">
            <textarea
              name="descProfessionalGoal"
              defaultValue={`${userDetails.descProfessionalGoal}` || ''}
              onChange={(e) => { handleChange(e); }}
              />
          </div>

          <label>LinkedIn URL</label>
          <input
            name="linkedInURL"
            defaultValue={`${userDetails.linkedInURL}`}
            onChange={(e) => { handleChange(e); }}
          />

          <label>Sample Project Link</label>
          <input
            name="sampleProjectLink"
            defaultValue={`${userDetails.sampleProjectLink}`}
            onChange={(e) => { handleChange(e); }}
          />

          {/* <label>Twitter Handle</label>
          <input
            name=""
            onChange={(e) => { handleChange(e); }}
          /> */}

          <label>Personal URL</label>
          <input
            name="personalURL"
            defaultValue={`${userDetails.personalURL}`}
            onChange={(e) => { handleChange(e); }}
          />

          <button
            className="button-1"
            onClick={(e) => { return handleSubmit(e); }}
          >Update</button>
        </div>

        <div className="image-column">

          <label>Profile Picture</label>
          <div className="image-box">
            <img src={userDetails.profilePicUrl}/>
          </div>

          <input
            className="button-1"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => { return handleFileUpload(e); }}
          />
        </div>
      </form>

    </div>
  );
};

export default StatelessProfileEditor;