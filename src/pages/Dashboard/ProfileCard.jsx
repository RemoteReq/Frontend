import React, { Component } from 'react';
import Auth from '../../components/Auth/Auth.js';
import axios from 'axios';

const backend = 'http://3.21.186.204:3030';

class ProfileCard extends Component{
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount(){
    if (Auth.isAuthenticated()) {
      console.log('retrieving user details... ');

      axios({
        url: `${backend}/api/user/getSingleUserDetails`,
        method: 'post',
        headers: {
          token: localStorage.getItem('session'),
        },
      })
      .then(response => {
        this.setState({
          redirectToReferrer: true,
          userDetails: response.data
        })
        console.log('user details retrieved!', response)
      })
      .catch(error => console.log(error))
    }
  }

  render() {
    const { userDetails } = this.state;

    return(
      userDetails ? 
      
      <div className="profile-card">
        <div className="profile-card-contents">
          <div className="profile-card-picture"></div>
          <h2 className="profile-card-name">{userDetails.firstName + ' ' + userDetails.lastName}</h2>
          <h2 className="profile-card-profession">{userDetails.jobRole || 'You Job Role Here'}</h2>
        <div className="profile-card-edit-button"></div>

        <div className="profile-card-bio">
          <h3 className="profile-card-bio-header">About</h3>
          <h3 className="profile-card-bio-header">Cause</h3>
          <h3 className="profile-card-bio-header">Education</h3>
          <h3 className="profile-card-bio-header">Phone #</h3>
          <h3 className="profile-card-bio-header">Email</h3>
          <p>{userDetails.email}</p>
          <h3 className="profile-card-bio-header">Skills</h3>
          <button className="blue-block-button">Upload Resume</button>
        </div>

        </div>
      </div>
      
      :
      
      <div>loading...</div>
    )
  }
}

export default ProfileCard;