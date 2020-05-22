import React from 'react';

const ProfileCard = () => (
  <div className="profile-card">
    <div className="profile-card-contents">

      <div className="profile-card-picture"></div>
        <h2 className="profile-card-name">Ryan Ferrer</h2>
        <h2 className="profile-card-profession">Software Developer</h2>
      <div className="profile-card-edit-button"></div>

      <div className="profile-card-bio">
        <h3 className="profile-card-bio-header">About</h3>
        <h3 className="profile-card-bio-header">Cause</h3>
        <h3 className="profile-card-bio-header">Education</h3>
        <h3 className="profile-card-bio-header">Phone #</h3>
        <h3 className="profile-card-bio-header">Email</h3>
        <p>soandso@gmail.com</p>
        <h3 className="profile-card-bio-header">Skills</h3>

        <button className="blue-block-button">Upload Resume</button>
      </div>
    </div>
  </div>
);

export default ProfileCard;