import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import Home from './components/pages/Home/Home.component';
import history from './history';

import {CitiesProvider} from './store/context/cities.context';

const AppRouter = () => (
	<CitiesProvider>
		<Router history={history}>
			<Switch>
				<Route exact component={Home} path='/' />
			</Switch>
		</Router>
	</CitiesProvider>
);

export default AppRouter;
