import React, { Component } from 'react';
import {
  Redirect, Switch, Route,
} from 'react-router-dom';
import axios from 'axios';
import Navigation from '../../components/parts/Navigation2.jsx';
// import ProfileCard from './ProfileCard.jsx';
import ProfileCard from './ProfileCard.jsx';
import JobList from './jobList/JobList.jsx';
import Reminder from './Reminder.jsx';
import QnA from '../QnA/QnA.jsx';
import auth from '../../components/Auth/Auth.jsx';

const backend = 'http://3.21.186.204:3030';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobListings: [],
      profileMenuDropdown: false,
    };

    this.updateRedirect = this.updateRedirect.bind(this);
    this.showProfileMenu = this.showProfileMenu.bind(this);
  }

  componentDidMount() {
    // check session status on visit
    console.log('checking auth status...', auth.isAuthenticated());
    if (auth.isAuthenticated()) {
      // request user details based off token

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
          }, () => { return console.log('user details retrieved!', this.state); });
        })
        .catch((error) => { return console.log(error); });

      axios({
        url: `${backend}/api/user/filterJobs`,
        method: 'post',
        headers: {
          token: localStorage.getItem('session'),
        },
      })
        .then((response) => {
          console.log('job listings', response.data);
          this.setState({
            jobListings: response.data,
          });
        });
    }
  }

  showProfileMenu() {
    this.setState({ profileMenuDropdown: !this.state.profileMenuDropdown });
  }

  updateRedirect() {
    this.setState({
      redirectToReferrer: false,
    }, () => {
      console.log('Signing you out... See you next time!');
    });
  }

  handleFileUpload(e) {
    e.preventDefault();

    console.log(e.target.value);

    const formData = new FormData();

    formData.append('uploadResume', e.target.files[0]);

    // to check formData contents

    // for (const key of formData.entries()) {
    //   console.log(`${key[0]}, ${key[1]}`);
    // }

    axios({
      url: `${backend}/api/user/uploadResume`,
      method: 'post',
      headers: {
        token: localStorage.getItem('session'),
      },
      data: formData,
    })
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        window.location.reload();
      });
  }

  render() {
    document.title = 'Dashboard';
    const { redirectToReferrer } = this.state;
    const { userDetails } = this.state;

    if (redirectToReferrer === false) {
      return (
        <Redirect to='signin'/>
      );
    }

    return (

      <div>
        <Navigation
          showProfileMenu={ this.showProfileMenu }
          updateRedirect={this.updateRedirect}
        />

        <div className='dashboard'>
          <ProfileCard userDetails={userDetails} handleFileUpload={this.handleFileUpload}/>

          <Switch>
            <Route
              path='/joblist'
              render={
                () => { return <JobList jobs={this.state.jobListing}/>; }
              }
            />

            <Route
              path='/dashboard'
              component={Reminder}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;