import React from 'react';

const DevBanner = ({ env }) => {
  if (env === 'development') {
    return (
      <div className="beta-banner">
      <p className="small-paragraph">Development Mode</p>
      </div>
    );
  }
  return (
      <></>
  );
};

export default DevBanner;