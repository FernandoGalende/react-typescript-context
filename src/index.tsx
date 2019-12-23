import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import {CitiesProvider} from './store/context/cities.context';

import './styles/font.scss';
import './styles/common.scss';

import {CitiesList} from './components/hightOrderComponents/CitiesList/CitiesList';

const rootElement = document.getElementById('root');

ReactDOM.render(
	<CitiesProvider>
		<CitiesList />
	</CitiesProvider>,
	rootElement
);

serviceWorker.unregister();
