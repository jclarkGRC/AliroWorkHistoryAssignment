import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

export default (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={PageNotFound} />
    </Switch>
  </HashRouter>
);
