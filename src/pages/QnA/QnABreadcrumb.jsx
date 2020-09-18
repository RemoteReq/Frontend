import React from 'react';
import { Link } from 'react-router-dom';

const QnABreadCrumb = ({ progress }) => {
  return (
    <div className="breadcrumbs">
      <Link to="/QnA/1">
        <button
          className={`${progress > 0 ? 'complete' : 'incomplete'}`}
        >Basics</button>
      </Link>

      <Link to="/QnA/2">
        <button
          className={`${progress > 1 ? 'complete' : 'incomplete'}`}
        >Availability</button>
      </Link>

      <Link to="/QnA/3">
        <button
          className={`${progress > 2 ? 'complete' : 'incomplete'}`}
        >Experience</button>
      </Link>

      <Link to="/QnA/4">
        <button
          className={`${progress > 3 ? 'complete' : 'incomplete'}`}
        >Location</button>
      </Link>
    </div>
  );
};

export default QnABreadCrumb;