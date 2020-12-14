import React from 'react';
import { Link } from 'react-router-dom';

// This component should render IF the first payment has gone through
const HireSelect = ({ firstPaymentStatus, secondPaymentStatus, jobId }) => {
  return (
    firstPaymentStatus && secondPaymentStatus !== true
      ? <div className="hire-select">
      <h4>Did you make a hire for this job req?</h4>

      <br/>

      <div className="button-group">
        <Link to={`/isHired?status=true&jobId=${jobId}`}>
          <button className="button-1" >Yes</button>
        </Link>

        <Link to={`/isHired?status=false&jobId=${jobId}`}>
          <button className="button-2" >No</button>
        </Link>
      </div>
    </div>

      : <div></div>
  );
};

export default HireSelect;