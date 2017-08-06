import React from 'react';
import { Router, Route, browserHistory, IndexRoute, hashHistory } from 'react-router';

import Hello from './components/hello';
import Bye from './components/bye';

export default (
    <Router history={hashHistory}>
        <Route path="/" component={Hello} />
        <Route path="bye" component={Bye} />
    </Router>
)
