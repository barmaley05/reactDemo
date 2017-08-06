"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import store from '../../store';

class Bye extends React.Component {
    render() {
        return <h1>Bye, { this.props.users}!</h1>;
    }
}

const mapStateToProps = function(store) {
    return {
        users: store.userState.users
    };
}

export default connect(mapStateToProps)(Bye)