// My guess is that it would look similar to the First Payment Gateways except with a different price
// To check out with based on the job type.

import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import DropIn from 'braintree-web-drop-in-react';
import axios from 'axios';
import Eauth from '../../EAuth/EAuth.jsx';
import ENav from '../../ENav/ENav.jsx';

class SecondPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // jobReqPurchased: false,
    };

    this.purchase = this.purchase.bind(this);
  }

  componentDidMount() {
    Eauth.generateClientToken();

    const newToken = localStorage.getItem('clientToken');

    this.setState({
      clientToken: newToken,
      ...this.props.location.state,
    });
  }

  purchase(e) {
    e.preventDefault();

    this.instance.requestPaymentMethod()
      .then((response) => {
        console.log(response);

        axios({
          url: 'http://3.21.186.204:3030/api/jobs/checkoutAfterHired',
          method: 'POST',
          headers: {
            token: localStorage.getItem('e-session'),
          },
          data: {
            amount: 1000,
            paymentMethodNonce: response.nonce,
            jobId: this.props.location.state.jobId,
          },
        })
          .then((result) => {
            console.log('after purchase', result);
            if (result.status) {
              this.props.history.push('/employer/dashboard');
            }
          })
          .catch((error) => {
            console.log(error);
          // catch; error status message
          });
      });
  }

  render() {
    console.log(
      this.props.location.state,
      this.state,
    );

    const { jobId } = this.state;

    // Drop In
    return (
      <div className="first-payment">
        <ENav />

        <form>
          <h3>Checkout</h3>
          <h3>Total: ${this.props.location.state.price || '2500'}</h3>
          <p className="small-paragraph">
            Congratulations on your new hire!
          </p>
          {
            this.state.clientToken
              ? <div>
                  <DropIn
                    options={{
                      authorization: this.state.clientToken,
                      vaultManager: true,
                      paypal: {
                        flow: 'vault',
                        amount: '1000.00',
                        currency: 'USD',
                      },
                    }}
                    onInstance={(instance) => { return this.instance = instance; } }
                    />

                  <div className="form-handler">
                    <button
                      className="button-1"
                      onClick={(e) => { return this.purchase(e); }}
                      >Pay Placement Fee
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

export default SecondPayment;