import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import GestorIngreso from '../components/GestorIngreso/GestorIngreso';
import { HomeRoutes } from './HomeRoutes';

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/auth" component={ GestorIngreso } />
          <Route path="/" component={ HomeRoutes } />
        </Switch>
      </div>
    </Router>
  );
};
