import React from 'react';
import { Route, Switch } from 'react-router';
import Base from '../containers/Base';
import Home from '../containers/Home';
import Work from '../containers/Work';
import About from '../containers/About';
import Contact from '../containers/Contact';

const routes = (
  <div>
    <Base>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Base>
  </div>
);

export default routes;
