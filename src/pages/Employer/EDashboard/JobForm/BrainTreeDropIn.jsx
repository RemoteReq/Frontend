import React from 'react';
import dropin from 'braintree-web-drop-in-react';

const BrainTreeDropIn = ({ clientToken }) => {
  if (!clientToken) {
    return (
        <div>
          <h1>Loading...</h1>
        </div>
    );
  }
  return (
        <div>
          <DropIn
            options={{ authorization: this.state.clientToken }}
            onInstance={(instance) => { return (this.instance = instance); }}
          />
          <button onClick={this.buy.bind(this)}>Buy</button>
        </div>
  );
};

export default BrainTreeDropIn;