import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './Homepage';
import Companies from './Companies';
import Company from './Company';
import Jobs from './Jobs';
import Profile from './Profile';
import SignUp from './SignUp';
import Login from './Login';

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/companies">
            <Companies />
          </Route>
          <Route exact path="/companies/:handle">
            <Company />
          </Route>
          <Route exact path="/jobs">
            <Jobs />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default Routes;