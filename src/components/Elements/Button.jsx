import React from 'react';

const Button = (props) => (
  <a>
    <button className="button">
      {props.text}
    </button>
  </a>
);

export default Button;