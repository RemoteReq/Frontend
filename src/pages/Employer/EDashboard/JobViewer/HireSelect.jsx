import React from 'react';

// This component should render IF the first payment has gone through
const HireSelect = () => {
  const firstPayment = false;

  console.log('NODE ENV!!', process.env.NODE_ENV);

  return (
    firstPayment
      ? <div>
      <h4>Did you make a hire?</h4>

      <div className="button-container">
        <button className="small-button button-1" >Yes</button>

        <button className="small-button button-2" >No</button>
      </div>
    </div>

      : <div></div>
  );
};

export default HireSelect;