import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const routes = (
	<Router>
		<Route path="/" component={App} />
	</Router>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
