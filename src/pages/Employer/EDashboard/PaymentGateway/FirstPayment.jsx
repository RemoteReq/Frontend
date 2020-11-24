import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import DropIn from 'braintree-web-drop-in-react';
import axios from 'axios';
import Eauth from '../../EAuth/EAuth.jsx';
import ENav from '../../ENav/ENav.jsx';
import Preloader from '#components/svgs/Preloader.jsx';

class FirstPayment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobReqPurchased: false,
      requestInProgress: false,
    };

    this.purchase = this.purchase.bind(this);
    this.enablePreloader = this.enablePreloader.bind(this);
  }

  componentDidMount() {
    Eauth.generateClientToken(() => {
      const newToken = localStorage.getItem('clientToken');

      this.setState({
        clientToken: newToken,
        ...this.props.location.state,
      });
    });
  }

  enablePreloader() {
    this.setState({
      requestInProgress: true,
    }, () => {
      setTimeout(() => {
        this.setState({
          requestInProgress: false,
        });
      }, 2000);
    });
  }

  purchase(e) {
    e.preventDefault();

    this.enablePreloader();

    this.instance.requestPaymentMethod()
      .then((response) => {
        console.log(response);

        axios({
          url: 'http://18.188.99.44:3030/api/jobs/checkoutForAddjob',
          method: 'POST',
          headers: {
            token: localStorage.getItem('e-session'),
          },
          data: {
            amount: this.state.price,
            paymentMethodNonce: response.nonce,
            jobId: this.state.jobId,
          },
        })
          .then((result) => {
            console.log('after purchase', result);
            // then on success, redirect Employer to JobForm
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
    const { clientToken } = this.state;
    const { requestInProgress } = this.state;

    return (

      <div className="first-payment">
        <ENav />

        {
          clientToken
            ? <form>

          <div className={`form-preloader ${requestInProgress ? 'show' : 'hide'}`}>
            <Preloader color="blue"/>

            <p>Processing payment</p>
          </div>

          <h3>Checkout</h3>
          <h3>Total: ${this.props.location.state.price}</h3>
          <p className="small-paragraph">
            After purchasing, our algorithm will begin matching your Job Req to well suited candidates.
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
                        amount: '100.00',
                        currency: 'USD',
                      },
                    }}
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
            : <div>Generating Client Token ...</div>
    }
      </div>

    );
  }
}

export default FirstPayment;