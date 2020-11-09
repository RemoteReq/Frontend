import React from 'react';
import { Link } from 'react-router-dom';
import SettingsIcon from '#assets/icons/pngs/flaticon/settings.png';

const StatelessProfileCard = ({ userDetails }) => {
  return (
    userDetails

      ? <div className="profile-card">
          <div className="profile-card-contents">

            <div className="profile-card-picture">
              <img src={userDetails.companyLogo || ''}/>
            </div>

            <h3 className="profile-card-name">{`${userDetails.fullName || ''}`}</h3>
            <h4>{userDetails.jobRole || ''}</h4>

            <div className="profile-card-bio">
              <h5>Company</h5>
              <p className="small-paragraph">{userDetails.companyName || ''}</p>

              <h5>Our Mission</h5>
              <p className="small-paragraph">{userDetails.location || ''}</p>

              <h5>Email</h5>
              <p className="small-paragraph">{userDetails.email || ''}</p>

            </div>
          </div>

          <Link to="/employer/settings/profile">
            <img src={SettingsIcon} className="settings-icon"/>
          </Link>
        </div>

      : <div>loading...</div>
  );
};

export default StatelessProfileCard;