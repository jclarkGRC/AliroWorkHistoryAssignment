import * as React from "react";
import { Route, Switch } from 'react-router-dom';

// app route components
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';

export default (
	<Switch>
		<Route exact path="/" component={Home}/>
		<Route path="/about" component={About}/>
		<Route path="/contact" component={Contact}/>
		<Route component={PageNotFound}/>
	</Switch>
);