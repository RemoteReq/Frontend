import axios from 'axios';

const backend = 'http://3.21.186.204:3030';

class Auth {
  constructor() {
    this.authState = false;
  }

  login(credentials, cb, err) {
    axios.post(`${backend}/api/signin`, credentials)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('session', response.data.token);
          this.authState = true;
          cb();
        }
      })
      .catch(err());
  }

  logout(cb) {
    localStorage.removeItem('e-session');
    this.authState = false;
    cb();
  }

  isAuthenticated() {
    const status = localStorage.getItem('e-session') ? this.authState = true : this.authState = false;

    return status;
  }

  verify(id, cb) {
    axios.post(`${backend}/api/signup/employerEmailVerify?id=${id}`)
      .then((response) => {
        if (response.status === 200) {
          cb();
        }
      })
      .catch((err) => {
        console.log('error in verification request', err);
      });
  }
}

export default new Auth();