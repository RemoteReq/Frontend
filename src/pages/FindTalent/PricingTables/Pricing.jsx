import React, { Component } from 'react';
import PricingTable from './PricingTable.jsx';

const PartTimePrices = [
  {
    availability: 'Remote',
    accessPrice: 50,
    hirePrice: 250,

  },
  {
    availability: 'Flexible',
    accessPrice: 50,
    hirePrice: 450,
  },
  {
    availability: 'On-site',
    accessPrice: 75,
    hirePrice: 750,
  },
];

const FullTimePrices = [
  {
    availability: 'Remote',
    accessPrice: 50,
    hirePrice: 450,

  },
  {
    availability: 'Flexible',
    accessPrice: 75,
    hirePrice: 750,
  },
  {
    availability: 'On-site',
    accessPrice: 100,
    hirePrice: 900,
  },
];

class Pricing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobType: 'Part Time',
      jobPrices: PartTimePrices,
    };

    this.togglePrices = this.togglePrices.bind(this);
  }

  togglePrices() {
    const { jobType } = this.state;

    if (jobType === 'Part Time') {
      this.setState({
        jobType: 'Full Time',
        jobPrices: FullTimePrices,
      }, () => { console.log(this.state); });
    } else {
      this.setState({
        jobType: 'Part Time',
        jobPrices: PartTimePrices,
      }, () => { console.log(this.state); });
    }
  }

  render() {
    const { jobType, jobPrices } = this.state;

    return (
      <div className="pricing">

        <PricingTable
          jobType={jobType}
          jobPrices={jobPrices}
          togglePrices={this.togglePrices}
        />

      </div>
    );
  }
}

export default Pricing;