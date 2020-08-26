import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Home from '../pages/Home';
import SignUp from '../pages/SignUp';
import SignIn from '../pages/SignIn';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Dashboard from '../pages/Dashboard';
import NewItem from '../pages/NewItem';
import EditItem from '../pages/EditItem';
import Profile from '../pages/Profile';

import ManagerPage from '../pages/ManagerPages/ManagerPage';
import ManagerCategories from '../pages/ManagerPages/Categories';
import ManagerCustumers from '../pages/ManagerPages/Custumers';
import CustumerDetails from '../pages/ManagerPages/CustumerDetails';
import PendentItems from '../pages/ManagerPages/PendentItems';
import AvailableItems from '../pages/ManagerPages/AvailableItems';
import SoldItems from '../pages/ManagerPages/SoldItems';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} isHome />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
    <Route path="/forgot-password" component={ForgotPassword} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/new-item" component={NewItem} isPrivate />
    <Route path="/item/:item_id" component={EditItem} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />

    <Route path="/manager" exact component={ManagerPage} isPrivate />
    <Route path="/manager/categories" component={ManagerCategories} isPrivate />
    <Route
      path="/manager/custumers"
      exact
      component={ManagerCustumers}
      isPrivate
    />
    <Route
      path="/manager/custumers/:custumer_id"
      component={CustumerDetails}
      isPrivate
    />
    <Route path="/manager/pendent-items" component={PendentItems} isPrivate />
    <Route
      path="/manager/available-items"
      component={AvailableItems}
      isPrivate
    />
    <Route path="/manager/sold-items" component={SoldItems} isPrivate />
  </Switch>
);

export default Routes;
