import React from 'react';
import { Route, Switch } from 'react-router';
import {
  Header,
  Home,
  Work,
  About,
  Contact
} from '../containers';

const routes = (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/work" component={Work} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  </div>
);

export default routes;
