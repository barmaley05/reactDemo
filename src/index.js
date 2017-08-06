"use strict";

import ReactDOM from 'react-dom';
import React from 'react';
import { connect } from 'react-redux'
import store from './store/index.js';
import { Provider } from 'react-redux';
import router from './router';

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>
    , document.getElementById('app'));