import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import {
  Redirect, Switch, Route,
} from 'react-router-dom';
import axios from 'axios';
import Navigation from '../../components/parts/Navigation2.jsx';
// import ProfileCard from './ProfileCard.jsx';
import ProfileCard from './ProfileCard.jsx';
import SwitchWindow from './SwitchWindow.jsx';
import auth from '../../components/Auth/Auth.jsx';

const backend = ' https://api.remotereq.com';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
        .catch((error) => {
          auth.logout(() => {
            this.props.history.push('/sign-in');
          });

          return error;
        })
        .catch((error) => { return console.log(error); });

      axios({
        url: `${backend}/api/user/filterJobs`,
        method: 'POST',
        headers: {
          token: localStorage.getItem('session'),
        },
      })
        .then((response) => {
          console.log('response from getting jobs', response);

          this.setState({
            jobs: response.data,
          }, () => { console.log('after getting Jobs data', this.state); });
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
    const { redirectToReferrer } = this.state;
    const { userDetails } = this.state;
    const { jobs } = this.state;

    if (redirectToReferrer === false) {
      return (
        <Redirect to='sign-in'/>
      );
    }

    return (
      <div>
        <Helmet>
          <title>Dashboard | RemoteReq</title>
          <meta
            name="description"
            content="Use the RemoteReq dashboard to navigate through your matches and find a job that best suits you!"
          />
        </Helmet>

        <Navigation
          showProfileMenu={ this.showProfileMenu }
          updateRedirect={this.updateRedirect}
        />

        <div className='dashboard'>
          <ProfileCard userDetails={userDetails} handleFileUpload={this.handleFileUpload}/>

          <SwitchWindow userDetails={userDetails} jobs={jobs}/>

          {/* <Switch>
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
          </Switch> */}
        </div>
      </div>
    );
  }
}

export default Dashboard;