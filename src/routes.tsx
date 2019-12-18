import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import Home from './components/pages/Home/Home.component';
import history from './history';

const AppRouter = () => (
	<Router history={history}>
		<Switch>
			<Route exact component={Home} path='/home' />
			<Route exact component={Home} path='/' />
		</Switch>
	</Router>
);

export default AppRouter;
