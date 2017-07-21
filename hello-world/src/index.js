import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import App from './App'
import Home from './home/Home'
import Hello from './Hello'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <HashRouter>
        <App>
            <Route exact path="/" component={Home}/>
            <Route path="/hello" component={Hello}/>
        </App>
    </HashRouter>
), document.getElementById('root'));
registerServiceWorker();
