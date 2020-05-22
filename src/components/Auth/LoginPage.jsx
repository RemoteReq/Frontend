import React from 'react';
import { GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
};

const LoginPage = (props) => (
  <div className="login-form-page">
    <div className="login-container" >
      <div className="login-fb-google">

        <p>
          By continuing, you agree to our  <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>.
        </p>

        <GoogleLogin
        clientId="1005468463474-snfb80jfo4sg40fdapbcguuoa6uvbqq1.apps.googleusercontent.com"
          buttonText="Sign In with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          />

      </div>
      <form className="login-form" >
        <input
          name="loginEmail"
          className="login-email"
          onChange={ (event) => props.userInput(event) }
          placeholder="Email" />
        <input
          type="password"
          name="loginPassword"
          className="login-password"
          onChange={ (event) => props.userInput(event) }
          placeholder="Password" />
        <button onClick={ () => props.login() }>Login</button>
        <a href="#">Forgot Password</a>
        <p>
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
      </form>
    </div>
  </div>
);

export default LoginPage;