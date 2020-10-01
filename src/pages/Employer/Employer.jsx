import React from 'react';
import {
  Switch, Route, Link, useRouteMatch, Redirect,
} from 'react-router-dom';
import ESignIn from './ESignIn/ESignIn.jsx';
import ESignUp from './ESignUp/ESignUp.jsx';
import EVerify from './EVerify/EVerify.jsx';
import EDashboard from './EDashboard/EDashboard.jsx';
import ESettings from './ESettings/ESettings.jsx';
import JobForm from './EDashboard/JobForm/JobForm.jsx';
import FirstPayment from './EDashboard/PaymentGateway/FirstPayment.jsx';
import GigSelect from './EDashboard/PaymentGateway/GigSelect.jsx';
import JobViewer from './EDashboard/JobViewer.jsx';
import MatchViewer from './EDashboard/MatchViewer/MatchViewer.jsx';

const Employer = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      {/* <Link to={`${url}/signIn`}>
        <button>Sign In</button>
      </Link> */}

      <Switch>
        <Route exact path ={path}>
          <Redirect to={`${path}/signIn`} />
        </Route>

        <Route exact path={`${path}/signIn`} component={ESignIn}/>
        <Route path={`${path}/signUp`} component={ESignUp} />
        <Route path={`${path}/employerEmailVerify`} component={EVerify} />
        <Route path={`${path}/settings`} component={ESettings}/>
        <Route path={`${path}/dashboard`} component={EDashboard} />
        <Route path={`${path}/addJob`} component={JobForm} />
        <Route path={`${path}/gigSelect`} component={GigSelect} />
        <Route path={`${path}/firstPayment`} component={FirstPayment} />
        <Route path={`${path}/jobs/`} component={JobViewer}/>
        <Route path={`${path}/match/`} component={MatchViewer} />
      </Switch>
    </div>
  );
};

export default Employer;