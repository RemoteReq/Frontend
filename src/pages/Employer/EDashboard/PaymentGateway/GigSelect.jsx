import React from 'react';
import { Link } from 'react-router-dom';
import ENav from '../../ENav/ENav.jsx';

const GigSelect = () => {
  return (
    <div className="gig-select-page">
      <ENav />

      <form>
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
              <p>$100 to view your matched candidates</p>
              <p>$2400 upon successful hire</p>
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
              <p>$100 to view your matched candidates</p>
              <p>$900 upon successful hire</p>
            </div>
          </Link>
        </div>
      </form>

    </div>
  );
};

export default GigSelect;