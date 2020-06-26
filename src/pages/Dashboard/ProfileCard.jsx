import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Auth from '../../components/Auth/Auth.jsx';

const backend = 'http://3.21.186.204:3030';

class ProfileCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    if (Auth.isAuthenticated()) {
      console.log('retrieving user details... ');

      axios({
        url: `${backend}/api/user/getSingleUserDetails`,
        method: 'post',
        headers: {
          token: localStorage.getItem('session'),
        },
      })
        .then((response) => {
          this.setState({
            redirectToReferrer: true,
            userDetails: response.data,
          });
          console.log('user details retrieved!', response);
        })
        .catch((error) => console.log(error));
    }
  }

  render() {
    const { userDetails } = this.state;

    return (
      userDetails

        ? <div className="profile-card">
        <div className="profile-card-contents">

          <div className="profile-card-picture"></div>

          <h3 className="profile-card-name">{`${userDetails.firstName} ${userDetails.lastName}`}</h3>
          <h4>{userDetails.jobRole || ''}</h4>

          <div className="profile-card-bio">
            <h5>About</h5>
            <p className="small-paragraph">{userDetails.about || ''}</p>

            <h5>Cause</h5>
            <p className="small-paragraph">{userDetails.cause || ''}</p>

            <h5>Education</h5>
            {userDetails.education.map((item, key) => <p className="small-paragraph" key={key}>{item || ''}</p>)}

            <h5>Phone #</h5>
            <p className="small-paragraph">{userDetails.mobileNum || ''}</p>

            <h5>Email</h5>
            <p className="small-paragraph">{userDetails.email || ''}</p>

            <h5>Skills</h5>
            <ul>
              {userDetails.keySkills.map((item, key) => <li key={key}>{item || 'user skill item here'}</li>)}
            </ul>

            <button className="button-2">Upload Resume</button>
          </div>

        </div>

        <Link to="/settings">
          Edit
        </Link>

      </div>

        : <div>loading...</div>
    );
  }
}

export default ProfileCard;