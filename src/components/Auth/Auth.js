import axios from 'axios';

const backend = 'http://3.21.186.204:3030'

class Auth {
  constructor() {
    this.authState = false;
  }

  login(credentials, cb) {
    axios.post(`${backend}/api/signin`, credentials)
    .then(response => {
      if (response.status === 200) {
        localStorage.setItem('session', response.data.token);
        this.authState = true;
      }
    })
    .then(cb());
  }

  logout(cb) {
    localStorage.removeItem('session');
    this.authState = false;
    cb();
  }

  checkSession() {
    const sesh = localStorage.getItem('session');

    sesh ? this.authState = true : this.authState = false;
  }

  isAuthenticated() {
    return this.authState;
  }
}

export default new Auth();