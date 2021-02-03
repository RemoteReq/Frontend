import React from 'react';
import { Link } from 'react-router-dom';

// This component should render IF the first payment has gone through
const HireSelect = ({ firstPaymentStatus, secondPaymentStatus, jobId }) => {
  return (
    firstPaymentStatus && secondPaymentStatus !== true
      ? <div className="hire-select">
      <br/>

      <h4>Did you hire a candidate we connected you to?</h4>

      <br/>

      <div className="button-group">
        <Link to={`/isHired?status=true&jobId=${jobId}`}>
          <button className="button-1 small-button" >Yes</button>
        </Link>

        <Link to={`/isHired?status=false&jobId=${jobId}`}>
          <button className="button-2 small-button" >No</button>
        </Link>

      </div>

      <br/>
    </div>

      : <div></div>
  );
};

export default HireSelect;