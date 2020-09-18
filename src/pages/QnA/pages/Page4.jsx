import React from 'react';
import { Link } from 'react-router-dom';

const Page4 = () => {
  return (
    <div className="QnA-page">
      <p>
        How many years of relevant work experience do you have for the kind of work you're seeking?
      </p>
      <input type="number"/>

      <p>
        Input all relevant skills you have to the kind of work you are seeking
      </p>

      <p>
        Zip code (we use this to match you to opportunities working on causes your interested in within your local are)
      </p>
      <input type="number" min="0" max="99999"/>


      <div className="form-nav">
        <Link to="/QnA/3">
          <button className="button-prev">&laquo; Prev</button>
        </Link>

        <Link to="/dashboard">
          <button className="button-next">Submit</button>
        </Link>
      </div>
    </div>
  );
};

export default Page4;