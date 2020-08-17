import axios from 'axios';

const backend = 'http://3.21.186.204:3030';

class Auth {
  constructor() {
    this.authState = false;
  }

  login(credentials, cb, err) {
    axios.post(`${backend}/api/signin/employerSignIn`, credentials)
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem('e-session', response.data.token);
          localStorage.setItem('clientId', response.data.clientIdOfPaymentGateway);
          this.authState = true;
          cb();
        }
      })
      .catch(() => {
        err();
      });
  }

  logout(cb) {
    localStorage.removeItem('e-session');
    localStorage.removeItem('clientId');
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

  generateClientToken() {
    const clientId = localStorage.getItem('clientId');
    const session = localStorage.getItem('e-session');

    axios.post(`${backend}/api/jobs/client_token_for_payment`, { clientId }, {
      headers: {
        token: session,
      },
    })
      .then((response) => {
        console.log(response);
        localStorage.setItem('clientToken', response.data);
      })
      .catch((err) => {
        console.log('error genereating tokenId', err);
      });
  }

  destroyClientToken() {
    localStorage.removeItem('clientToken');
  }
}

export default new Auth();