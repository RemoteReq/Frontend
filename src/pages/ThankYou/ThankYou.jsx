import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
  <div className="verify-page">
    <div className="notice">
      <p className="small-paragraph">
        Thank you for making an account with us.
        Please check your email to verify your account before&nbsp;
            <Link to="/signIn">
              signing in
            </Link>
            !
      </p>

      {/* <div>
        Go Back to
      </div> */}
    </div>
  </div>
  );
};

export default ThankYou;