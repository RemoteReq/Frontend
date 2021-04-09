import React from 'react';

const Breadcrumbs = ({ progress, setProgress }) => {
  return (
    <div className="breadcrumbs">
      <button
        className={`small-button ${progress > 0 ? 'complete' : 'incomplete'}`}
        value={1}
        onClick={setProgress}
      >Basics</button>

      {/* <div className={`breadcrumb-bar ${progress > 1 ? 'complete' : 'incomplete'}`}></div> */}
      <div>
        <p className={`progress-arrow ${progress > 1 ? 'complete' : 'incomplete'}`} >&#8250;</p>
      </div>

      <button
        className={`small-button ${progress > 1 ? 'complete' : 'incomplete'}`}
        value={2}
        onClick={setProgress}
      >Availability</button>

      {/* <div className={`breadcrumb-bar ${progress > 2 ? 'complete' : 'incomplete'}`}></div> */}
      <div>
        <p className={`progress-arrow ${progress > 2 ? 'complete' : 'incomplete'}`} >&#8250;</p>
      </div>

      <button
        className={`small-button ${progress > 2 ? 'complete' : 'incomplete'}`}
        value={3}
        onClick={setProgress}
      >Experience</button>

      {/* <div className={`breadcrumb-bar ${progress > 3 ? 'complete' : 'incomplete'}`}></div> */}
      <div>
        <p className={`progress-arrow ${progress > 3 ? 'complete' : 'incomplete'}`} >&#8250;</p>
      </div>

      <button
        className={`small-button ${progress > 3 ? 'complete' : 'incomplete'}`}
        value={4}
        onClick={setProgress}
      >Location</button>

    </div>
  );
};

export default Breadcrumbs;