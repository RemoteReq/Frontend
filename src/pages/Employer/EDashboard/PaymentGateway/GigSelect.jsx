import React from 'react';
import { Link } from 'react-router-dom';

const GigSelect = () => {
  const cause = '';

  return (
    <div className="gig-select-page">
      <form>
        <div className="gig-select">
          <Link
            to={{
              pathname: '/employer/addJob',
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
              pathname: '/employer/addJob',
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
        </div>

        <div className="cause-select">

        <p>
          What cause does this job concern?
        </p>
          <select>
            <option>-----</option>
            <option>Educational Equity (K-12)</option>
            <option>Immigrant Rights</option>
            <option>Voting Rights</option>
            <option>Youth Extracurriculars (sports, band, etc.)</option>
            <option>Environmental Rights</option>
            <option>Animal Rights</option>
            <option>US Military Veterans</option>
            <option>LGBTQ rights </option>
            <option>Health and Medical Care</option>
            <option>Women’s Rights </option>
            <option>Community Development </option>
            <option>Criminal Justice Reform</option>
            <option>Food Insecurity</option>
            <option>Water and Sanitation</option>
            <option>Arts and Culture </option>
            <option>Religion</option>
          </select>
        </div>
      </form>

    </div>
  );
};

export default GigSelect;