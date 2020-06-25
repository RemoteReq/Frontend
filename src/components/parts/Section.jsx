import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ header, p, link, to }) => {
  return (
    <div className="section">
      <h2>{header}</h2>
      <p>{p}</p>
      <Link to={to} className="large-link">{link}</Link>
    </div>
  )
}

export default Section;