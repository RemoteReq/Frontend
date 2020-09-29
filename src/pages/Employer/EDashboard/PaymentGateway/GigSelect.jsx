import React from 'react';
import { Link } from 'react-router-dom';
import ENav from '../../ENav/ENav.jsx';

const GigSelect = () => {
  const cause = '';

  return (
    <div className="gig-select-page">
      <ENav />

      <form>
        <div className="gig-select">
          <Link
            to={{
              pathname: '/employer/addJob',
              state: { price: 100.00, afterHirePrice: 2500.00, jobType: 'Full Time' },
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
              pathname: '/employer/addJob',
              state: { price: 100.00, afterHirePrice: 1000.00, jobType: 'Part Time' },
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
        </div>
      </form>

    </div>
  );
};

export default GigSelect;