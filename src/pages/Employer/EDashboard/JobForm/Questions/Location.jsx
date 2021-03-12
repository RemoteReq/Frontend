import React from 'react';
import { locations } from '#assets/inputs/inputs.js';

const Location = ({ goPrev }) => {
  return (
    <div className="job-form">

      <div className="select">
            <label>State</label>
            <select name="location"
              // onChange={handleChange}
            >
              <option>-----</option>
              {
                locations.map((state, i) => {
                  return (
                    <option key={i} value={state}>
                      {state}
                    </option>
                  );
                })
              }
            </select>
          </div>

          <label>Zip Code</label>
            <input
              type="number"
              name="zipCode"
              // onChange={handleNumber}
            />

      <div className="job-form-nav-buttons">
        <button
          className="button-prev"
          onClick={goPrev}
        >&laquo; Prev
        </button>

        <button
          className="button-next"
        >Submit &raquo;
        </button>
      </div>
    </div>
  );
};

export default Location;