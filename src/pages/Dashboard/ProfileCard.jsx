import React from 'react';
import { Link } from 'react-router-dom';
import SettingsIcon from '#assets/icons/pngs/flaticon/settings.png';
import ProfilePlaceholder from '#assets/icons/pngs/Profile.png';
import MessageIcon from '#assets/icons/pngs/flaticon/profile-card-icons/message.png';
import EmailIcon from '#assets/icons/pngs/flaticon/profile-card-icons/email.png';
import PhoneIcon from '#assets/icons/pngs/flaticon/profile-card-icons/phone.png';
import RibbonIcon from '#assets/icons/pngs/flaticon/profile-card-icons/ribbon.png';
// import LocationIcon from '#assets/icons/pngs/flaticon/profile-card-icons/location.png';
import ResumeIcon from '#assets/icons/pngs/flaticon/profile-card-icons/resume.png';
import ToolsIcons from '#assets/icons/pngs/flaticon/profile-card-icons/tools.png';
import IconAndTitle from '#parts/IconAndTitle.jsx';

const ProfileCard = ({ userDetails, handleFileUpload }) => {
  return (
    userDetails

      ? <div className="profile-card">
          <div className="profile-card-contents">

            <div className="profile-pic">
              {
                userDetails.profilePicUrl

                  ? <img src={userDetails.profilePicUrl}/>
                  : <img className="placeholder" src={ProfilePlaceholder}/>
              }
            </div>

            <h3 className="profile-card-name">{`${userDetails.fullName}`}</h3>
            <h4>{userDetails.jobRole || ''}</h4>

            <div className="profile-card-bio">
              <IconAndTitle title="About" icon={MessageIcon}/>
              <p className="small-paragraph">{userDetails.aboutMe}</p>

              <IconAndTitle title="Causes" icon={RibbonIcon}/>
              <ul>{userDetails.causes.map((cause, key) => { return <li key={key}>{cause}</li>; })}</ul>

              {/* <h5>Education</h5> */}
              {/* {userDetails.education.map((item, key) => { return <p className="small-paragraph" key={key}>{item || ''}</p>; })} */}

              <IconAndTitle title="Phone Number" icon={PhoneIcon}/>
              <p className="small-paragraph">{userDetails.mobileNum || ''}</p>

              <IconAndTitle title="Email" icon={EmailIcon}/>
              <p className="small-paragraph">{userDetails.email || ''}</p>

              <IconAndTitle title="Skills" icon={ToolsIcons} />
              <ul>
                {userDetails.desireKeySkills.map((item, key) => { return <li key={key}>{item || 'user skill item here'}</li>; })}
              </ul>

              <IconAndTitle title="Resume" icon={ResumeIcon} />
              <p className="small-paragraph">
                {
                  userDetails.resumePath.replace(/^.*[\\\/]/, '').replace(/\d{13}/, '').replace(/%/, '_')
                }
              </p>

              <br/>

              <div className="upload-button">
                <button className="small-button button-2">Upload a resume</button>
                <input
                  type="file"
                  name="resume"
                  accept="application/pdf,application/vnd.ms-excel"
                  onChange={(e) => { return handleFileUpload(e); }}
                  />
              </div>

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