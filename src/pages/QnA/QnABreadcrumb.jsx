import React from 'react';
import { Link } from 'react-router-dom';

const QnABreadCrumb = ({ progress, setProgress }) => {
  return (
    <div className="breadcrumbs">
      <Link to="/QnA/1">
        <button
          className={`small-button ${progress > 0 ? 'complete' : 'incomplete'}`}
          value={1}
          onClick={setProgress}
        >Basics</button>
      </Link>

      <div className={`breadcrumb-bar ${progress > 1 ? 'complete' : 'incomplete'}`}></div>

      <Link to="/QnA/2">
        <button
          className={`small-button ${progress > 1 ? 'complete' : 'incomplete'}`}
          value={2}
          onClick={setProgress}
        >Availability</button>
      </Link>

      <div className={`breadcrumb-bar ${progress > 2 ? 'complete' : 'incomplete'}`}></div>

      <Link to="/QnA/3">
        <button
          className={`small-button ${progress > 2 ? 'complete' : 'incomplete'}`}
          value={3}
          onClick={setProgress}
        >Experience</button>
      </Link>

      <div className={`breadcrumb-bar ${progress > 3 ? 'complete' : 'incomplete'}`}></div>

      <Link to="/QnA/4">
        <button
          className={`small-button ${progress > 3 ? 'complete' : 'incomplete'}`}
          value={4}
          onClick={setProgress}
        >Location</button>
      </Link>
{/*
      <div className={`breadcrumb-bar ${progress > 4 ? 'complete' : 'incomplete'}`}></div>

      <Link to="/QnA/5">
        <button
          className={`small-button ${progress > 4 ? 'complete' : 'incomplete'}`}
          value={5}
          onClick={setProgress}
        >Other</button>
      </Link> */}
    </div>
  );
};

export default QnABreadCrumb;