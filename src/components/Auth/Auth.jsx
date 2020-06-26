import axios from 'axios';

const backend = 'http://3.21.186.204:3030';

class Auth {
  constructor() {
    this.authState = false;
  }

  login(credentials, cb) {
    axios.post(`${backend}/api/signin`, credentials)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('session', response.data.token);
          this.authState = true;
          cb();
        }
      });
  }

  logout(cb) {
    localStorage.removeItem('session');
    this.authState = false;
    cb();
  }

  isAuthenticated() {
    const status = localStorage.getItem('session') ? this.authState = true : this.authState = false;

    return status;
  }
}

export default new Auth();