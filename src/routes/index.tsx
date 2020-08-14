import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import NewItem from '../pages/NewItem';
import Profile from '../pages/Profile';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} isHome />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/new-item" component={NewItem} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
  </Switch>
);

export default Routes;
