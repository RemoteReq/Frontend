import React from 'react';
import {
  Switch, Route, Link, useRouteMatch, Redirect,
} from 'react-router-dom';
import ESignIn from './SignIn/SignIn.jsx';
import ESignUp from './SignUp/SignUp.jsx';

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
      </Switch>
    </div>
  );
};

export default Employer;