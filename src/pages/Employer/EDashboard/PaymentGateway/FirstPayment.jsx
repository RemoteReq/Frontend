import React, { Component } from 'react';
import DropIn from 'braintree-web-drop-in-react';
import axios from 'axios';
import Eauth from '../../EAuth/EAuth.jsx';
import ENav from '../../ENav/ENav.jsx';


class FirstPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
    this.purchase = this.purchase.bind(this);
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
            amount: 100.00,
            paymentMethodNonce: response.nonce,
          },
        })
          .then((result) => {
            console.log(result);
          // then on success, redirect Employer to JobForm
          })
          .catch((error) => {
            console.log(error);
          // catch; error status message
          });
      });
  }

  render() {
    // Drop In
    return (
      <div className="first-payment">
        <ENav />

        <form>
          <h3>Checkout</h3>

          <h3>Total: $100.00</h3>
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
                      >Buy Job Req
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

export default FirstPayment;