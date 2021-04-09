import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Pricing = () => {
  return (
    <div className="message">
      <p className="small-paragraph">
        View our pricing guidelines <HashLink to="/find-talent#pricing">here</HashLink>.
      </p>
    </div>
  );
};

export default Pricing;