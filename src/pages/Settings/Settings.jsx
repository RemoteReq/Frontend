import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navigation2 from '../../components/parts/Navigation2.jsx';
import ProfileEditor from './Profile/ProfileEditor.jsx';
import AccountEditor from './Account/AccountEditor.jsx';
import JobPreferenceEditor from './JobPreference/JobPreferenceEditor.jsx';
import SettingsNav from './SettingsNav.jsx';
import Auth from '../../components/Auth/Auth.jsx';

const backend = 'http://3.21.186.204:3030';

class Settings extends Component {
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
        })
        .catch((error) => { return console.log(error); });
    }
  }

  updateRedirect() {
    this.setState({
      redirectToReferrer: false,
    }, () => {
      console.log('Signing you out... See you next time!');
    });
  }

  onSubmit() {

  }

  render() {
    const { redirectToReferrer } = this.state;
    const { userDetails } = this.state;

    if (redirectToReferrer === false) {
      return (
        <Redirect to='signin'/>
      );
    }

    return (
      userDetails

        ? <div className="settings-page">
            <Navigation2 />

            <div className="settings-container">
              <SettingsNav />


              <div className="settings-selection">
                <Switch>
                  <Route
                    path="/settings/profile"
                    render={(props) => {
                      return (
                      <ProfileEditor {...props} userDetails={userDetails} />
                      );
                    }}
                  />
                  <Route path="/settings/account" component={AccountEditor} userDetails={userDetails}/>
                  <Route path="/settings/jobPreference" component={JobPreferenceEditor} userDetails={userDetails}/>
                </Switch>
              </div>
            </div>

          </div>
        : <div className="settings-page">
            Loading...
          </div>
    );
  }
}

export default Settings;