import React from 'react';

const IconAndTitle = ({ title, icon }) => {
  return (
    <div className="icon-and-title">
      <img src={icon}/>

      <h5>{title}</h5>
    </div>
  );
};

export default IconAndTitle;