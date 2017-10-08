import React from 'react';
import { Route, Switch } from 'react-router';
import {
  Home,
  Work,
  About,
  Contact
} from '../containers';

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/work" component={Work} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
  </Switch>
);

export default routes;
