import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './styles/font.scss';
import './styles/common.scss';

import AppRoutes from './routes';

const rootElement = document.getElementById('root');

ReactDOM.render(<AppRoutes />, rootElement);

serviceWorker.unregister();
