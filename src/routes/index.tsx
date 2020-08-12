import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />

    <Route path="/dashboard" component={Dashboard} />
    <Route path="/profile" component={Profile} />
  </Switch>
);

export default Routes;
