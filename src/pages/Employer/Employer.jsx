import React from 'react';
import {
  Switch, Route, useRouteMatch, Redirect,
} from 'react-router-dom';
import ESignIn from './ESignIn/ESignIn.jsx';
import ESignUp from './ESignUp/ESignUp.jsx';
import EVerify from './EVerify/EVerify.jsx';
import EDashboard from './EDashboard/EDashboard.jsx';
import ESettings from './ESettings/ESettings.jsx';
import JobForm from './EDashboard/JobForm/JobForm.jsx';
import FirstPayment from './EDashboard/PaymentGateway/FirstPayment.jsx';
import SecondPayment from './EDashboard/PaymentGateway/SecondPayment.jsx';
import GigSelect from './EDashboard/PaymentGateway/GigSelect.jsx';
import JobViewer from './EDashboard/JobViewer/JobViewer.jsx';
import MatchViewer from './EDashboard/MatchViewer/MatchViewer.jsx';
import EForgotPassword from './EForgotPassword/EForgotPassword.jsx';

const Employer = () => {
  const { path, url } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path ={path}>
          <Redirect to={`${path}/sign-in`} />
        </Route>

        <Route exact path={`${path}/sign-in`} component={ESignIn}/>
        <Route path={`${path}/sign-up`} component={ESignUp} />
        <Route path={`${path}/employerEmailVerify`} component={EVerify} />
        <Route path={`${path}/settings`} component={ESettings}/>
        <Route path={`${path}/dashboard`} component={EDashboard} />
        <Route path={`${path}/addJob`} component={JobForm} />
        <Route path={`${path}/gigSelect`} component={GigSelect} />
        <Route path={`${path}/firstPayment`} component={FirstPayment} />
        <Route path={`${path}/secondPayment`} component={SecondPayment} />
        <Route path={`${path}/jobs/`} component={JobViewer}/>
        <Route path={`${path}/match/`} component={MatchViewer} />
        <Route path={`${path}/forgot-password`} component={EForgotPassword} />
      </Switch>
    </div>
  );
};

export default Employer;