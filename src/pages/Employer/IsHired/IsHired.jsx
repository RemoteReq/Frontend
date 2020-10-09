import React, { Component } from 'react';
import { Link, Redirect, useLocation } from 'react-router-dom';
import EAuth from '../EAuth/EAuth.jsx';

// Mimics Verify and EVerify actions which uses wrapper functional components
// that query the URL for parameters

const IsHiredQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const IsHired = () => {
  const query = IsHiredQuery();

  return (
    <IsHiredPoster hireStatus={query.get('status')} jobId={query.get('jobId')}/>
  );
};

class IsHiredPoster extends Component {
  constructor(props) {
    super(props);

    this.state = {
      statusUpdateConfirmation: false,
    };
  }

  componentDidMount() {
    const { hireStatus } = this.props;
    const { jobId } = this.props;

    EAuth.getJobHireStatus(hireStatus, jobId, () => {
      setTimeout(() => {
        this.setState({
          statusUpdateConfirmation: true,
        });
      }, 2000);
    });
  }

  render() {
    const { statusUpdateConfirmation } = this.state;

    return (
      statusUpdateConfirmation

        ? <div>
        <Redirect
          to={{
            pathname: '/employer/secondPayment',
            state: {
              jobId: this.props.jobId,
            },
          }}
        />
      </div>

        : <div className="verify-page">
      <div className="notice">
        <p className="small-paragraph">
          Processing your hiring request . . .
        </p>

        <div>
          <p className="small-paragraph">
            If you&apos;re not redirected,&nbsp;
            <Link to="/employer/dashboard">
              Click Here
            </Link>
          </p>
        </div>
      </div>
    </div>
    );
  }
}

export default IsHired;