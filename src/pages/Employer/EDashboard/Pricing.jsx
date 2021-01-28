import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Pricing = () => {
  return (
    <div className="message">
      <p className="small-paragraph">
        Pay just $100 for detailed access to your candidate matches. <HashLink to="/find-talent#pricing">Read more</HashLink>
      </p>
    </div>
  );
};

export default Pricing;