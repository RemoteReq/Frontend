import React from 'react';
import Divider from '../../../components/parts/Divider.jsx';
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

          <label>About</label>
          <div className="textarea-div">
            <textarea
              name="aboutMe"
              defaultValue={`${userDetails.aboutMe}` || ''}
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

          <label>Personal URL</label>
          <input
            name="personalURL"
            defaultValue={`${userDetails.personalURL}`}
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

          <label>Profile Picture</label>
          <div className="profile-pic">
            {
              userDetails.profilePicUrl

                ? <img src={userDetails.profilePicUrl}/>
                : <img src={ProfilePlaceholder} className="placeholder"/>
            }
          </div>

          <div className="upload-button">
            <button className="button-2 small-button">Change Profile Picture</button>
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