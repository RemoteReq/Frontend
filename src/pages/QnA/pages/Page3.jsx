import React from 'react';
import { Link } from 'react-router-dom';
import Radio from '#parts/Radio.jsx';

const Page3 = ({
  handleChange, increaseProgress, decreaseProgress,
}) => {
  return (
    <div className="QnA-page">
      <p>Your experience</p>
      <p>
        Briefly describe a project you have worked on that is relevant to your desired work interests.
      </p>

      <div className="textarea-div">
        <textarea
          name="projectDescription"
          onChange={handleChange}
        />
      </div>

      <p>
        Provide a sample of your past relevant work (e.g. link to an online portfolio)
      </p>
      <input
        name="sampleProjectLink"
        onChange={handleChange}
      />

      <p>
        All of our jobs are remote. Do you have access to (e.g. a computer, internet connection, a telephone and a private space) to work remotely?
      </p>

      <div className="radios">
        <Radio value={true} label="Yes" name="isWorkRemotely" handler={handleChange}/>

        <Radio value={false} label="No" name="isWorkRemotely" handler={handleChange}/>
      </div>

      <div className="form-nav">
        <Link to="/QnA/2">
          <button
            className="button-prev"
            onClick={decreaseProgress}
          >&laquo; Prev</button>
        </Link>

        <Link to="/QnA/4">
          <button
            className="button-next"
            onClick={increaseProgress}
          >Next &raquo;</button>
        </Link>
      </div>


    </div>
  );
};

export default Page3;