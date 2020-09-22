// import { Switch, Route } from '@material-ui/core';
import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Home } from '../components/Home/Home';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Profile } from '../components/Profile/Profile';

export const HomeRoutes = () => {
  return (
    <>
      <Navbar />

      <div>
        <Switch>
          <Route exact path="/home" component={ Home } />
          <Route exact path="/profile" component={ Profile } />
          <Redirect to="/auth" />
        </Switch>
      </div>
    </>
  );
};
