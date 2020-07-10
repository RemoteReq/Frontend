import React, { Component } from 'react';
import { useLocation } from 'react-router-dom';

import Auth from '../../components/Auth/Auth.jsx';

const verifyQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Verify = () => {
  const query = verifyQuery();

  return (
    <VerifyPoster verifyID={query.get('id')}/>
  );
};


class VerifyPoster extends Component {
  componentDidMount() {
    console.log('making verify request', this.props.verifyID);

    Auth.verify(this.props.verifyID);
  }

  render() {
    return (
    <div>
      Processing your verification request . . .
    </div>
    );
  }
}

export default Verify;