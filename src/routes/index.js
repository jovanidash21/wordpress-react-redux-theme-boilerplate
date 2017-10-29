import React from 'react';
import { Switch } from 'react-router';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Work from '../containers/Work';
import Blog from '../containers/Blog';
import About from '../containers/About';
import Contact from '../containers/Contact';

const routes = (
  <div>
    <Switch>
      <Layout exact path="/" component={Home} />
      <Layout exact path="/work" component={Work} />
      <Layout exact path="/blog" component={Blog} />
      <Layout exact path="/about" component={About} />
      <Layout exact path="/contact" component={Contact} />
    </Switch>
  </div>
);

export default routes;
