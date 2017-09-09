"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import store from '../../store';
import { Link } from 'react-router';
import Nav from 'react-bootstrap/lib/Nav';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem  from 'react-bootstrap/lib/NavItem';
import './bootstrap.css';

class Menu extends React.Component {
    constructor() {
        super();
        this.state = {
            activePlace: 0
        };
    }
    render() {
        const activePlace = this.state.activePlace;
        return <div>
                    <Nav bsStyle="pills" stacked activeKey={activePlace} onSelect={index => {
                        this.setState({ activePlace: index });
                    }} >
                        <NavItem eventKey={1} href="#/hello">Hello</NavItem>
                        <NavItem eventKey={2} href="#/bye">Bye</NavItem>
                    </Nav>
                    {this.props.children}
                </div>
    }
}

const mapStateToProps = function(store) {
    return {
        users: store.userState.users
    };
}

export default connect(mapStateToProps)(Menu)