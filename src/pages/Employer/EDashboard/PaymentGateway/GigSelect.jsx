import React from 'react';
import { Link } from 'react-router-dom';

const GigSelect = () => {
  return (
    <div className="gig-select-page">
      <form>
        <Link
          to={{
            pathname: '/employer/firstPayment',
            state: { price: 100.00, afterHirePrice: 2500.00, gigType: 'FULL TIME' },
          }}
        >
          <div className="gig-select-choice">
            <h3>Full Time</h3>
            <div className="gig-select-image">
              {/* <img/> */}
            </div>
            <p>$100 upfront to post</p>
            <p>$2500 upon successful hire</p>
          </div>
        </Link>

        <Link
          to={{
            pathname: '/employer/firstPayment',
            state: { price: 100.00, afterHirePrice: 1000.00, gigType: 'PART TIME' },
          }}
        >
          <div className="gig-select-choice">
            <h3>Part Time</h3>
            <div className="gig-select-image">
              {/* <img/> */}
            </div>
            <p>$100 upfront to post</p>
            <p>$1000 upon successful hire</p>
          </div>
        </Link>
      </form>

    </div>
  );
};

export default GigSelect;