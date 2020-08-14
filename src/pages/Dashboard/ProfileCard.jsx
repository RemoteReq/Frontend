import React from 'react';
import { Link } from 'react-router-dom';
import SettingsIcon from '#assets/icons/pngs/flaticon/settings.png';

const ProfileCard = ({ userDetails }) => {
  return (
    userDetails

      ? <div className="profile-card">
          <div className="profile-card-contents">

            <div className="profile-card-picture">
              <img src={userDetails.profilePicUrl}/>
            </div>

            <h3 className="profile-card-name">{`${userDetails.fullName}`}</h3>
            <h4>{userDetails.jobRole || ''}</h4>

            <div className="profile-card-bio">
              <h5>About</h5>
              <p className="small-paragraph">{userDetails.aboutMe}</p>

              <h5>Cause</h5>
              <p className="small-paragraph">{userDetails.cause || ''}</p>

              <h5>Education</h5>
              {userDetails.education.map((item, key) => { return <p className="small-paragraph" key={key}>{item || ''}</p>; })}

              <h5>Phone #</h5>
              <p className="small-paragraph">{userDetails.mobileNum || ''}</p>

              <h5>Email</h5>
              <p className="small-paragraph">{userDetails.email || ''}</p>

              <h5>Skills</h5>
              <ul>
                {userDetails.keySkills.map((item, key) => { return <li key={key}>{item || 'user skill item here'}</li>; })}
              </ul>

              <button className="button-2">Upload Resume</button>
            </div>
          </div>

          <Link to="/settings/profile">
            <img src={SettingsIcon} className="settings-icon"/>
          </Link>
        </div>

      : <div>loading...</div>
  );
};

export default ProfileCard;