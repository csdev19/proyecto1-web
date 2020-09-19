// import { Switch, Route } from '@material-ui/core';
import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Home } from '../components/Home/Home';
import { Redirect, Route, Switch } from 'react-router-dom';

export const HomeRoutes = () => {
  return (
    <>
      <Navbar />

      <div>
        <Switch>
          <Route exact path="/home" component={ Home } />
          <Redirect to="/auth" />
        </Switch>
      </div>
    </>
  );
};
