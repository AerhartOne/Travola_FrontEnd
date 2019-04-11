import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
        } from 'reactstrap';

    export default class HomepageNav extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        isOpen: false
        };
    }
    toggle = () => {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
        <div>
            <Navbar className="fixed-top" color="light" light expand="md">
            <NavbarBrand href="/">Travola</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink>Log In</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
}