import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './App';
import Home from './home/Home';
import _Button from './button/_Button';
import _Icon from './icon/_Icon';
import _Grid from './grid/_Grid';
import _Affix from './affix/_Affix';
import _Cascader from './cascader/_Cascader';
import Hello from './Hello';
// import registerServiceWorker from './registerServiceWorker';

render((
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Home}/>
            <Route path="/button" component={_Button}/>
            <Route path="/icon" component={_Icon}/>
            <Route path="/grid" component={_Grid}/>
            <Route path="/affix" component={_Affix}/>
            <Route path="/cascader" component={_Cascader}/>
            <Route path="/Hello" component={Hello}/>
        </Route>
    </Router>
), document.getElementById('root'));
// registerServiceWorker();
