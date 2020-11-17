import React from 'react';
import Preloader from '#components/svgs/Preloader.jsx';

const Page404 = () => {
  return (
  <div className="page-404">

    <div className="message">
      <h1>404</h1>

      {/* <Preloader color="blue"/>g */}

      <p>
        {"We're sorry but the URL you are trying to visit does not exist."}
      </p>
    </div>
  </div>
  );
};

export default Page404;