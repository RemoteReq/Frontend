import React from 'react';

const StatelessProfileEditor = ({ userDetails, handleChange, handleSubmit }) => {
  document.title = 'Your Profile';

  return (
    <div className="profile-editor">
      <h3>Your Profile</h3>

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
            name="aboutMe"
              defaultValue={`${userDetails.aboutMe || ''}`}
              />
          </div>

          <label>Education</label>
          <input
            name=""
            onChange={(e) => { handleChange(e); }}
          />

          <label>Current Company</label>
          <input
            name=""
            onChange={(e) => { handleChange(e); }}
          />

          <label>LinkedIn URL</label>
          <input
            defaultValue={`${userDetails.linkedInURL}`}
            name="linkedInURL"
            onChange={(e) => { handleChange(e); }}
          />

          <label>Github URL</label>
          <input
            defaultValue={`${userDetails.githubURL}`}
            name="githubURL"
            onChange={(e) => { handleChange(e); }}
          />

          {/* <label>Twitter Handle</label>
          <input
            name=""
            onChange={(e) => { handleChange(e); }}
          /> */}

          <label>Personal URL</label>
          <input
            defaultValue={`${userDetails.personalURL}`}
            name="personalURL"
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
            <img></img>
          </div>
        </div>
      </form>

    </div>
  );
};

export default StatelessProfileEditor;