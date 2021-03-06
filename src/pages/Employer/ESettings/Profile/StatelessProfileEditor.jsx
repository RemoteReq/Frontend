import React from 'react';
import Divider from '#parts/Divider.jsx';
import ProfilePlaceholder from '#assets/icons/pngs/Profile.png';

const StatelessProfileEditor = ({
  userDetails, handleChange, handleSubmit, handleFileUpload, profileUpdateRequestStatus,
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

          <label>Company</label>
          <input
            name="companyName"
            defaultValue={`${userDetails.companyName}`}
            onChange={(e) => { handleChange(e); }}
          />

          <label>Our Mission</label>
          <div className="textarea-div">
            <textarea
              name="location"
              defaultValue={`${userDetails.location}` || ''}
              onChange={(e) => { handleChange(e); }}
              />
          </div>

          <label>LinkedIn URL</label>
          <input
            name="companyLinkedinURL"
            defaultValue={`${userDetails.companyLinkedinURL || ''}`}
            onChange={(e) => { handleChange(e); }}
          />

          <label>Company URL</label>
          <input
            name="companyWebsite"
            defaultValue={`${userDetails.companyWebsite || ''}`}
            onChange={(e) => { handleChange(e); }}
          />

          <div className="submit-button">
            <button
              className="button-1"
              onClick={(e) => { return handleSubmit(e); }}
              >Update</button>

            <p className={`small-paragraph ${profileUpdateRequestStatus ? 'show' : 'hide'}`}>
              Changes successfully saved!
            </p>
          </div>
        </div>

        <div className="image-column">

          <label>Company Logo</label>
          <div className="profile-pic">
            {
              userDetails.companyLogo

                ? <img src={userDetails.companyLogo}/>
                : <img src={ProfilePlaceholder} className="placeholder"/>
            }
          </div>

          <div className="upload-button">
            <button className="button-1 small-button">Change Logo</button>
            <input
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={(e) => { return handleFileUpload(e); }}
              />
            </div>
        </div>
      </form>

    </div>
  );
};

export default StatelessProfileEditor;