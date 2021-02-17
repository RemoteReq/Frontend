import React from 'react';
import { Link } from 'react-router-dom';
import ENav from '../../ENav/ENav.jsx';

const GigSelect = () => {
  return (
    <div className="gig-select-page">
      <ENav />

      <form>
        <p>Are you hiring full time or part time?</p>

        <div className="gig-select">
          <Link
            className="gig-select-choice"
            to={{
              pathname: '/employer/addJob',
              state: { price: 100.00, afterHirePrice: 2500.00, jobType: 'Full Time' },
            }}
          >
            <div>
              <h3>Full Time</h3>
              <div className="gig-select-image">
                {/* <img/> */}
              </div>
            </div>
          </Link>

          <Link
            className="gig-select-choice"
            to={{
              pathname: '/employer/addJob',
              state: { price: 100.00, afterHirePrice: 1000.00, jobType: 'Part Time' },
            }}
          >
            <div>
              <h3>Part Time</h3>
              <div className="gig-select-image">
                {/* <img/> */}
              </div>
            </div>
          </Link>
        </div>

        <p>Pay $100 to view your candidate matches.</p>
      </form>

    </div>
  );
};

export default GigSelect;