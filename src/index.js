"use strict";

import Hello from './components/hello';
import ReactDOM from 'react-dom';
import React from 'react';
import { connect } from 'react-redux'
import store from './store/index.js';

ReactDOM.render(<Hello/>, document.getElementById('app'));