import React from 'react';
import { Link } from 'react-router-dom';

const MiddleSection = ({ header, p, link, to }) => {
  return (
    <div className="middle-section">
      <h2>{header}</h2>
      <p>{p}</p>
      <Link to={to} className="large-link">{link}</Link>
    </div>
  )
}

export default MiddleSection;