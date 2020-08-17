import React, { Component } from 'react';
import DropIn from 'braintree-web-drop-in-react';
import axios from 'axios';
import ENav from '../../ENav/ENav.jsx';
import Eauth from '../../EAuth/EAuth.jsx';
import Divider from '#parts/Divider.jsx';

class JobForm extends Component {
  constructor(props) {
    super(props);

    this.instance;

    this.state = {
      title: '',
      companyName: '',
      industryType: '',
      role: '',
      jobDetails: '',
      keySkills: [''],
      ctc: '',
      minExperience: 0,
      maxExperience: 0,
      location: '',
      numberOfCandidates: 0,
      percentageMatch: 0,
      transactionIdForAddJob: '',
      clientToken: null,
    };

    this.purchase = this.purchase.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    Eauth.generateClientToken();

    const newToken = localStorage.getItem('clientToken');

    this.setState({
      clientToken: newToken,
    });
  }

  purchase(e) {
    e.preventDefault();

    this.instance.requestPaymentMethod()
      .then((response) => {
        console.log(response);

        axios({
          url: 'http://3.21.186.204:3030/api/jobs/checkoutForAddjob',
          method: 'POST',
          headers: {
            token: localStorage.getItem('e-session'),
          },
          data: {
            amount: 5.20,
            paymentMethodNonce: response.nonce,
          },
        })
          .then((result) => {
            console.log(result);
          // then on success, use addJob API
          })
          .catch((error) => {
            console.log(error);
          // catch; error status message
          });
      });
  }

  handleChange(e) {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    }, () => { return console.log(this.state); });
  }

  addJob(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="add-job">
        <ENav />

        <form className="job-form">
          <h4>Add Job</h4>

          <div className="grid-1fr-1fr spaced">

            <div>
              <label>Job Title</label>
              <input
                name="title"
                onChange={(e) => { return this.handleChange(e); }}
              />

              <label>Company Name</label>
              <input
                name="companyName"
                onChange={(e) => { return this.handleChange(e); }}
              />

              <label>Industry</label>
              <input
                name="industryType"
                onChange={(e) => { return this.handleChange(e); }}
              />

              <label>Role</label>
              <input
                name="role"
                onChange={(e) => { return this.handleChange(e); }}
              />

              <label>Job Details</label>
              <div className="textarea-div">
                <textarea
                  className="aboutMe"
                  name="jobDetails"
                  onChange={(e) => { return this.handleChange(e); }}
                />
              </div>


              <label>Key Skills</label>
              <input
                name=""
                onChange={(e) => { return this.handleChange(e); }}
              />
            </div>

            <div>
              <label>CTC</label>
              <input
                type="number"
                name="ctc"
                onChange={(e) => { return this.handleChange(e); }}
              />

              <label>Minimum Years of Experience</label>
              <input
                type="number"
                name="minExperience"
                onChange={(e) => { return this.handleChange(e); }}
              />

              <label>Maximum Years of Experience</label>
              <input
                type="number"
                name="maxExperience"
                onChange={(e) => { return this.handleChange(e); }}
              />

              <label>Location</label>
              <input
                name="location"
                onChange={(e) => { return this.handleChange(e); }}
              />

              <label>Number of Candidates</label>
              <input
                type="number"
                name="numberOfCandidates"
                onChange={(e) => { return this.handleChange(e); }}
              />

              <label>Percentage Match</label>
              <input
                type="number"
                name="percentageMatch"
                onChange={(e) => { return this.handleChange(e); }}
              />
            </div>
          </div>

          <h4>Checkout</h4>

          {
            this.state.clientToken
              ? <div>
                  <DropIn
                    options={{ authorization: this.state.clientToken, vaultManager: true }}
                    onInstance={(instance) => { return this.instance = instance; } }
                    />

                  <div className="form-handler">
                    <button
                      className="button-1"
                      onClick={(e) => { return this.purchase(e); }}
                      >Submit job Req
                    </button>
                  </div>
                </div>
              : <div>Loading Drop In ...</div>
          }

        </form>
      </div>
    );
  }
}

export default JobForm;