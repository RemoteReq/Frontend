import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import Navigation from '../../parts/Navigation1.jsx';
import LoginPage from '../LoginPage.jsx';
import Registration from '../Registration.jsx';
import Footer from '../../parts/Footer.jsx';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginEmail: '',
      loginPassword: '',
      regFirstName: '',
      regLastName: '',
      regEmail: '',
      regPhoneNumber: '',
      regPass: '',
      regPassTwo: '',
      navMenuVisible: false,
    };

    this.userInput = this.userInput.bind(this);
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.menuClick = this.menuClick.bind(this);
  }

  userInput(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  menuClick() {
    this.setState({ navMenuVisible: !this.state.navMenuVisible });
  }

  register() {
    const Fname = this.state.regFirstName;
    const Lname = this.state.regLastName;
    const { regEmail } = this.state;
    const passOne = this.state.regPass;
    const passTwo = this.state.regPassTwo;

    if (
    // validatePassword(passOne) === true &&
      passOne === passTwo
        && Fname.length > 0
        && Lname.length > 0
        && regEmail.length > 0
        && regEmail.includes('@')
    ) {
      const regInfo = {
        firstName: Fname,
        lastName: Lname,
        email: regEmail,
        password: passOne,
        confirmPassword: passTwo,
        phone: this.state.regPhoneNumber,
      };

      // Axios.post('/registration', { regInfo })
      // .then(() => console.log('success'))
      // .catch(() => console.log('registration failed'))
      console.log('success: ', regInfo);
    } else {
      alert('Registration failed. This may be due to incomplete fields, passwords not matching, or your password is missing required characters.');
    }
  }

  login() {
    console.log(this.state);

    // production url
    // const url = 'locahost:3031/api/signin';

    // development url
    const url = 'http://localhost:3030/api/signin';

    const credentials = {
      username: this.state.loginEmail,
      password: this.state.loginPassword,
    };

    Axios.post(url, {
      body: credentials,
    })
      .then(() => console.log('success!!'))
      .catch(() => console.log('login failed'));
  }

  render() {
    return (
      <Router>
        <div className='login-registration'>
          <Navigation menuClick={ this.menuClick } />
          <Switch>
            <Route
              path='/signup'
              render={ (props) => <Registration
                  userInput={ this.userInput }
                  register={ this.register }
                />
              }
            />
            <Route
              path='/signin'
              render={ (props) => <LoginPage
                  userInput={this.userInput}
                  login={this.login}
                />
              }
            />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Auth;