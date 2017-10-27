import React from 'react';
import { Switch } from 'react-router';
import Base from '../containers/Base';
import Home from '../containers/Home';
import Work from '../containers/Work';
import About from '../containers/About';
import Contact from '../containers/Contact';

const routes = (
  <div>
    <Switch>
      <Base exact path="/" component={Home} />
      <Base exact path="/work" component={Work} />
      <Base exact path="/about" component={About} />
      <Base exact path="/contact" component={Contact} />
    </Switch>
  </div>
);

export default routes;
