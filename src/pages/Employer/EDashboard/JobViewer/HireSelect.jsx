import React from 'react';

// This component should render IF the first payment has gone through
const HireSelect = ({ firstPaymentStatus, submitHired, submitNotHired }) => {
  console.log('NODE ENV!!', process.env.NODE_ENV);

  return (
    firstPaymentStatus
      ? <div className="hire-select">
      <h4>Did you make a hire for this job req?</h4>

      <br/>

      <div className="button-group">
        <button
          onClick={(e) => { return submitHired(e); }}
          className="button-1" >Yes</button>

        <button
          onClick={(e) => { return submitNotHired(e); }}
          className="button-2" >No</button>
      </div>
    </div>

      : <div></div>
  );
};

export default HireSelect;