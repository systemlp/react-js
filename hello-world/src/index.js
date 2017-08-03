import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import _Button from './button/_Button';
import _Icon from './icon/_Icon';
import _Grid from './grid/_Grid';
import Home from './home/Home';
import Hello from './Hello';
// import registerServiceWorker from './registerServiceWorker';

render((
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Home}/>
            <Route path="/button" component={_Button}/>
            <Route path="/icon" component={_Icon}/>
            <Route path="/grid" component={_Grid}/>
            <Route path="/Hello" component={Hello}/>
        </Route>
    </Router>
), document.getElementById('root'));
// registerServiceWorker();
