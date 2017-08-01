import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App'
import Home from './home/Home'
import Hello from './Hello'
import registerServiceWorker from './registerServiceWorker';

render((
    <Router history={browserHistory}>
      <Route component={App}>
        <Route path="/" component={Home} />
        <Route path="/Hello" component={Hello} />
      </Route>
    </Router>
), document.getElementById('root'));
// registerServiceWorker();
