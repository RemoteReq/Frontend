import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ENav from '../../ENav/ENav.jsx';
import Radio from '#parts/Radio.jsx';

class GigSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availability: '',
      jobType: '',
    };

    this.handlePriceOption = this.handlePriceOption.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    }, () => {
      const { jobType } = this.state;

      console.log(this.state);

      this.handlePriceOption(jobType);
    });
  }

  handlePriceOption(jobType) {
    if (jobType === 'Full Time') {
      this.setState({
        price: 100.00,
        afterHirePrice: 2500.00,
      }, () => { console.log(this.state); });
    }

    if (jobType === 'Part Time') {
      this.setState({
        price: 100.00,
        afterHirePrice: 1000.00,
      }, () => { console.log(this.state); });
    }
  }

  render() {
    const {
      jobType, availability, price, afterHirePrice,
    } = this.state;

    return (
      <div className="gig-select-page">
        <ENav/>

        <div className="gig-select-2">

          <p className="small-paragraph">Is this job Remote, Flexible (Can be both Remote or On-site), or On-site?</p>

          <div
            className="availability-radios"
            onChange={(e) => { this.handleChange(e); }}
          >
            <Radio
              value="Remote"
              label="Remote"
              name="availability"
            />
            <Radio
              value="Flexible"
              label="Flexible"
              name="availability"
            />
            <Radio
              value="On-site"
              label="On-site"
              name="availability"
            />
          </div>

          <p className="small-paragraph">Is this job a Full Time or a Part Time job?</p>


          <div
            className="availability-radios"
            onChange={(e) => { this.handleChange(e); }}
          >
            <Radio
              value="Full Time"
              label="Full Time"
              name="jobType"
            />
            <Radio
              value="Part Time"
              label="Part Time"
              name="jobType"
            />
          </div>

          <div className="job-form-nav-buttons">
            <div></div>

            <Link
              to={{
                pathname: '/employer/job-form-2',
                state: {
                  availability,
                  jobType,
                  price,
                  afterHirePrice,
                },
              }}
            >
              <button className="button-next">Next &raquo;</button>
            </Link>
          </div>
        </div>

      </div>
    );
  }
}

export default GigSelect;