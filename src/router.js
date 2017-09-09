import React from 'react';
import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';

import Hello from './components/hello';
import Bye from './components/bye';
import Menu from './components/menu';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Menu} >
            <Route path="hello" component={Hello} />
            <Route path="bye" component={Bye} />
        </Route>
    </Router>
)
