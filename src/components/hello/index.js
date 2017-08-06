"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import store from '../../store';
import { Link } from 'react-router';

class Hello extends React.Component {
    render() {
        return <Link to="/bye">Hello, { this.props.users}!</Link>;
    }
}

const mapStateToProps = function(store) {
    return {
        users: store.userState.users
    };
}

export default connect(mapStateToProps)(Hello)