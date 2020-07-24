import React, { Component } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import Navigation2 from '../../components/parts/Navigation2.jsx';
// import ProfileEditor from './Profile/ProfileEditor.jsx';
import ProfileEditor from './Profile/StatelessProfileEditor.jsx';
// import AccountEditor from './Account/AccountEditor.jsx';
import AccountEditor from './Account/StatelessAccountEditor.jsx';
import JobPreferenceEditor from './JobPreference/JobPreferenceEditor.jsx';
import SettingsNav from './SettingsNav.jsx';
import Auth from '../../components/Auth/Auth.jsx';

const backend = 'http://3.21.186.204:3030';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      confirmUsername: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteAccount = this.handleDeleteAccount.bind(this);
    this.handleConfirmUsername = this.handleConfirmUsername.bind(this);
    this.handleFileUpload = this.handleFileUpload.bind(this);
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
          }, () => { console.log(this.state); });
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

  handleSubmit(e) {
    e.preventDefault();

    const body = this.state.userDetails;

    console.log('Here is the data you are about to send', body);

    axios({
      url: `${backend}/api/user/updateUserProfile`,
      method: 'post',
      headers: {
        token: localStorage.getItem('session'),
      },
      data: body,
    })
      .then((response) => {
        console.log('reponse after posting from settings', response);
      })
      .then(() => {
        window.location.reload();
      });
  }

  handleFileUpload(e) {
    e.preventDefault();

    console.log(e.target.value);

    const formData = new FormData();

    formData.append('userImage', e.target.files[0]);

    // to check formData contents

    // for (const key of formData.entries()) {
    //   console.log(`${key[0]}, ${key[1]}`);
    // }

    axios({
      url: `${backend}/api/user/updateProfileDataWithImage`,
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

  handleDeleteAccount(e) {
    e.preventDefault();

    const { confirmUsername } = this.state;
    const { username } = this.state.userDetails;

    if (confirmUsername === username) {
      const result = window.confirm('are you sure you want to delete your account?');

      if (result === true) {
        console.log('Goodbye!');

        axios({
          url: `${backend}/api/user/deleteAccount`,
          method: 'post',
          headers: {
            token: localStorage.getItem('session'),
          },
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      console.log('usernames do not match. Cannot delete account');
    }
  }

  handleConfirmUsername(e) {
    e.preventDefault();

    this.setState({
      confirmUsername: e.target.value,
    }, () => { console.log(this.state); });
  }

  handleChange(e) {
    e.preventDefault();

    this.setState(
      {
        userDetails: {
          ...this.state.userDetails,
          [e.target.name]: e.target.value,
        },
      },
    );
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
                      <ProfileEditor
                        {...props}
                        userDetails={userDetails}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        handleFileUpload={this.handleFileUpload}
                        />
                      );
                    }}
                  />
                  <Route path="/settings/account"
                  render={(props) => {
                    return (
                      <AccountEditor
                        {...props}
                        userDetails={userDetails}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        handleDeleteAccount={this.handleDeleteAccount}
                        handleConfirmUsername={this.handleConfirmUsername}
                      />
                    );
                  }

                  }/>
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