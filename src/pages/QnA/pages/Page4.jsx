import React from 'react';
import { Link } from 'react-router-dom';
import { locations } from '#assets/inputs/inputs';

const Page4 = ({
  handleChange, submitAnswers, decreaseProgress,
}) => {
  return (
    <div className="QnA-page">
      <br/>
      <br/>

      <p>
        Zip Code
      </p>
      <input type="number" min="0" max="99999" onChange={handleChange} name="address"/>

      <br/>
      <br/>

      <p>State</p>
      <div className="select">

      <select name="location" onChange={handleChange}>
        <option>-----</option>
        {
          locations.map((location, key) => {
            return (
              <option key={key} value={location}>{location}</option>
            );
          })
          }
      </select>
      </div>


      <div className="form-nav">
        <Link to="/QnA/3">
          <button
            className="button-prev"
            onClick={decreaseProgress}
          >&laquo; Prev</button>
        </Link>

        <Link to="/QnA/5">
          <button className="button-next" onClick={submitAnswers}>Submit</button>
        </Link>
      </div>
    </div>
  );
};

export default Page4;