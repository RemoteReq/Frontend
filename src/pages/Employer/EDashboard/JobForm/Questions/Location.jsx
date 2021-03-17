import React from 'react';
import Select from 'react-select';
import locations from '#assets/inputs/new/new-locations.js';
import TimeZoneSelector from '#parts/TimeZoneSelector.jsx';

const Location = ({
  job, goPrev, handleChange, handleSelect, addJob,
}) => {
  return (
    <div className="job-form">

      <TimeZoneSelector value={job.timeZone} handleChange={handleChange}/>

      <label>State</label>
      <Select
        name="location"
        value={locations.filter((location) => { return location.value === job.location; })}
        onChange={handleSelect}
        options={locations}
      />

          <label>Zip Code</label>
            <input
              value={job.zipCode}
              type="number"
              name="zipCode"
              onChange={handleChange}
            />

      <div className="job-form-nav-buttons">
        <button
          className="button-prev"
          onClick={goPrev}
        >&laquo; Prev
        </button>

        <button
          className="button-next"
          onClick={addJob}
        >Submit &raquo;
        </button>
      </div>
    </div>
  );
};

export default Location;